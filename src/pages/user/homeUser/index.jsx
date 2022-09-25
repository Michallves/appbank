import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useData } from "../../../navigation/context";
import { Card } from "../../../components/card";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
} from "firebase/firestore";

export default ({ navigation }) => {
  const { idUser } = useData();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    onSnapshot(
      query(collection(db, "users", idUser, "cards")),
      (querySnapshot) => {
        const dt = [];
        querySnapshot.forEach((doc) => {
          dt.push({ ...doc.data(), id: doc.id });
        });
        setCards(dt);
      }
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("card", { id: item.id })}
          >
            {item.state == "approved" ? (
              <></>
            ) : item.state == "waiting" ? (
              <View
                style={{
                  backgroundColor: "#919191",
                  width: "90%",
                  height: 60,
                  marginHorizontal: "5%",
                  marginBottom: -30,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  Aguardando...
                </Text>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: "red",
                  width: "90%",
                  height: 60,
                  marginHorizontal: "5%",
                  marginBottom: -30,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginTop: 10,
                  }}
                >
                  Recusado
                </Text>
              </View>
            )}
            <Card item={item} backgroundColor={"red"} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
