import React, { useState, useEffect, useRef } from "react";
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextInputMask } from "react-native-masked-text";

export default function ({ navigation, route }, params) {
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState("");

  function login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const [msgError, setMsgError] = useState("");
  const [secure, setSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
      >
        <View style={styles.viewInput}>
          <TextInputMask
            style={styles.input}
            type={"only-numbers"}
            value={password}
            maxLength={6}
            letterSpacing={10}
            selectionColor={"black"}
            placeholder="000000"
            keyboardType="number-pad"
            secureTextEntry={true}
            placeholderTextColor="#909090"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity>
            <Text style={styles.rs}>Recuperar senha</Text>
          </TouchableOpacity>
          {password.length == 6 ? (
            <TouchableOpacity onPress={() => login()} style={styles.button}>
              <Text style={styles.textButton}>entrar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonDisabled} disabled={true}>
              <Text style={styles.textButton}>entrar</Text>
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
  input: {
    height: 50,
    width: "90%",
    fontSize: 40,
    textAlign: "center",
    marginTop: 30,
  },
  viewButton: {
    height: 120,
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
  rs: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
