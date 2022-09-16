import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/navigation/routes";
import DataProvider from "./src/navigation/context";

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <StatusBar
          style={"dart"}
          translucent={true}
          backgroundColor={"transt"}
        />
        <Routes />
      </NavigationContainer>
    </DataProvider>
  );
}
