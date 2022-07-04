import React, {
  createContext,
  useEffect,
  useReducer,
  FC,
  ReactNode,
  Reducer,
  Dispatch,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

import {
  authReducer,
  initialState,
  AuthState,
  AuthAction,
} from "../reducers/AuthReducer";

import { COLLECTION_USER } from "../storages";

import { UserDTO } from "../dtos/UserDTO";

interface AuthContextData {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AuthState, AuthAction>>(
    authReducer,
    initialState
  );

  async function loadUser() {
    dispatch({ type: "loading", payload: true });

    try {
      const storedUser = await AsyncStorage.getItem(COLLECTION_USER);

      if (storedUser) {
        const userData = JSON.parse(storedUser) as UserDTO;

        dispatch({ type: "success", payload: userData });
      }
    } catch (error) {
      dispatch({ type: "error", payload: "Não há usuário em cache." });
    }

    dispatch({ type: "loading", payload: false });
  }

  async function signIn() {
    dispatch({ type: "loading", payload: true });

    try {
      const account = await auth().signInWithEmailAndPassword(
        state.email,
        state.password
      );

      if (account) {
        const profile = await firestore()
          .collection("users")
          .doc(account.user.uid)
          .get();

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
          } as UserDTO;

          await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));

          dispatch({ type: "success", payload: data });
        }
      }
    } catch (error) {
      dispatch({ type: "error", payload: error.code });
      Alert.alert("Atencao", state.error);
    }

    dispatch({ type: "loading", payload: false });
  }

  async function updateProfile() {
    dispatch({ type: "loading", payload: true });

    try {
      await firestore().collection("users").doc(state.user.uid).update({
        name: state.name,
        user_color: state.user_color,
      });

      const profile = await firestore()
        .collection("users")
        .doc(state.user.uid)
        .get();

      if (profile.exists) {
        const { name, email, user_color } = profile.data() as UserDTO;

        let reference: any = "";
        let imageUrl: string = "";

        if (state.image) {
          await firestore().collection("users").doc(state.user.uid).update({
            has_image: true,
          });

          reference = storage().ref(`/users/${state.user.uid}.png`);

          await reference.putFile(state.image);

          imageUrl = await reference.getDownloadURL();
        } else {
          imageUrl = state.user.image;
        }

        const data: UserDTO = {
          uid: state.user.uid,
          name,
          email,
          image: imageUrl,
          user_color,
        };

        await AsyncStorage.removeItem(COLLECTION_USER);
        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(data));

        dispatch({ type: "success", payload: data });
      }
    } catch (error) {
      dispatch({ type: "error", payload: error.code });
    }

    dispatch({ type: "loading", payload: false });
  }

  async function signOut() {
    const currentUser = auth().currentUser;

    if (currentUser) {
      await auth().signOut();
    }

    await AsyncStorage.removeItem(COLLECTION_USER);

    dispatch({ type: "signOut" });
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ state, dispatch, signIn, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
