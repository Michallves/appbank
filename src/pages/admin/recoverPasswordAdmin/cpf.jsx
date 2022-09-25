import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import MaskInput, { Masks } from "react-native-mask-input";
import { Button, TextInput } from "react-native-paper";
import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import styles from "./styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [email, setEmail] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  });

  useEffect(() => {
    const db = getFirestore();
    onSnapshot(
      query(collection(db, "users"), where("cpf", "==", cpf)),
      (querySnapshot) => {
        const cd = [];
        querySnapshot.forEach((doc) => {
          cd.push(doc.data().email);
        });
        setEmail(String(cd));
      }
    );
  }, [cpf]);

  function recoverPassword() {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.navigate("passwordRecoverPasswordAdmin");
      })
      .catch((error) => {
        window.alert(error.code);
        window.alert(error.message);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dart"} translucent={true} backgroundColor={"transt"} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            label={
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Digite seu CPF
              </Text>
            }
            maxLength={14}
            activeUnderlineColor="black"
            selectionColor={"black"}
            placeholder="000.000.000-00"
            placeholderTextColor="#909090"
            keyboardType={"number-pad"}
            value={cpf != "" ? cpf : []}
            onChangeText={setCpf}
            ref={ref_input}
            render={(props) => <MaskInput {...props} mask={Masks.BRL_CPF} />}
          />
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={cpf?.length >= 14 ? false : true}
          onPress={() => recoverPassword()}
        >
          Recuperar conta
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
