import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [player, setPlayer] = useState(1 || 2);

  const setter = (val) => {
    if (player == 1) {
      setScore1(score1 + val);
    } else {
      setScore2(score2 + val);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Snooker Scorer</Text>
      <Text>Player 1 Score: {score1}</Text>
      <Text>Player 2 Score: {score2}</Text>
      <Button
        onPress={() => {
          setter(1);
        }}
        title="1"
      />
      <Button
        onPress={() => {
          setter(2);
        }}
        title="2"
      />
      <Button
        onPress={() => {
          setter(3);
        }}
        title="3"
      />
      <Button
        onPress={() => {
          setter(4);
        }}
        title="4"
      />
      <Button
        onPress={() => {
          setter(5);
        }}
        title="5"
      />
      <Button
        onPress={() => {
          setter(6);
        }}
        title="6"
      />
      <Button
        onPress={() => {
          setter(7);
        }}
        title="7"
      />
      <Button
        onPress={() => {
          setPlayer(!player);
        }}
        title="Change Player"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
    marginRight: 50,
    marginLeft: 50,
    gap: 20,
  },
});
