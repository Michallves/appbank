import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [idUser, setIdUser] = useState("");
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true);
        setIdUser(user.uid);
        const db = getFirestore();
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          setUser(doc.data());
        });
        const q = query(collection(db, "users", user.uid, "cards"));
        const cardsCreated = onSnapshot(q, (querySnapshot) => {
          const cd = [];
          querySnapshot.forEach((doc) => {
            cd.push({ ...doc.data(), id: doc.id });
          });
          setCards(cd);
        });
      } else {
        setAuth(false);
      }
    });
  }, []);

  const dataProvider = {
    idUser,
    user,
    auth,
    cards,
  };

  return (
    <DataContext.Provider value={dataProvider}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);

  const { idUser, user, auth, cards } = context;

  return { idUser, user, auth, cards };
}
