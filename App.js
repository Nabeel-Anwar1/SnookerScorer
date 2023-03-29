import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Score from "./components/Score";

export default function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [frame1, setFrame1] = useState(0);
  const [frame2, setFrame2] = useState(0);
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
      <Score
        score1={score1}
        score2={score2}
        setScore1={setScore1}
        setScore2={setScore2}
        frame1={frame1}
        frame2={frame2}
        setFrame1={setFrame1}
        setFrame2={setFrame2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
