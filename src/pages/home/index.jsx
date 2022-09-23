import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";
import styles from "./styles";
import { useData } from "../../navigation/context";

export default ({ navigation }) => {
  const { user, cards } = useData();
  const [active, setActive] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("card", { id: item.id });
            }}
            style={styles.card}
          >
            <Image
              source={require("../../assets/chip.png")}
              style={styles.ship}
            />
            {item.flag == "Mastercard" ? (
              <Image
                source={require("../../assets/mastercard.png")}
                style={styles.mastercard}
              />
            ) : item.flag == "Visa" ? (
              <Image
                source={require("../../assets/visa.png")}
                style={styles.visa}
              />
            ) : item.flag == "Elo" ? (
              <Image
                source={require("../../assets/elo.png")}
                style={styles.elo}
              />
            ) : item.flag == "American Express" ? (
              <Image
                source={require("../../assets/americanexpress.png")}
                style={styles.americanexpress}
              />
            ) : item.flag == "Hipercard" ? (
              <Image
                source={require("../../assets/hipercard.png")}
                style={styles.hipercard}
              />
            ) : (
              <></>
            )}

            <Text style={styles.number}>
              {String(item.number).substring(0, 4)}
              {"     "}
              <Text style={{ fontSize: 18, letterSpacing: -5 }}>＊＊＊＊</Text>
              {"     "}
              <Text style={{ fontSize: 18, letterSpacing: -5 }}>＊＊＊＊</Text>
              {"     "}
              {String(item.number).substring(12, 16)}
            </Text>
            <Text style={styles.holder}>Titular do cartão</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.exp}>Validade:</Text>
            <Text style={styles.valid}>{item.dateValidity}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
