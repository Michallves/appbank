import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import firebase from "../../config/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useData } from "../../navigation/context";

export default function ({ navigation, route }, params) {
  const { idUser } = useData();
  const [name, setName] = useState(route.params?.name);
  const [number, setNumber] = useState(route.params?.number);
  const [flag, setFlag] = useState(route.params?.flag);
  const [cvc, setCvc] = useState(route.params?.cvc);
  const [dateValidy, setDateValidy] = useState("");

  useEffect(() => {
    setDateValidy(mm + "/" + yy);
  });

  const [mm, setMm] = useState("09");
  const [yy, setYy] = useState("2022");

  function registerCard() {
    const db = getFirestore();
    setDoc(doc(db, "users", idUser, "cards", number), {
      name: name,
      number: number,
      flag: flag,
      cvc: cvc,
      dateValidy: dateValidy,
      state: "waiting",
    }).then(() => {
      navigation.navigate("home");
    });
  }
  console.log(date);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.viewPicker}>
          <Text style={styles.titlePicker}>Mês</Text>
          <Picker
            itemStyle={styles.picker}
            dropdownIconColor={"black"}
            enabled
            selectedValue={mm}
            onValueChange={(itemValue, itemIndex) => setMm(itemValue)}
          >
            <Picker.Item label="01" value="01" />
            <Picker.Item label="02" value="02" />
            <Picker.Item label="03" value="03" />
            <Picker.Item label="04" value="04" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="06" value="06" />
            <Picker.Item label="07" value="07" />
            <Picker.Item label="08" value="08" />
            <Picker.Item label="09" value="09" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
        </View>

        <View style={styles.viewPicker}>
          <Text style={styles.titlePicker}>Ano</Text>
          <Picker
            itemStyle={styles.picker}
            dropdownIconColor={"black"}
            selectedValue={yy}
            onValueChange={(itemValue, itemIndex) => setYy(itemValue)}
          >
            <Picker.Item label="2017" value="17" />
            <Picker.Item label="2018" value="18" />
            <Picker.Item label="2019" value="19" />
            <Picker.Item label="2020" value="20" />
            <Picker.Item label="2021" value="21" />
            <Picker.Item label="2022" value="22" />
            <Picker.Item label="2023" value="23" />
            <Picker.Item label="2024" value="24" />
            <Picker.Item label="2025" value="25" />
            <Picker.Item label="2026" value="26" />
            <Picker.Item label="2027" value="27" />
          </Picker>
        </View>
      </View>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="black"
        onPress={() => registerCard()}
      >
        cadastrar
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
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  viewPicker: {
    width: "30%",
  },
  picker: {
    marginTop: -20,
    height: 170,
  },
  titlePicker: {
    fontSize: 22,
    textAlign: "center",
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
