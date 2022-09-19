import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useData } from "./context";

import Preload from "../pages/preload";

import Login from "../pages/login/login";
import Login2 from "../pages/login/login2";

import Cpf from "../pages/register/cpf";
import Name from "../pages/register/name";
import Email from "../pages/register/email";
import Phone from "../pages/register/phone";
import Address from "../pages/register/address";
import TypeAccount from "../pages/register/typeAccount";
import PasswordRegister from "../pages/register/password/password";
import ConfirmPasswordRegister from "../pages/register/password/confirmPassword";

import Home from "../pages/home";
import Drawer from "./drawer";

const Stack = createNativeStackNavigator();

export default function () {
  const { auth } = useData();

  return (
    <Stack.Navigator
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
            component={Login2}
            options={{
              title: "senha",
            }}
          />
          <Stack.Screen
            name="register"
            component={Cpf}
            options={{ title: "Criar conta" }}
          />
          <Stack.Screen
            name="name"
            component={Name}
            options={{ title: "Nome completo" }}
          />
          <Stack.Screen
            name="email"
            component={Email}
            options={{ title: "E-mail" }}
          />
          <Stack.Screen
            name="phone"
            component={Phone}
            options={{ title: "Telefone" }}
          />
          <Stack.Screen
            name="address"
            component={Address}
            options={{ title: "Endereço" }}
          />
          <Stack.Screen
            name="typeAccount"
            component={TypeAccount}
            options={{ title: "Tipo de conta" }}
          />
          <Stack.Screen
            name="passwordRegister"
            component={PasswordRegister}
            options={{ title: "Senha" }}
          />
          <Stack.Screen
            name="confirmPasswordRegister"
            component={ConfirmPasswordRegister}
            options={{ title: "Confirmar senha" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: "Home", gestureEnabled: true }}
          />
          <Stack.Screen
            name="drawer"
            component={Drawer}
            options={{ title: "Home" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
