import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "./styles";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);
  console.log(email);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            label={<Text style={styles.titleInput}>E-mail</Text>}
            type={"text"}
            maxLength={50}
            activeUnderlineColor="black"
            selectionColor={"black"}
            keyboardType={"ascii-capable"}
            value={email != "" ? email : []}
            onChangeText={setEmail}
            ref={ref_input}
          />
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={email.length >= 10 ? false : true}
          onPress={() =>
            navigation.navigate("addressRegisterAdmin", {
              cpf: cpf,
              name: name,
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
