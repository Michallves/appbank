import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import styles from "./styles";
export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [phone, setPhone] = useState(route.params?.phone);
  const [address, setAddress] = useState(route.params?.address);
  const [accountTypeBank, setAccountTypeBank] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginLeft: 30,
            marginVertical: 10,
          }}
        >
          Tipo de conta
        </Text>
        <RadioButton.Group
          style={styles.radioView}
          onValueChange={(newValue) => setAccountTypeBank(newValue)}
          value={accountTypeBank}
        >
          <Pressable
            onPress={() => setAccountTypeBank("chain")}
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
            onPress={() => setAccountTypeBank("savings")}
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
        disabled={accountTypeBank != "" ? false : true}
        onPress={() =>
          navigation.navigate("passwordRegisterUser", {
            cpf: cpf,
            name: name,
            email: email,
            phone: phone,
            address: address,
            accountTypeBank: accountTypeBank,
          })
        }
      >
        continuar
      </Button>
    </SafeAreaView>
  );
}
