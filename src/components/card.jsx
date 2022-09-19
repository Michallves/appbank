import React from "react";
import { Image, Pressable, View, Text, StyleSheet } from "react-native";

export function Card({ item }) {
  return (
    <Pressable style={styles.card}>
      <Image source={require("../assets/ship.png")} style={styles.ship} />
      {item.flag === "mastercard" ? (
        <Image
          source={require("../assets/mastercard.png")}
          style={styles.mastercard}
        />
      ) : (
        <></>
      )}
      {item.flag === "visa" ? (
        <Image source={require("../assets/visa.png")} style={styles.visa} />
      ) : (
        <></>
      )}
      {item.flag === "elo" ? (
        <Image source={require("../assets/elo.png")} style={styles.elo} />
      ) : (
        <></>
      )}
      {item.flag === "americanexpress" ? (
        <Image
          source={require("../assets/americanexpress.png")}
          style={styles.americanexpress}
        />
      ) : (
        <></>
      )}
      {item.flag === "hipercard" ? (
        <Image
          source={require("../assets/hipercard.png")}
          style={styles.hipercard}
        />
      ) : (
        <></>
      )}
      <Text style={styles.number}>
        {item.number.substring(0, 4)}
        {"      "}
        <Text style={{ fontSize: 18, letterSpacing: -5 }}>＊＊＊＊</Text>
        {"      "}
        <Text style={{ fontSize: 18, letterSpacing: -5 }}>＊＊＊＊</Text>
        {"      "}
        {item.number.substring(15, 19)}
      </Text>
      <Text style={styles.holder}>Titular do cartão</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.exp}>Data Exp:</Text>
      <Text style={styles.valid}>{item.dateExpires}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    height: 220,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowOffset: 1,
  },
  ship: {
    height: 60,
    width: 60,
    position: "absolute",
    left: 20,
    top: 10,
  },
  mastercard: {
    height: 50,
    width: 80,
    position: "absolute",
    right: 15,
    top: 10,
  },
  visa: {
    height: 30,
    width: 90,
    position: "absolute",
    right: 15,
    top: 15,
  },
  elo: {
    height: 30,
    width: 90,
    position: "absolute",
    right: 3,
    top: 15,
  },
  americanexpress: {
    height: 60,
    width: 60,
    position: "absolute",
    right: 20,
    top: 15,
  },
  hipercard: {
    height: 40,
    width: 90,
    position: "absolute",
    right: 20,
    top: 15,
  },
  number: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 20,
    top: 100,
  },
  holder: {
    color: "white",
    fontSize: 10,
    position: "absolute",
    left: 20,
    top: 165,
  },
  name: {
    color: "white",
    fontSize: 20,
    position: "absolute",
    left: 20,
    top: 180,
  },
  valid: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    right: 20,
    top: 180,
  },
  exp: {
    color: "white",
    fontSize: 10,
    position: "absolute",
    right: 25,
    top: 165,
  },
});
