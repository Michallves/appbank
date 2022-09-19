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
import { Button, TextInput } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [phone, setPhone] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);
  console.log(phone);
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
            label={
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                Número do telefone
              </Text>
            }
            maxLength={15}
            activeUnderlineColor="black"
            selectionColor={"black"}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#909090"
            keyboardType={"number-pad"}
            value={phone != "" ? phone : []}
            onChangeText={setPhone}
            ref={ref_input}
            render={(props) => (
              <MaskInput
                {...props}
                value={phone}
                onChangeText={(masked, unmasked) => {
                  setPhone(masked);
                }}
                mask={Masks.BRL_PHONE}
              />
            )}
          />
        </View>

        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={phone.length >= 14 ? false : true}
          onPress={() =>
            navigation.navigate("address", {
              cpf: cpf,
              name: name,
              email: email,
              phone: phone,
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
    fontSize: 22,
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
