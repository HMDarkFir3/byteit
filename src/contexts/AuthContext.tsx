import React, {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
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
  setUser: Dispatch<SetStateAction<UserDTO>>;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface GoogleData {
  email: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
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

              const data: UserDTO = {
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

  async function signOut() {
    const currentUser = auth().currentUser;

    if (currentUser) {
      await auth().signOut();
    }

    await AsyncStorage.removeItem(COLLECTION_USER);

    setUser(null);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
