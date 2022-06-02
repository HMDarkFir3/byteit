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

import { MenuDTO } from "../dtos/MenuDTO";

interface MenuContextData {
  plates: MenuDTO[];
  drinks: MenuDTO[];
  isLoading: boolean;
  fetchMenu: (type: "all" | "plate" | "drink") => Promise<void>;
}

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuContext = createContext({} as MenuContextData);

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
  const [plates, setPlates] = useState<MenuDTO[]>([]);
  const [drinks, setDrinks] = useState<MenuDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchPlates() {
    setIsLoading(true);
    setPlates([]);

    const user = auth().currentUser;

    if (user.uid) {
      await firestore()
        .collection("plates")
        .get()
        .then((response) => {
          response.docs.map(async (doc) => {
            const reference = storage().ref(`/plates/${doc.id}.png`);
            const imageUrl = await reference.getDownloadURL();

            setPlates((prevState) => [
              ...prevState,
              {
                uid: doc.id,
                ...doc.data(),
                image: imageUrl,
              },
            ]);
          }) as MenuDTO[];
        })
        .catch((err) => {
          const error = translationFirebaseErrorsPTBR(err.code);
          Alert.alert(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  async function fetchDrinks() {
    setIsLoading(true);
    setDrinks([]);

    const user = auth().currentUser;

    if (user.uid) {
      await firestore()
        .collection("drinks")
        .get()
        .then((response) => {
          response.docs.map(async (doc) => {
            const reference = storage().ref(`/drinks/${doc.id}.png`);
            const imageUrl = await reference.getDownloadURL();

            setDrinks((prevState) => [
              ...prevState,
              {
                uid: doc.id,
                ...doc.data(),
                image: imageUrl,
              },
            ]);
          }) as MenuDTO[];
        })
        .catch((err) => {
          const error = translationFirebaseErrorsPTBR(err.code);
          Alert.alert(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  async function fetchMenu(type: "all" | "plate" | "drink") {
    if (type === "all") {
      fetchPlates();
      fetchDrinks();
    }

    if (type === "plate") {
      fetchPlates();
    }

    if (type === "drink") {
      fetchDrinks();
    }
  }

  return (
    <MenuContext.Provider value={{ plates, drinks, isLoading, fetchMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
