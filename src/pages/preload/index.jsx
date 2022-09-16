import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>APPBANK</Text>
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={styles.button1}
        >
          <Text style={styles.textButton1}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("register")}
          style={styles.button2}
        >
          <Text style={styles.textButton2}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
