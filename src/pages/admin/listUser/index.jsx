import React, { useState, useEffect, useLayoutEffect } from "react";
import { FlatList, SafeAreaView, Pressable, View, Text } from "react-native";
import styles from "./styles";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
  collectionGroup,
} from "firebase/firestore";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("state");
  useEffect(() => {
    const db = getFirestore();
    onSnapshot(
      query(
        collection(db, "users"),
        filter == "state" ? orderBy("state", "asc") : orderBy("name", "asc")
      ),
      (querySnapshot) => {
        const dt = [];
        querySnapshot.forEach((doc) => {
          dt.push({ ...doc.data(), id: doc.id });
        });
        setUsers(dt);
      }
    );
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          {filter == "state" ? (
            <Pressable onPress={() => setFilter("alphabet")}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={28}
                color="black"
              />
            </Pressable>
          ) : filter == "alphabet" ? (
            <Pressable onPress={() => setFilter("state")}>
              <MaterialCommunityIcons
                name="order-alphabetical-ascending"
                size={24}
                color="black"
              />
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      ),
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.viewUser}>
            <View style={styles.viewImageUser}>
              {item.image ? (
                <Avatar.Image size={60} source={{ uri: item.image }} />
              ) : (
                <Avatar.Text
                  size={60}
                  label={String(item.name).toLocaleUpperCase().substring(0, 2)}
                />
              )}
            </View>
            <View style={styles.viewNS}>
              <Text style={styles.textNameUser}>{item.name}</Text>
              <Text style={styles.textStateUser}>{item.state}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
