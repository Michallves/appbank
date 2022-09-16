import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params.cpf);
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(route.params.email);
  const [tel, setTel] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
      >
        <View style={styles.viewInput}>
          <Text style={styles.textInput}>Número do telefone</Text>

          <TextInputMask
            style={styles.input}
            type={"cel-phone"}
            maxLength={15}
            selectionColor={"black"}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#909090"
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={tel}
            onChangeText={(text) => setTel(text)}
          />
        </View>
        <View style={styles.viewButton}>
          {tel.length >= 14 ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("address", {
                  cpf: cpf,
                  name: name,
                  email: email,
                  tel: tel,
                })
              }
              style={styles.button}
            >
              <Text style={styles.textButton}>continuar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonDisabled} disabled={true}>
              <Text style={styles.textButton}>continuar</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewInput: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    fontSize: 14,
    fontWeight: "bold",
    width: "90%",
    textAlign: "left",
    marginTop: 20,
  },
  input: {
    height: 50,
    width: "90%",
    fontSize: 26,
  },
  viewButton: {
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
  },
});