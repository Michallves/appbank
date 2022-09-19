import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { StatusBar } from "expo-status-bar";
import { Button, TextInput } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  });
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
            label={
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Qual seu CPF ?
              </Text>
            }
            theme={{ colors: { primary: "red" } }}
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
          disabled={cpf.length == 14 ? false : true}
          onPress={() => navigation.navigate("name", { cpf: cpf })}
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
