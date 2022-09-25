import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [idUser, setIdUser] = useState("");
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState("");
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
        onSnapshot(doc(db, "admins", user.uid), (doc) => {
          setAdmin(doc.data());
        });
      } else {
        setAuth(false);
      }
    });
  }, []);

  const dataProvider = {
    idUser,
    user,
    admin,
    auth,
    cards,
  };

  return (
    <DataContext.Provider value={dataProvider}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);

  const { idUser, user, admin, auth, cards } = context;

  return { idUser, user, admin, auth, cards };
}
