import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useData } from "./context";

import Preload from "../pages/preload";

import Login from "../pages/login/login";
import login2 from "../pages/login/login2";

import Cpf from "../pages/register/cpf";
import Name from "../pages/register/name";
import Email from "../pages/register/email";
import Tel from "../pages/register/tel";
import Address from "../pages/register/address";

import Home from "../pages/home";

const Stack = createNativeStackNavigator();

export default function () {
  const { auth } = useData();

  return (
    <Stack.Navigator
      initialRouteName="address"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerTintColor: "black",
        headerTitleAlignn: "center",
      }}
    >
      {auth === false ? (
        <>
          <Stack.Screen
            name="preload"
            component={Preload}
            options={{ headerShown: false, title: "Inicio" }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ title: "entrar" }}
          />
          <Stack.Screen
            name="login2"
            component={login2}
            options={{ title: "senha" }}
          />
          <Stack.Screen
            name="register"
            component={Cpf}
            options={{ title: "Criar conta" }}
          />
          <Stack.Screen
            name="name"
            component={Name}
            options={{ title: "Nome" }}
          />
          <Stack.Screen
            name="email"
            component={Email}
            options={{ title: "Email" }}
          />
          <Stack.Screen
            name="tel"
            component={Tel}
            options={{ title: "Telefone" }}
          />
          <Stack.Screen
            name="address"
            component={Address}
            options={{ title: "Endereço" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false, gestureEnabled: true }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
