import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function Card({ item }) {
  return (
    <View style={styles.viewCard}>
      <View style={styles.viewIF}>
        <Image source={require("../assets/chip.png")} style={styles.chip} />
        {item.flag == "Mastercard" ? (
          <Image
            source={require("../assets/mastercard.png")}
            style={styles.mastercard}
          />
        ) : item.flag == "Visa" ? (
          <Image source={require("../assets/visa.png")} style={styles.visa} />
        ) : item.flag == "Elo" ? (
          <Image source={require("../assets/elo.png")} style={styles.elo} />
        ) : item.flag == "American Express" ? (
          <Image
            source={require("../assets/americanexpress.png")}
            style={styles.americanexpress}
          />
        ) : item.flag == "Hipercard" ? (
          <Image
            source={require("../assets/hipercard.png")}
            style={styles.hipercard}
          />
        ) : (
          <></>
        )}
      </View>

      <View style={styles.viewNumber}>
        <Text style={styles.textNumber}>
          {String(item.number).substring(0, 4)}
          {"      "}
          <Text style={{ fontSize: 18, letterSpacing: -5 }}>＊＊＊＊</Text>
          {"      "}
          <Text style={{ fontSize: 18, letterSpacing: -5 }}>＊＊＊＊</Text>
          {"      "}
          {String(item.number).substring(12, 16)}
        </Text>
      </View>
      <View style={styles.viewNV}>
        <View>
          <Text style={styles.titleName}>Titular do cartão</Text>
          <Text style={styles.textName}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.titleValid}>Validade:</Text>
          <Text style={styles.textValid}>{item.dateValidity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewCard: {
    backgroundColor: "black",
    height: 220,
    marginVertical: 10,
    marginHorizontal: "5%",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: "1",
    shadowOffset: { width: 1, height: 1 },
  },
  viewIF: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  viewNumber: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  viewNV: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  chip: {
    height: 60,
    width: 60,
  },
  mastercard: {
    height: 50,
    width: 80,
  },
  visa: {
    height: 30,
    width: 90,
  },
  elo: {
    height: 30,
    width: 90,
    marginRight: -1,
  },
  americanexpress: {
    height: 60,
    width: 60,
  },
  hipercard: {
    height: 40,
    width: 90,
  },
  textNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleName: {
    color: "white",
    fontSize: 10,
  },
  textName: {
    color: "white",
    fontSize: 20,
  },

  titleValid: {
    color: "white",
    fontSize: 10,
  },
  textValid: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
