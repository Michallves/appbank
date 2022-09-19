import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [user, setUser] = useState();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true);
        const db = getFirestore();
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          setUser(doc.data());
        });
      } else {
        setAuth(false);
      }
    });
  });

  const dataProvider = {
    user,
    auth,
  };
  console.log(auth, user);
  return (
    <DataContext.Provider value={dataProvider}>{children}</DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);

  const { user, auth } = context;

  return {
    user,
    auth,
  };
}
