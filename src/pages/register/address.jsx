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

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [phone, setPhone] = useState(route.params?.phone);
  const [address, setAddress] = useState();

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    setAddress({
      state: state,
      city: city,
      street: street,
      neighborhood: neighborhood,
      number: number,
    });
  }, [state, city, street, neighborhood, number]);

  const ref_input = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);

  console.log(address);
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
              label={
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                  }}
                >
                  Estado
                </Text>
              }
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              value={state != "" ? state : []}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              onChangeText={(text) => setState(text)}
              onSubmitEditing={() => ref_input2.current.focus()}
              ref={ref_input}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input}
              label={
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                  }}
                >
                  Cidade
                </Text>
              }
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              value={city != "" ? city : []}
              onChangeText={(text) => setCity(text)}
              onSubmitEditing={() => ref_input3.current.focus()}
              ref={ref_input2}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input}
              label={
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                  }}
                >
                  Bairro
                </Text>
              }
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              value={neighborhood != "" ? neighborhood : []}
              onChangeText={(text) => setNeighborhood(text)}
              onSubmitEditing={() => ref_input4.current.focus()}
              ref={ref_input3}
            />
            <TextInput
              style={styles.input}
              label={
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                  }}
                >
                  Rua
                </Text>
              }
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"ascii-capable"}
              returnKeyType={"next"}
              value={street != "" ? street : []}
              onChangeText={(text) => setStreet(text)}
              onSubmitEditing={() => ref_input5.current.focus()}
              ref={ref_input4}
            />

            <TextInput
              style={styles.input}
              label={
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                  }}
                >
                  Número
                </Text>
              }
              activeUnderlineColor={"black"}
              selectionColor={"black"}
              keyboardType={"number-pad"}
              value={number != "" ? number : []}
              onChangeText={(text) => setNumber(text)}
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
            navigation.navigate("typeAccount", {
              cpf: cpf,
              name: name,
              email: email,
              phone: phone,
              address: address,
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
    height: 60,
    width: "90%",
    fontSize: 22,
    marginTop: 10,
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
