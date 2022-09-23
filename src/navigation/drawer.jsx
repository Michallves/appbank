import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "../pages/home";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useData } from "./context";
import { Avatar } from "react-native-paper";

const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
  const { user } = useData();
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Pressable
          onPress={() => navigation.navigate("profile")}
          style={{
            height: 150,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {user?.image ? (
            <Avatar.Image size={70} source={{ uri: user?.image }} />
          ) : (
            <Avatar.Text
              size={70}
              label={String(user?.name).toLocaleUpperCase().substring(0, 2)}
            />
          )}

          <Text
            numberOfLines={2}
            style={{
              fontSize: 18,
              fontWeight: "bold",
              width: "85%",
              textAlign: "center",
            }}
          >
            {user?.name}
          </Text>
        </Pressable>
        <DrawerItem
          label={() => <Text style={{ fontSize: 16, left: -12 }}>Perfil</Text>}
          onPress={() => navigation.navigate("profile")}
          icon={() => (
            <MaterialCommunityIcons
              name="account-outline"
              size={32}
              color="black"
            />
          )}
        />
        <DrawerItem
          label={() => (
            <Text style={{ fontSize: 16, left: -10 }}>Criar cartão</Text>
          )}
          onPress={() => navigation.navigate("nameCreateCard")}
          icon={() => (
            <MaterialCommunityIcons
              name="credit-card-plus-outline"
              size={30}
              color="black"
            />
          )}
        />
        <DrawerItem
          label={() => (
            <Text style={{ fontSize: 16, left: -10 }}>Cadastrar cartão</Text>
          )}
          inactiveTintColor="black"
          onPress={() => navigation.navigate("nameRegisterCard")}
          icon={() => (
            <MaterialCommunityIcons
              name="credit-card-chip-outline"
              size={30}
              color="black"
            />
          )}
        />
        <DrawerItem
          label={() => (
            <Text
              style={{
                color: "red",
                fontSize: 16,
                fontWeight: "bold",
                left: -10,
              }}
            >
              Sair
            </Text>
          )}
          onPress={() => logout()}
          icon={() => <MaterialIcons name="logout" size={30} color="red" />}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        headerTintColor: "black",
        drawerActiveTintColor: "black",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Cartões" component={Home} />
    </Drawer.Navigator>
  );
}
