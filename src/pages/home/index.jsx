import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};
