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
import styles from "./styles";

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
                style={styles.titleInput}
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
            navigation.navigate("addressRegisterUser", {
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

