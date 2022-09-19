import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [phone, setPhone] = useState(route.params?.phone);
  const [address, setAddress] = useState(route.params?.address);
  const [typeAccount, setTypeAccount] = useState("");
  console.log(typeAccount);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.titleInput}>Tipo de conta</Text>
        <RadioButton.Group
          style={styles.radioView}
          onValueChange={(newValue) => setTypeAccount(newValue)}
          value={typeAccount}
        >
          <Pressable
            onPress={() => setTypeAccount("chain")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="chain"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>Corrente</Text>
          </Pressable>
          <Pressable
            onPress={() => setTypeAccount("savings")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android color="black" value="savings" />
            </View>
            <Text style={styles.textRadio}>Poupança</Text>
          </Pressable>
        </RadioButton.Group>
      </View>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="black"
        disabled={typeAccount != "" ? false : true}
        onPress={() =>
          navigation.navigate("passwordRegister", {
            cpf: cpf,
            name: name,
            email: email,
            phone: phone,
            address: address,
            typeAccount: typeAccount,
          })
        }
      >
        continuar
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
  titleInput: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 30,
    marginVertical: 20,
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
    borderBottomColor: "#c1c1c1",
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
