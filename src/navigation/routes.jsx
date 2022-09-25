import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useData } from "./context";

import Preload from "../pages/preload";
//LoginUser
import CpfLoginUser from "../pages/user/loginUser/cpf";
import PasswordLoginUser from "../pages/user/loginUser/password";
//RegisterUser
import CpfRegisterUser from "../pages/user/registerUser/cpf";
import NameRegisterUser from "../pages/user/registerUser/name";
import EmailRegisterUser from "../pages/user/registerUser/email";
import PhoneRegisterUser from "../pages/user/registerUser/phone";
import AddressRegisterUser from "../pages/user/registerUser/address";
import TypeAccountRegisterUser from "../pages/user/registerUser/typeAccount";
import PasswordRegisterUser from "../pages/user/registerUser/password";
import ConfirmPasswordRegisterUser from "../pages/user/registerUser/confirmPassword";
//RecoverUser
import CpfRecoverPasswordUser from "../pages/user/recoverPasswordUser/cpf";
import PasswordRecoverPasswordUser from "../pages/user/recoverPasswordUser/password";
//LoginAdmin
import CpfLoginAdmin from "../pages/admin/loginAdmin/cpf";
import PasswordLoginAdmin from "../pages/admin/loginAdmin/password";
//RegisterAdmin
import CpfRegisterAdmin from "../pages/admin/registerAdmin/cpf";
import NameRegisterAdmin from "../pages/admin/registerAdmin/name";
import EmailRegisterAdmin from "../pages/admin/registerAdmin/email";
import AddressRegisterAdmin from "../pages/admin/registerAdmin/address";
import PasswordRegisterAdmin from "../pages/admin/registerAdmin/password";
import ConfirmPasswordRegisterAdmin from "../pages/admin/registerAdmin/confirmPassword";
//RecoverAdmin
import CpfRecoverPasswordAdmin from "../pages/admin/recoverPasswordAdmin/cpf";
import PasswordRecoverPasswordAdmin from "../pages/admin/recoverPasswordAdmin/password";
//HomeUser
import DrawerUser from "./drawerUser";
import Card from "../pages/user/card";
//ProfileUser
import ProfileUser from "../pages/user/profile/profile";
import EditNameProfile from "../pages/user/profile/name";
import EditPasswordProfile from "../pages/user/profile/password";
//CreateCard
import NameCreateCard from "../pages/user/createCard/name";
import TypeCreateCard from "../pages/user/createCard/type";
import FlagCreateCard from "../pages/user/createCard/flag";
import DateValidyCreateCard from "../pages/user/createCard/dateValidy";
//RegisterCard
import NameRegisterCard from "../pages/user/registerCard/name";
import NumberRegisterCard from "../pages/user/registerCard/number";
import CvcRegisterCard from "../pages/user/registerCard/cvc";
import DateValidityRegisterCard from "../pages/user/registerCard/dateValidity";
//HomeAdmin
import DrawerAdmin from "./drawerAdmin";
import ListUser from "../pages/admin/listUser";

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {
  const { auth, user } = useData();

  return (
    <Stack.Navigator
      initialRouteName=""
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
            name="loginUser"
            component={CpfLoginUser}
            options={{ title: "Entrar" }}
          />
          <Stack.Screen
            name="passwordLoginUser"
            component={PasswordLoginUser}
            options={{
              title: "senha",
            }}
          />
          <Stack.Screen
            name="registerUser"
            component={CpfRegisterUser}
            options={{ title: "Criar conta" }}
          />
          <Stack.Screen
            name="nameRegisterUser"
            component={NameRegisterUser}
            options={{ title: "Nome completo" }}
          />
          <Stack.Screen
            name="emailRegisterUser"
            component={EmailRegisterUser}
            options={{ title: "E-mail" }}
          />
          <Stack.Screen
            name="phoneRegisterUser"
            component={PhoneRegisterUser}
            options={{ title: "Telefone" }}
          />
          <Stack.Screen
            name="addressRegisterUser"
            component={AddressRegisterUser}
            options={{ title: "Endereço" }}
          />
          <Stack.Screen
            name="typeAccountRegisterUser"
            component={TypeAccountRegisterUser}
            options={{ title: "Tipo de conta" }}
          />
          <Stack.Screen
            name="passwordRegisterUser"
            component={PasswordRegisterUser}
            options={{ title: "Senha" }}
          />
          <Stack.Screen
            name="confirmPasswordRegisterUser"
            component={ConfirmPasswordRegisterUser}
            options={{ title: "Confirmar senha" }}
          />
          <Stack.Screen
            name="cpfRecoverPasswordUser"
            component={CpfRecoverPasswordUser}
            options={{ title: "Recuperar senha" }}
          />
          <Stack.Screen
            name="passwordRecoverPasswordUser"
            component={PasswordRecoverPasswordUser}
            options={{ title: "Nova senha" }}
          />
          <Stack.Screen
            name="loginAdmin"
            component={CpfLoginAdmin}
            options={{ title: "Entrar Admin" }}
          />
          <Stack.Screen
            name="passwordLoginAdmin"
            component={PasswordLoginAdmin}
            options={{
              title: "Senha",
            }}
          />
          <Stack.Screen
            name="registerAdmin"
            component={CpfRegisterAdmin}
            options={{ title: "Criar conta Admin" }}
          />
          <Stack.Screen
            name="nameRegisterAdmin"
            component={NameRegisterAdmin}
            options={{ title: "Nome completo" }}
          />
          <Stack.Screen
            name="emailRegisterAdmin"
            component={EmailRegisterAdmin}
            options={{ title: "E-mail" }}
          />

          <Stack.Screen
            name="addressRegisterAdmin"
            component={AddressRegisterAdmin}
            options={{ title: "Endereço" }}
          />

          <Stack.Screen
            name="passwordRegisterAdmin"
            component={PasswordRegisterAdmin}
            options={{ title: "Senha" }}
          />
          <Stack.Screen
            name="confirmPasswordRegisterAdmin"
            component={ConfirmPasswordRegisterAdmin}
            options={{ title: "Confirmar senha" }}
          />
          <Stack.Screen
            name="cpfRecoverPasswordAdmin"
            component={CpfRecoverPasswordAdmin}
            options={{ title: "Recuperar senha" }}
          />
          <Stack.Screen
            name="passwordRecoverPasswordAdmin"
            component={PasswordRecoverPasswordAdmin}
            options={{ title: "Nova senha" }}
          />
        </>
      ) : user?.accountType === "user" ? (
        <>
          <Stack.Screen
            name="homeUser"
            component={DrawerUser}
            options={{ gestureEnabled: true, headerShown: false }}
          />
          <Stack.Screen
            name="card"
            component={Card}
            options={{ title: "Cartão" }}
          />
          <Stack.Screen
            name="profileUser"
            component={ProfileUser}
            options={{ title: "Perfil" }}
          />
          <Stack.Screen
            name="editNameProfile"
            component={EditNameProfile}
            options={{ title: "Editar nome" }}
          />
          <Stack.Screen
            name="editPasswordProfile"
            component={EditPasswordProfile}
            options={{ title: "Editar senha" }}
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
            name="dateValidityRegisterCard"
            component={DateValidityRegisterCard}
            options={{ title: "Data de Validade" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="homeAdmin"
            component={DrawerAdmin}
            options={{ gestureEnabled: true, headerShown: false }}
          />
          <Stack.Screen
            name="listUser"
            component={ListUser}
            options={{ title: "Clientes" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
