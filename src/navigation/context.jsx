import React, { createContext, useState, useContext, useEffect } from "react";
import firebase from "../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuth(true);
      } else {
      }
    });
  });

  const dataProvider = {
    user,
    auth,
  };

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
