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

import Drawer from "./drawer";

import Profile from "../pages/profile";
//Create Card
import NameCreateCard from "../pages/createCard/name";
import TypeCreateCard from "../pages/createCard/type";
import FlagCreateCard from "../pages/createCard/flag";
import DateValidyCreateCard from "../pages/createCard/dateValidy";
//Register card
import NameRegisterCard from "../pages/registerCard/name";
import NumberRegisterCard from "../pages/registerCard/number";
import CvcRegisterCard from "../pages/registerCard/cvc";
import DateValidyRegisterCard from "../pages/registerCard/dateValidy";

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {
  const { auth } = useData();

  return (
    <Stack.Navigator
      initialRouteName="dateValidyCreateCard"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: true,
        headerTintColor: "black",
        headerTitleAlign: "center",
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
            component={Drawer}
            options={{ gestureEnabled: true, headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ title: "Perfil" }}
          />

          <Stack.Screen
            name="nameCreateCard"
            component={NameCreateCard}
            options={{ title: "Criar cartão" }}
          />
          <Stack.Screen
            name="typeCreateCard"
            component={TypeCreateCard}
            options={{ title: "Tipo de cartão" }}
          />
          <Stack.Screen
            name="flagCreateCard"
            component={FlagCreateCard}
            options={{ title: "Bandeira" }}
          />
          <Stack.Screen
            name="dateValidyCreateCard"
            component={DateValidyCreateCard}
            options={{ title: "Validade" }}
          />
          <Stack.Screen
            name="nameRegisterCard"
            component={NameRegisterCard}
            options={{ title: "Cadastrar cartão" }}
          />
          <Stack.Screen
            name="numberRegisterCard"
            component={NumberRegisterCard}
            options={{ title: "Número" }}
          />
          <Stack.Screen
            name="cvcRegisterCard"
            component={CvcRegisterCard}
            options={{ title: "CVC" }}
          />
          <Stack.Screen
            name="dateValidyRegisterCard"
            component={DateValidyRegisterCard}
            options={{ title: "Data de Validade" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
