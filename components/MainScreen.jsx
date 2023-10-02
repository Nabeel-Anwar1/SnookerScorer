import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Modal, Alert } from "react-native";
import ModalScore from "./Modal";

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [frame1, setFrame1] = useState(0);
  const [frame2, setFrame2] = useState(0);
  const [player, setPlayer] = useState(1 || 2);

  return (
    <View>
      <View style={styles.box}>
        <ModalScore
          score1={score1}
          score2={score2}
          setScore1={setScore1}
          setScore2={setScore2}
          frame1={frame1}
          frame2={frame2}
          setFrame1={setFrame1}
          setFrame2={setFrame2}
          player={player}
          setPlayer={setPlayer}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        <View style={styles.b1}>
          <Pressable
            style={styles.button1}
            onPress={() => {
              setModalVisible(true);
              setPlayer(1);
            }}
          >
            <Text style={styles.score1}>{score1}</Text>
            <Text style={styles.frames1}>Frames: {frame1}</Text>
          </Pressable>
        </View>
        <View style={styles.diffBox}>
          <Text style={styles.diff}>{score1 - score2}</Text>
        </View>
        <View style={styles.b2}>
          <Pressable
            style={styles.button2}
            onPress={() => {
              setModalVisible(true);
              setPlayer(2);
            }}
          >
            <Text style={styles.score2}>{score2}</Text>
            <Text style={styles.frames2}>Frames: {frame2}</Text>
          </Pressable>
        </View>
        <View style={styles.b3}>
          <Pressable
            style={styles.reset}
            onPress={() => {
              setFrame1(0);
              setFrame2(0);
              setScore1(0);
              setScore2(0);
            }}
          >
            <Text style={styles.resetText}>Reset</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  box: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  b1: {
    flex: 10,
    justifyContent: "center",
    backgroundColor: "royalblue",
  },
  diffBox: {
    flex: 2,
  },
  b2: {
    flex: 10,
    backgroundColor: "sandybrown",
  },
  b3: {
    flex: 1,
  },
  button1: {
    height: "100%",
    width: "100%",
  },
  button2: {
    height: "100%",
    width: "100%",
  },
  diff: {
    textAlign: "center",
    maxHeight: "100%",
    maxWidth: "100%",
    fontSize: 50,
  },
  score1: {
    fontSize: 200,
    textAlign: "center",
  },
  frames1: {
    fontSize: 20,
    textAlign: "right",
    marginRight: "5%",
  },
  score2: {
    fontSize: 200,
    textAlign: "center",
  },
  frames2: {
    fontSize: 20,
    textAlign: "right",
    marginRight: "5%",
  },
  resetText: {
    fontSize: 19,
    textAlign: "right",
    marginRight: "5%",
  },
});
