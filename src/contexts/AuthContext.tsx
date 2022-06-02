import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";
import { Alert } from "react-native";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { translationFirebaseErrorsPTBR } from "react-translation-firebase-errors";

import {
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_RESPONSE_TYPE,
  GOOGLE_SCOPE,
} from "@env";

import { googleApi, googleOAuthUrl } from "../services/googleApi";

import { COLLECTION_USER } from "../storages";

import { UserDTO } from "../dtos/UserDTO";

interface AuthContextData {
  user: UserDTO;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loadUser() {
    const storedUser = await AsyncStorage.getItem(COLLECTION_USER);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as UserDTO;

      setUser(userData);
    }
  }

  async function signIn(email: string, password: string) {
    setIsLoading(true);

    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (account) => {
        await firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then(async (profile) => {
            if (profile.exists) {
              const { name, email, has_image, user_color } =
                profile.data() as UserDTO;

              const reference = storage().ref(
                `/users/${has_image ? account.user.uid : "empty_user"}.png`
              );

              const imageUrl = await reference.getDownloadURL();

              const data = {
                uid: account.user.uid,
                name,
                email,
                image: imageUrl,
                user_color,
              };

              await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));

              setUser(data);
            }
          });
      })
      .catch((err) => {
        const error = translationFirebaseErrorsPTBR(err.code);
        Alert.alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signInWithGoogle() {
    const authUrl = `${googleOAuthUrl}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${GOOGLE_RESPONSE_TYPE}&scope=${encodeURI(
      String(GOOGLE_SCOPE)
    )}`;

    console.log(authUrl);

    const { params, type } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthorizationResponse;

    if (type === "success") {
      await googleApi
        .get("/userinfo", {
          params: {
            alt: "json",
            access_token: params.access_token,
          },
        })
        .then(async (response) => {
          console.log(response.data);

          await firestore()
            .collection("users")
            .doc(response.data.id)
            .get()
            .then(async (profile) => {
              if (profile.exists) {
                const { name, email, has_image, user_color } =
                  profile.data() as UserDTO;

                const reference = storage().ref(
                  `/users/${has_image ? response.data.id : "empty_user"}.png`
                );

                const imageUrl = await reference.getDownloadURL();

                const data = {
                  uid: response.data.uid,
                  name,
                  email,
                  image: imageUrl,
                  user_color,
                };

                await AsyncStorage.setItem(
                  COLLECTION_USER,
                  JSON.stringify(data)
                );

                setUser(data);
              } else {
              }
            });

          const userLogged = {
            id: response.data.id,
            first_name: response.data.given_name,
            last_name: response.data.family_name,
            email: response.data.email,
            photo: response.data.picture,
          };

          await AsyncStorage.setItem(
            COLLECTION_USER,
            JSON.stringify(userLogged)
          );
        });
    }
  }

  async function signInWithGiHub() {}

  async function signInWithSlack() {}

  async function signOut() {
    await auth().signOut();

    await AsyncStorage.removeItem(COLLECTION_USER);

    setUser(null);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, signIn, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
