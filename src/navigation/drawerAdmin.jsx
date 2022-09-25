import * as React from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "../pages/admin/homeAdmin";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useData } from "./context";
import { Avatar } from "react-native-paper";

const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
  const { admin } = useData();

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.navigate("preload");
      })
      .catch((error) => {});
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            height: 150,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Avatar.Text
            size={70}
            label={String(admin?.name).toLocaleUpperCase().substring(0, 2)}
          />

          <Text
            numberOfLines={2}
            style={{
              fontSize: 18,
              fontWeight: "bold",
              width: "85%",
              textAlign: "center",
            }}
          >
            {admin?.name}
          </Text>
        </View>
        <DrawerItem
          label={() => (
            <Text style={{ fontSize: 16, left: -12 }}>Clientes</Text>
          )}
          onPress={() => navigation.navigate("listUser")}
          icon={() => (
            <MaterialCommunityIcons
              name="account-multiple-outline"
              size={32}
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
