import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { translationFirebaseErrorsPTBR } from "react-translation-firebase-errors";

import { COLLECTION_USER } from "../storages";

import { UserDTO } from "../dtos/UserDTO";

interface AuthContextData {
  user: UserDTO;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
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

              console.log(reference.fullPath);

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
        Alert.alert(err.code);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signOut() {
    await auth().signOut();

    await AsyncStorage.removeItem(COLLECTION_USER);

    setUser(null);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
