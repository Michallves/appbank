import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [name, setName] = useState(route.params?.name);
  const [type, setType] = useState("");
  console.log(type);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <RadioButton.Group
          style={styles.radioView}
          onValueChange={(newValue) => setType(newValue)}
          value={type}
        >
          <Pressable
            onPress={() => setType("credit")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="credit"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>Crédito</Text>
          </Pressable>
          <Pressable
            onPress={() => setType("debit")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android color="black" value="debit" />
            </View>
            <Text style={styles.textRadio}>Débito</Text>
          </Pressable>
          <Pressable
            onPress={() => setType("savings")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android color="black" value="savings" />
            </View>
            <Text style={styles.textRadio}>Poupança</Text>
          </Pressable>
          <Pressable
            onPress={() => setType("credit/debit")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android color="black" value="credit/debit" />
            </View>
            <Text style={styles.textRadio}>Crédito e Débito</Text>
          </Pressable>
          <Pressable
            onPress={() => setType("savings/debit")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android color="black" value="savings/debit" />
            </View>
            <Text style={styles.textRadio}>Poupança e débito</Text>
          </Pressable>
        </RadioButton.Group>
      </View>
      <Button
        style={styles.button}
        contentStyle={styles.contentButton}
        mode="contained"
        buttonColor="black"
        disabled={type != "" ? false : true}
        onPress={() =>
          navigation.navigate("flagCreateCard", {
            name: name,
            type: type,
          })
        }
      >
        continuar
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view: {
    flex: 1,
  },
  radioView: {
    flex: 1,
    backgroundColor: "red",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
    width: "100%",
    borderBottomColor: "#dfdfdf",
    borderBottomWidth: 0.5,
    marginLeft: 20,
  },
  radio: { marginRight: 10 },
  textRadio: {
    fontSize: 16,
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
