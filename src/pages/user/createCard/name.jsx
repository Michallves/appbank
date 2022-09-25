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
import { useData } from "../../../navigation/context";

export default function ({ navigation, route }, params) {
  const { user } = useData();
  const [name, setName] = useState(user.name);

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);
  console.log(name);
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
                  width: "100%",
                }}
              >
                Nome completo
              </Text>
            }
            type={"text"}
            maxLength={50}
            activeUnderlineColor="black"
            selectionColor={"black"}
            keyboardType={"ascii-capable"}
            value={name != "" ? name : []}
            onChangeText={setName}
            ref={ref_input}
          />
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={name.length >= 10 ? false : true}
          onPress={() => navigation.navigate("typeCreateCard", { name: name })}
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
  titleInput: {
    fontSize: 14,
    fontWeight: "bold",
    width: "90%",
    textAlign: "left",
    marginTop: 20,
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
