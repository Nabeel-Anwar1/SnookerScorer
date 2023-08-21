import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Score from "./components/Score";

export default function App() {

  return (
    <View style={styles.container}>
      <Score />
      <StatusBar style="false" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
  },
});
