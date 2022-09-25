import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { Button, RadioButton } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [name, setName] = useState(route.params?.name);
  const [type, setType] = useState(route.params?.type);
  const [flag, setFlag] = useState("");
  console.log(flag);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <RadioButton.Group
          style={styles.radioView}
          onValueChange={(newValue) => setFlag(newValue)}
          value={flag}
        >
          <Pressable onPress={() => setFlag("Visa")} style={styles.radioButton}>
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="Visa"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>Visa</Text>
          </Pressable>
          <Pressable
            onPress={() => setFlag("Mastercard")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="Mastercard"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>Mastercard</Text>
          </Pressable>
          <Pressable onPress={() => setFlag("Elo")} style={styles.radioButton}>
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="Elo"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>Elo</Text>
          </Pressable>
          <Pressable
            onPress={() => setFlag("Hipercard")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="Hipercard"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>Hipercard</Text>
          </Pressable>
          <Pressable
            onPress={() => setFlag("American Express")}
            style={styles.radioButton}
          >
            <View style={styles.radio}>
              <RadioButton.Android
                color="black"
                value="American Express"
                style={styles.radio}
              />
            </View>
            <Text style={styles.textRadio}>American Express</Text>
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
          navigation.navigate("dateValidyCreateCard", {
            name: name,
            type: type,
            flag: flag,
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
    borderBottomColor:  "#dfdfdf",
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
