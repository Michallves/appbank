import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
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

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  });

  useEffect(() => {
    const db = getFirestore();
    const cardsCreated = onSnapshot(
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
            value={cpf}
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
          disabled={cpf.length >= 14 ? false : true}
          onPress={() =>
            navigation.navigate("passwordLogin", {
              email: email,
            })
          }
        >
          continuar
        </Button>
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
    backgroundColor: "transparent",
    height: 80,
    width: "90%",
    fontSize: 26,
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
