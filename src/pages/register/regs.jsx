import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";

import { TextInput } from "react-native-paper";

export default ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [typeAccount, setTypeAccount] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.containerKAV}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
               <TextInput
          style={styles.input}
          placeholder="Nome completo"
          type="text"
          value={name}
          onChangeText={setName}
          
          returnKeyType={"next"}
        />
                    <TextInput
          style={styles.input}
          placeholder="Nome completo"
          type="text"
          value={cpf}
          onChangeText={setCpf}
          
          returnKeyType={"next"}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          type="text"
          value={email}
          onChangeText={setEmail}
        
          returnKeyType={"next"}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          type="text"
          onChangeText={setPassword}
          value={password}
          returnKeyType={"next"}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha novamente"
          type="text"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          returnKeyType={"done"}
        />

        {email == "" || password == "" || confirmPassword == "" ? (
          <TouchableOpacity style={styles.buttonDisabled} disabled={true}>
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => register()} style={styles.button}>
            <Text style={styles.textButton}>Criar conta</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
