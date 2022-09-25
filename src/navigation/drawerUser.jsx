import React, { useEffect, useState } from "react";
import { Text, Pressable } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "../pages/user/homeUser";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useData } from "./context";
import { Avatar } from "react-native-paper";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  where,
} from "firebase/firestore";

const Drawer = createDrawerNavigator();

export default function ({ navigation }) {
  const { user, idUser } = useData();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    onSnapshot(
      query(
        collection(db, "users", idUser, "cards"),
        where("created", "==", true)
      ),
      (querySnapshot) => {
        const dt = [];
        querySnapshot.forEach((doc) => {
          dt.push({ ...doc.data(), id: doc.id });
        });
        setCards(dt);
      }
    );
  }, []);
  console.log(cards.length);
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigation.navigate("preload");
      });
  }

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Pressable
          onPress={() => navigation.navigate("profileUser")}
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
          onPress={() => navigation.navigate("profileUser")}
          icon={() => (
            <MaterialCommunityIcons
              name="account-outline"
              size={32}
              color="black"
            />
          )}
        />
        {cards.length <= 5 ? (
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
        ) : (
          <DrawerItem
            label={() => (
              <Text style={{ color: "#919191", fontSize: 16, left: -10 }}>
                Criar cartão
              </Text>
            )}
            icon={() => (
              <MaterialCommunityIcons
                name="credit-card-plus-outline"
                size={30}
                color="#919191"
              />
            )}
          />
        )}
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
