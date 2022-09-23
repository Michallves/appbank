import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { Button, TextInput } from "react-native-paper";

export default function ({ navigation, route }, params) {
  const [name, setName] = useState(route.params?.name);
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState("");

  const ref_input = useRef();

  useEffect(() => {
    ref_input.current.focus();
  }, []);

  useEffect(() => {
    var oneDig = number.substring(0, 1);
    var twoDig = number.substring(0, 2);
    var sixDig = number.substring(0, 6);
    if (twoDig >= "51" && twoDig <= "55") {
      setFlag("Mastercard");
    } else if (oneDig == "4") {
      setFlag("Visa");
    } else if (twoDig >= "34" && twoDig <= "37") {
      setFlag("American Express");
    } else if (
      sixDig == "384100" ||
      sixDig == "384140" ||
      sixDig == "384160" ||
      sixDig == "606282" ||
      sixDig == "637095" ||
      sixDig == "637568" ||
      sixDig == "637599" ||
      sixDig == "637609" ||
      sixDig == "637612"
    ) {
      setFlag("Hipercard");
    } else if (
      sixDig == "401178" ||
      sixDig == "401179" ||
      sixDig == "431274" ||
      sixDig == "438935" ||
      sixDig == "451416" ||
      sixDig == "457393" ||
      sixDig == "457631" ||
      sixDig == "457632" ||
      sixDig == "504175" ||
      (sixDig >= "506699" && sixDig <= "506778") ||
      (sixDig >= "509000" && sixDig <= "509999") ||
      sixDig == "627780" ||
      sixDig == "636297" ||
      sixDig == "636368" ||
      (sixDig >= "650031" && sixDig <= "650033") ||
      (sixDig >= "650035" && sixDig <= "650051") ||
      (sixDig >= "650405" && sixDig <= "650439") ||
      (sixDig >= "650485" && sixDig <= "650538") ||
      (sixDig >= "650541" && sixDig <= "650598") ||
      (sixDig >= "650700" && sixDig <= "650718") ||
      (sixDig >= "650720" && sixDig <= "650727") ||
      (sixDig >= "650901" && sixDig <= "650978") ||
      (sixDig >= "651652" && sixDig <= "651679") ||
      (sixDig >= "655000" && sixDig <= "655019") ||
      (sixDig >= "655021" && sixDig <= "655058")
    ) {
      setFlag("Elo");
    } else {
      setFlag("");
    }
  }, [number]);

  console.log(number + "," + flag);
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
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Número do cartão
              </Text>
            }
            activeUnderlineColor="black"
            selectionColor={"black"}
            placeholder="0000 0000 0000 0000"
            placeholderTextColor="#909090"
            keyboardType={"number-pad"}
            value={number != "" ? number : []}
            ref={ref_input}
            render={(props) => (
              <>
                <MaskInput
                  {...props}
                  mask={Masks.CREDIT_CARD}
                  onChangeText={(masked, unmasked) => {
                    setNumber(unmasked);
                  }}
                />
                <>
                  {flag == "Mastercard" ? (
                    <Image
                      source={require("../../assets/mastercard.png")}
                      style={styles.mastercard}
                    />
                  ) : flag == "Visa" ? (
                    <Image
                      source={require("../../assets/visa.png")}
                      style={styles.visa}
                    />
                  ) : flag == "Elo" ? (
                    <Image
                      source={require("../../assets/elo.png")}
                      style={styles.elo}
                    />
                  ) : flag == "American Express" ? (
                    <Image
                      source={require("../../assets/americanexpress.png")}
                      style={styles.americanexpress}
                    />
                  ) : flag == "Hipercard" ? (
                    <Image
                      source={require("../../assets/hipercard.png")}
                      style={styles.hipercard}
                    />
                  ) : (
                    <></>
                  )}
                </>
              </>
            )}
          />
        </View>
        <Button
          style={styles.button}
          contentStyle={styles.contentButton}
          mode="contained"
          buttonColor="black"
          disabled={number.length == 16 && flag != "" ? false : true}
          onPress={() =>
            navigation.navigate("cvcRegisterCard", {
              name: name,
              number: number,
              flag: flag,
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

  mastercard: {
    height: 45,
    width: 75,
    position: "absolute",
    right: 0,
    top: 27,
  },
  visa: {
    height: 25,
    width: 85,
    position: "absolute",
    right: 0,
    top: 38,
  },
  elo: {
    backgroundColor: "black",
    height: 55,
    width: 55,
    borderRadius: 100,
    position: "absolute",
    right: 0,
    top: 20,
  },
  americanexpress: {
    height: 55,
    width: 55,
    position: "absolute",
    right: 0,
    top: 20,
  },
  hipercard: {
    height: 30,
    width: 80,
    position: "absolute",
    right: 0,
    top: 35,
  },
  viewCV: {
    flexDirection: "row",
    width: "90%",
  },
  inputCVC: {
    backgroundColor: "transparent",
    height: 80,
    width: "30%",
    fontSize: 22,
  },
  inputDateExpires: {
    backgroundColor: "transparent",
    height: 80,
    width: "30%",
    marginLeft: "40%",
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
