import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import { Button } from "react-native-paper";
import { useData } from "../../navigation/context";
import firebase from "../../config/firebase";
import { getFirestore, doc, onSnapshot, deleteDoc } from "firebase/firestore";

export default function ({ navigation, route }, params) {
  const { idUser } = useData();
  const [idCard, setIdCard] = useState(route.params?.id);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    onSnapshot(doc(db, "users", idUser, "cards", idCard), (doc) => {
      setCard(doc.data());
    });
  }, []);

  function deleteCard() {
    const db = getFirestore();
    deleteDoc(doc(db, "users", idUser, "cards", idCard));
    navigation.goBack();
  }

  console.log(card);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/chip.png")}
            style={styles.ship}
          />
          {card.flag == "Mastercard" ? (
            <Image
              source={require("../../assets/mastercard.png")}
              style={styles.mastercard}
            />
          ) : card.flag == "Visa" ? (
            <Image
              source={require("../../assets/visa.png")}
              style={styles.visa}
            />
          ) : card.flag == "Elo" ? (
            <Image
              source={require("../../assets/elo.png")}
              style={styles.elo}
            />
          ) : card.flag == "American Express" ? (
            <Image
              source={require("../../assets/americanexpress.png")}
              style={styles.americanexpress}
            />
          ) : card.flag == "Hipercard" ? (
            <Image
              source={require("../../assets/hipercard.png")}
              style={styles.hipercard}
            />
          ) : (
            <></>
          )}
          <Text style={styles.number}>
            {String(card.number).substring(0, 4)}
            {"      "}
            {String(card.number).substring(4, 8)}
            {"      "}
            {String(card.number).substring(8, 12)}
            {"      "}
            {String(card.number).substring(12, 16)}
          </Text>
          <Text style={styles.holder}>Titular do cartão</Text>
          <Text style={styles.name}>{card.name}</Text>
          <Text style={styles.exp}>Validade:</Text>
          <Text style={styles.valid}>{card.dateValidity}</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.line} />
          {card.type ? (
            <View style={styles.typeView}>
              <Text style={styles.textType}>Tipo de cartão:</Text>
              <Text style={styles.textTypeCard}>
                {card.type == "debit"
                  ? "Débito"
                  : card.type == "credit"
                  ? "Crédito"
                  : card.type == "savings"
                  ? "Poupança"
                  : card.type == "credit/debit"
                  ? "Crédito e Débito"
                  : card.type == "savings/debit"
                  ? "Débito e Poupança"
                  : ""}
              </Text>
            </View>
          ) : (
            <></>
          )}
          <View style={styles.cvcView}>
            <Text style={styles.titleCvc}>CVC</Text>
            <Text style={styles.textCvc}>{card.cvc}</Text>
          </View>
        </View>
      </View>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="#bd0000"
        onPress={() => deleteCard()}
      >
        Excluir
      </Button>
    </SafeAreaView>
  );
}
