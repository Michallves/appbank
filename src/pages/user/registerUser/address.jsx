import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "./styles";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [phone, setPhone] = useState(route.params?.phone);

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");

  const ref_input = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <ScrollView style={styles.container}>
          <View style={styles.viewInput}>
            <TextInput
              style={styles.input}
              label={<Text style={styles.titleInput}>Estado</Text>}
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              value={state != "" ? state : []}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              onChangeText={setState}
              onSubmitEditing={() => ref_input2.current.focus()}
              ref={ref_input}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input}
              label={<Text style={styles.titleInput}>Cidade</Text>}
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              value={city != "" ? city : []}
              onChangeText={setCity}
              onSubmitEditing={() => ref_input3.current.focus()}
              ref={ref_input2}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input}
              label={<Text style={styles.titleInput}>Bairro</Text>}
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              value={neighborhood != "" ? neighborhood : []}
              onChangeText={setNeighborhood}
              onSubmitEditing={() => ref_input4.current.focus()}
              ref={ref_input3}
            />
            <TextInput
              style={styles.input}
              label={<Text style={styles.titleInput}>Rua</Text>}
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              value={street != "" ? street : []}
              onChangeText={setStreet}
              onSubmitEditing={() => ref_input5.current.focus()}
              ref={ref_input4}
            />

            <TextInput
              style={styles.input}
              label={<Text style={styles.titleInput}>Número</Text>}
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"number-pad"}
              value={number != "" ? number : []}
              onChangeText={setNumber}
              ref={ref_input5}
            />
          </View>
        </ScrollView>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={
            state != "" &&
            city != "" &&
            neighborhood != "" &&
            street != "" &&
            number != ""
              ? false
              : true
          }
          onPress={() =>
            navigation.navigate("typeAccountRegisterUser", {
              cpf: cpf,
              name: name,
              email: email,
              phone: phone,
              address: {
                state: state,
                city: city,
                neighborhood: neighborhood,
                street: street,
                number: number,
              },
            })
          }
        >
          continuar
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
