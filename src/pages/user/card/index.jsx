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
import { useData } from "../../../navigation/context";
import { getFirestore, doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { Card } from "../../../components/card";

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
  6;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {card.state == "approved" ? (
          <></>
        ) : card.state == "waiting" ? (
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "#919191",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Aguardando...
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Recusado</Text>
          </View>
        )}
        <Card item={card} />
        <View style={styles.card}>
          <View style={styles.line} />
          {card.type ? (
            <View style={styles.typeView}>
              <Text style={styles.textType}>Tipo de cart??o:</Text>
              <Text style={styles.textTypeCard}>
                {card.type == "debit"
                  ? "D??bito"
                  : card.type == "credit"
                  ? "Cr??dito"
                  : card.type == "savings"
                  ? "Poupan??a"
                  : card.type == "credit/debit"
                  ? "Cr??dito e D??bito"
                  : card.type == "savings/debit"
                  ? "D??bito e Poupan??a"
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
