import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useData } from "../../../navigation/context";
import { uuidv4 } from "@firebase/util";
export default function ({ navigation, route }, params) {
  const { idUser, cards } = useData();
  const [name, setName] = useState(route.params?.name);
  const [flag, setFlag] = useState(route.params?.flag);
  const [type, setType] = useState(route.params?.type);
  const [dateValidity, setDateValidity] = useState("");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [idCard, setIdcard] = useState(uuidv4());

  useEffect(() => {
    var min;
    var max;
    if (flag == "Mastercard") {
      min = Math.ceil(5100000000000000);
      max = Math.floor(5500000000000000);
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    } else if (flag == "Visa") {
      min = Math.ceil(4000000000000000);
      max = Math.floor(4999999999999999);
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    } else if (flag == "American Express") {
      min = Math.ceil(3400000000000000);
      max = Math.floor(3700000000000000);
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    } else if (flag == "Hipercard") {
      min = Math.ceil(3841000000000000);
      max = Math.floor(3841009999999999);
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    } else if (flag == "Elo") {
      min = Math.ceil(6504050000000000);
      max = Math.floor(6504399999999999);
      setNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  }, []);

  useEffect(() => {
    var min = Math.ceil(0);
    var max = Math.floor(999);
    var number = String(Math.floor(Math.random() * (max - min + 1)) + min);
    if (number.length == 1) {
      setCvc("00" + number);
    } else if (number.length == 2) {
      setCvc("0" + number);
    } else {
      setCvc(number);
    }
  }, []);

  const [validity, setValidity] = useState(2);
  useEffect(() => {
    var date = new Date();

    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = String(date.getFullYear() + validity)
      .toString()
      .slice(-2);

    setDateValidity(month + "/" + year);
  }, [validity]);

  function createCard() {
    const db = getFirestore();
    setDoc(doc(db, "users", idUser, "cards", idCard), {
      name: name,
      number: number,
      type: type,
      flag: flag,
      cvc: cvc,
      dateValidity: dateValidity,
      state: "waiting",
      created: true,
    }).then(() => {
      setDoc(doc(db, "cards", idCard), {
        idUser: idUser,
        name: name,
        number: number,
        type: type,
        flag: flag,
        cvc: cvc,
        dateValidity: dateValidity,
        state: "waiting",
        created: true,
      }).then(() => {
        navigation.navigate("homeUser");
      });
    });
  }
  console.log(dateValidity);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <RadioButton.Group
          style={styles.radioView}
          onValueChange={(newValue) => setValidity(newValue)}
          value={validity}
        >
          <Pressable onPress={() => setValidity(2)} style={styles.radioButton}>
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value={2}
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>2 anos</Text>
          </Pressable>
          <Pressable onPress={() => setValidity(4)} style={styles.radioButton}>
            <View style={styles.radio}>
              <RadioButton.Android color="black" value={4} />
            </View>
            <Text style={styles.textRadio}>4 anos</Text>
          </Pressable>
          <Pressable onPress={() => setValidity(5)} style={styles.radioButton}>
            <View style={styles.radio}>
              <RadioButton.Android color="black" value={5} />
            </View>
            <Text style={styles.textRadio}>5 anos</Text>
          </Pressable>
          <Pressable onPress={() => setValidity(6)} style={styles.radioButton}>
            <View style={styles.radio}>
              <RadioButton.Android color="black" value={6} />
            </View>
            <Text style={styles.textRadio}>6 anos</Text>
          </Pressable>
        </RadioButton.Group>
      </View>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="black"
        disabled={
          name != "" &&
          flag != "" &&
          type != "" &&
          dateValidity != "" &&
          cards.length <= 6
            ? false
            : true
        }
        onPress={() => createCard()}
      >
        criar
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view: {
    flex: 1,
  },
  radioView: {
    flex: 1,
    backgroundColor: "red",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
    width: "100%",
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 0.5,
    marginLeft: 20,
  },
  radio: { marginRight: 10 },
  textRadio: {
    fontSize: 16,
  },
  button: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
    height: 50,
    borderRadius: 30,
  },
  contentButton: { width: "100%", height: "100%" },
});
