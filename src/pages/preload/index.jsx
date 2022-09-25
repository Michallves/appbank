import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={"light"}
        translucent={true}
        backgroundColor={"transt"}
      />
      <View style={styles.viewTitle}>
        <Text style={styles.title}>APPBANK</Text>
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("loginUser")}
          style={styles.button1}
        >
          <Text style={styles.textButton1}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("registerUser")}
          style={styles.button2}
        >
          <Text style={styles.textButton2}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAdmin}
          onPress={() => navigation.navigate("loginAdmin")}
        >
          <Text style={styles.textButtonAdmin}>Entrar como admin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
