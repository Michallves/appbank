import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useData } from "../../../navigation/context";
import { Card } from "../../../components/card";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default ({ navigation }) => {
  const { admin } = useData();
  const [cards, setCards] = useState([]);
  const [idUser, setIdUser] = useState("");
  const [idCard, setIdCard] = useState("");

  const db = getFirestore();
  useEffect(() => {
    onSnapshot(query(collection(db, "cards")), (querySnapshot) => {
      const dt = [];
      querySnapshot.forEach((doc) => {
        dt.push({ ...doc.data(), id: doc.id });
      });
      setCards(dt);
    });
  }, []);

  function approveCard() {
    updateDoc(doc(db, "users", idUser, "cards", idCard), {
      state: "approved",
    });
    deleteDoc(doc(db, "cards", idCard));
  }

  function refuseCard() {
    updateDoc(doc(db, "users", idUser, "cards", idCard), {
      state: "refused",
    });
    deleteDoc(doc(db, "cards", idCard));
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => setIdUser(item.idUser) + setIdCard(item.id)}
          >
            <Card item={item} />
            {idCard == item.id ? (
              <View style={styles.viewBnts}>
                <TouchableOpacity
                  onPress={() => refuseCard()}
                  style={styles.bntR}
                >
                  <Text style={styles.textButton}>Recusar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => approveCard()}
                  style={styles.bntA}
                >
                  <Text style={styles.textButton}>Aprovar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <></>
            )}
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
