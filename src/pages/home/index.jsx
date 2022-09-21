import React, { useState, useEffect, useLayoutEffect } from "react";
import { Text, View, FlatList, SafeAreaView, Pressable } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "../../components/card";
import { useData } from "../../navigation/context";

export default ({ navigation }) => {
  const { user } = useData();

  const DATA = [
    {
      id: 0,
      name: "Michael Alves Pereira",
      number: "1155.4551.5154.5451",
      flag: "mastercard",
      dateExpires: "02/26",
    },
    {
      id: 2,
      name: "Junior Mama Rola",
      number: "1155.4551.5154.5451",
      flag: "visa",
      dateExpires: "02/26",
    },
    {
      id: 3,
      name: "João Vitor Rei delas",
      number: "1155.4551.5154.5451",
      flag: "elo",
      dateExpires: "02/26",
    },
    {
      id: 4,
      name: "Felipe Oreia",
      number: "1155.4551.5154.5451",
      flag: "americanexpress",
      dateExpires: "02/26",
    },
    {
      id: 5,
      name: "Paulo Eronbras Henrique",
      number: "1155.4551.5154.5451",
      flag: "hipercard",
      dateExpires: "02/26",
    },
  ];

  const [active, setActive] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </SafeAreaView>
  );
};
