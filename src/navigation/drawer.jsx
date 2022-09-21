import * as React from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "../pages/home";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useData } from "./context";
import { getAuth, signOut } from "firebase/auth";

const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }

  function CustomDrawerContent(props) {
    const { user } = useData();
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            height: 120,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            marginLeft: 15,
          }}
        >
          <View>
            {"" == "" ? (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={60}
                color="black"
              />
            ) : (
              <Image />
            )}
          </View>

          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: 5,
              marginRight: 20,
            }}
          >
            {user.name}
          </Text>
        </View>
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
              name="credit-card-chip-outline"
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
              name="credit-card-plus-outline"
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
