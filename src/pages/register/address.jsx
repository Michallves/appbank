import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import cep from "cep-promise";

export default function ({ navigation, route }, params) {
  const [cpf, setCpf] = useState(route.params?.cpf);
  const [name, setName] = useState(route.params?.name);
  const [email, setEmail] = useState(route.params?.email);
  const [tel, setTel] = useState(route.params?.tel);
  const [address, setAddress] = useState([]);

  const [cepp, setCepp] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [number, setNumber] = useState("");

  cep(cepp).then(
    (cep) =>
      setState(cep.state) ||
      setCity(cep.city) ||
      setStreet(cep.street) ||
      setNeighborhood(cep.neighborhood)
  );
  useEffect(() => {
    setAddress({
      cep: cep,
      state: state,
      city: city,
      street: street,
      neighborhood: neighborhood,
      number: number,
    });
  });
  console.log(address);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={70}
      >
        <ScrollView style={styles.container}>
          <View style={styles.viewInput}>
            <Text style={styles.textInput}>Qual seu CEP ?</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TextInputMask
                style={{
                  height: 50,
                  width: "60%",
                  fontSize: 26,
                  borderBottomWidth: 1,
                }}
                type={"zip-code"}
                maxLength={9}
                selectionColor={"black"}
                placeholder="00000-000"
                placeholderTextColor="#909090"
                value={cepp}
                onChangeText={(rawText) => setCepp(String(rawText))}
              />
              <TextInput
                style={{
                  height: 50,
                  width: "20%",
                  marginLeft: "10%",
                  fontSize: 26,
                  borderBottomWidth: 1,
                  textAlign: "center",
                }}
                type={"text"}
                maxLength={20}
                selectionColor={"black"}
                placeholder="UF"
                placeholderTextColor="#909090"
                value={state}
                onChangeText={(text) => setState(text)}
              />
            </View>
            <TextInput
              style={styles.input}
              type={"text"}
              maxLength={20}
              selectionColor={"black"}
              placeholder="Rua"
              placeholderTextColor="#909090"
              value={street}
              onChangeText={(text) => setStreet(text)}
            />
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TextInput
                style={{
                  height: 50,
                  width: "55%",
                  fontSize: 26,
                  borderBottomWidth: 1,
                }}
                type={"text"}
                maxLength={20}
                selectionColor={"black"}
                placeholder="Cidade"
                placeholderTextColor="#909090"
                value={city}
                onChangeText={(text) => setCity(text)}
              />
              <TextInput
                style={{
                  height: 50,
                  width: "25%",
                  marginLeft: "10%",
                  fontSize: 26,
                  borderBottomWidth: 1,
                  textAlign: "center",
                }}
                type={"numeric"}
                maxLength={20}
                selectionColor={"black"}
                placeholder="Número"
                placeholderTextColor="#909090"
                value={number}
                onChangeText={(text) => setNumber(text)}
              />
            </View>
            <TextInput
              style={styles.input}
              type={"text"}
              maxLength={20}
              selectionColor={"black"}
              placeholder="Bairro"
              placeholderTextColor="#909090"
              value={neighborhood}
              onChangeText={(text) => setNeighborhood(text)}
            />
          </View>
        </ScrollView>
        <View style={styles.viewButton}>
          {address == [] ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("address", {
                  cpf: cpf,
                  name: name,
                  email: email,
                  tel: tel,
                })
              }
              style={styles.button}
            >
              <Text style={styles.textButton}>continuar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonDisabled} disabled={true}>
              <Text style={styles.textButton}>continuar</Text>
            </TouchableOpacity>
          )}
        </View>
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
  textInput: {
    fontSize: 14,
    fontWeight: "bold",
    width: "90%",
    textAlign: "left",
    marginTop: 20,
  },
  input: {
    height: 50,
    width: "90%",
    fontSize: 26,
    borderBottomWidth: 1,
  },
  viewButton: {
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonDisabled: {
    backgroundColor: "black",
    width: "90%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.3,
  },
});
