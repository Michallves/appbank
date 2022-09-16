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
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function ({ navigation, route }, params) {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
      >
        <View style={styles.viewInput}>
          <Text style={styles.textInput}>Digite seu CPF</Text>
          <TextInputMask
            style={styles.input}
            type={"cpf"}
            value={email}
            maxLength={14}
            selectionColor={"black"}
            placeholder="000.000.000-00"
            placeholderTextColor="#909090"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.viewButton}>
          {email.length >= 14 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("login2", { email: email })}
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
