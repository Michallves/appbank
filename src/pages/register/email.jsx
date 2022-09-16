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

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params.cpf);
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
      >
        <View style={styles.viewInput}>
          <Text style={styles.textInput}>Digite seu email</Text>
          <TextInput
            style={styles.input}
            type={"text"}
            maxLength={50}
            selectionColor={"black"}
            placeholder="michael123@gmail.com"
            placeholderTextColor="#909090"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.viewButton}>
          {email.length >= 10 ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("tel", {
                  cpf: cpf,
                  name: name,
                  email: email,
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
