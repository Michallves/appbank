import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [name, setName] = useState(route.params?.name);
  const [number, setNumber] = useState(route.params?.number);
  const [flag, setFlag] = useState(route.params?.flag);
  const [cvc, setCvc] = useState("");

  const [cvc1, setCvc1] = useState("");
  const [cvc2, setCvc2] = useState("");
  const [cvc3, setCvc3] = useState("");

  const ref_input = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);

  useEffect(() => {
    setCvc(cvc1 + cvc2 + cvc3);
  }, [cvc1, cvc2, cvc3]);

  function focus() {
    if (cvc.length == 3) {
      ref_input3.current.focus();
    }
    if (cvc.length == 0) {
      ref_input.current.focus();
    }
  }

  console.log(cvc);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <View style={styles.viewInput}>
          <Pressable style={styles.viewInput} onPress={() => focus()}>
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              activeOutlineColor={"black"}
              value={cvc1}
              onChangeText={(text) => setCvc1(text)}
              ref={ref_input}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setCvc1("");
                  ref_input.current.clear();
                } else {
                  setCvc2("");
                  ref_input2.current.clear();
                  ref_input2.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              activeOutlineColor={"black"}
              value={cvc2}
              onChangeText={(text) => setCvc2(text)}
              ref={ref_input2}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setCvc1("");
                  ref_input.current.focus();
                  ref_input.current.clear();
                } else {
                  setCvc3("");
                  ref_input3.current.clear();
                  ref_input3.current.focus();
                }
              }}
              pointerEvents={"none"}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              mode={"outlined"}
              selectionColor={"black"}
              keyboardType="number-pad"
              activeOutlineColor={"black"}
              value={cvc3}
              blurOnSubmit={true}
              onChangeText={(text) => setCvc3(text)}
              ref={ref_input3}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  setCvc3("");
                  ref_input3.current.clear();

                  if (cvc3 == "") {
                    setCvc2("");
                    ref_input2.current.clear();
                    ref_input2.current.focus();
                  }
                } else {
                  setCvc3("");
                  ref_input3.current.blur();
                }
              }}
              pointerEvents={"none"}
            />
          </Pressable>
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={cvc.length == 3 ? false : true}
          onPress={() =>
            navigation.navigate("dateValidyRegisterCard", {
              name: name,
              number: number,
              flag: flag,
              cvc: cvc,
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
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "transparent",
    width: 45,
    height: 55,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 5,
    marginRight: 5,
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
  rs: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
