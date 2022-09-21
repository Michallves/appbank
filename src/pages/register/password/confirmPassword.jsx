import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import styles from "./styles";
import firebase from "../../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { TextInput, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [phone, setPhone] = useState(route.params?.phone);
  const [address, setAddress] = useState(route.params?.address);
  const [typeAccount, setTypeAccount] = useState(route.params?.typeAccount);
  const [password, setPassword] = useState(route.params?.password);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [password4, setPassword4] = useState("");
  const [password5, setPassword5] = useState("");
  const [password6, setPassword6] = useState("");

  const ref_input = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);
  useEffect(() => {
    setConfirmPassword(
      password1 + password2 + password3 + password4 + password5 + password6
    );
  }, [password1, password2, password3, password4, password5, password6]);

  function focus() {
    if (password.length == 6) {
      ref_input6.current.focus();
    }
    if (password.length == 0) {
      ref_input.current.focus();
    }
  }

  const [secure, setSecure] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          {secure === true ? (
            <Pressable onPress={() => setSecure(false)}>
              <FontAwesome name="eye-slash" size={28} color="#6b6b6b" />
            </Pressable>
          ) : (
            <Pressable onPress={() => setSecure(true)}>
              <FontAwesome name="eye" size={28} color="black" />
            </Pressable>
          )}
        </View>
      ),
    });
  });

  function register() {
    if (password === confirmPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const db = getFirestore();
          setDoc(doc(db, "users", userCredential.uid), {
            cpf: cpf,
            name: name,
            email: email,
            phone: phone,
            address: address,
            typeAccount: typeAccount,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      window.alert("Senhas desiguais");
    }
  }

  console.log(confirmPassword);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <View style={styles.viewInput}>
          <Pressable style={styles.viewInput} onPress={() => focus()}>
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              secureTextEntry={secure}
              activeOutlineColor={"black"}
              value={password1}
              onChangeText={(text) => setPassword1(text)}
              ref={ref_input}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setPassword1("");
                  ref_input.current.clear();
                } else {
                  setPassword2("");
                  ref_input2.current.clear();
                  ref_input2.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              secureTextEntry={secure}
              activeOutlineColor={"black"}
              value={password2}
              onChangeText={(text) => setPassword2(text)}
              ref={ref_input2}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setPassword1("");
                  ref_input.current.focus();
                  ref_input.current.clear();
                } else {
                  setPassword3("");
                  ref_input3.current.clear();
                  ref_input3.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              secureTextEntry={secure}
              activeOutlineColor={"black"}
              value={password3}
              onChangeText={(text) => setPassword3(text)}
              ref={ref_input3}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setPassword2("");
                  ref_input2.current.focus();
                  ref_input2.current.clear();
                } else {
                  setPassword4("");
                  ref_input4.current.clear();
                  ref_input4.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              secureTextEntry={secure}
              activeOutlineColor={"black"}
              value={password4}
              onChangeText={(text) => setPassword4(text)}
              ref={ref_input4}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setPassword3("");
                  ref_input3.current.focus();
                  ref_input3.current.clear();
                } else {
                  setPassword5("");
                  ref_input5.current.clear();
                  ref_input5.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              secureTextEntry={secure}
              activeOutlineColor={"black"}
              value={password5}
              onChangeText={(text) => setPassword5(text)}
              ref={ref_input5}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setPassword4("");
                  ref_input4.current.focus();
                  ref_input4.current.clear();
                } else {
                  setPassword6("");
                  ref_input6.current.clear();
                  ref_input6.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              secureTextEntry={secure}
              activeOutlineColor={"black"}
              value={password6}
              blurOnSubmit={true}
              onChangeText={(text) => setPassword6(text)}
              ref={ref_input6}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setPassword6("");
                  ref_input6.current.clear();

                  if (password6 == "") {
                    setPassword5("");
                    ref_input5.current.clear();
                    ref_input5.current.focus();
                  }
                } else {
                  setPassword6("");
                  ref_input6.current.blur();
                }
              }}
              pointerEvents={"none"}
            />
          </Pressable>
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={confirmPassword.length == 6 ? false : true}
          onPress={() => register()}
        >
          continuar
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
