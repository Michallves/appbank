import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useData } from "../../../navigation/context";

export default function ({ navigation, route }, params) {
  const { idUser } = useData();
  const [name, setName] = useState(route.params?.name);

  function editName() {
    const db = getFirestore();
    updateDoc(doc(db, "users", idUser), {
      name: name,
    });
    navigation.goBack();
  }

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
            value={name != null ? name : []}
            onChangeText={setName}
          />
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={name?.length >= 10 ? false : true}
          onPress={() => editName()}
        >
          Salvar
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
