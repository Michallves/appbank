import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { StatusBar } from "expo-status-bar";
import { Button, TextInput } from "react-native-paper";
import styles from "./styles";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);

  console.log(cpf);
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
            label={<Text style={styles.titleInput}>Qual seu CPF ?</Text>}
            maxLength={14}
            activeUnderlineColor="black"
            selectionColor={"black"}
            placeholder="000.000.000-00"
            placeholderTextColor="#909090"
            keyboardType={"number-pad"}
            value={cpf != "" ? cpf : []}
            ref={ref_input}
            autoFocus
            onChangeText={setCpf}
            render={(props) => <MaskInput {...props} mask={Masks.BRL_CPF} />}
          />
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={cpf.length == 14 ? false : true}
          onPress={() => navigation.navigate("nameRegisterUser", { cpf: cpf })}
        >
          continuar
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
