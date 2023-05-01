import {useState} from "react"
import { StyleSheet, Text, View, Pressable, Modal, Alert } from "react-native";
import ModalScore from "./Modal";

const ScoreCards = (props) => {
    const [modalVisible, setModalVisible] = useState(false)

return (
<View>
   <ModalScore        
        score1={props.score1}
        score2={props.score2}
        setScore1={props.setScore1}
        setScore2={props.setScore2}
        frame1={props.frame1}
        frame2={props.frame2}
        setFrame1={props.setFrame1}
        setFrame2={props.setFrame2}
        player={props.player}
        setPlayer={props.setPlayer}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}/>
    <Pressable style={styles.button1} onPress={()=>{setModalVisible(true); props.setPlayer(1)}}>
        <Text style={styles.score1}>{props.score1}</Text>
        <Text style={styles.frames1}>Frames: {props.frame1}</Text>
    </Pressable>
    <Text style={styles.diff}>{props.score1 - props.score2}</Text>
    <Pressable style={styles.button2} onPress={()=>{setModalVisible(true); props.setPlayer(2)}}>
        <Text style={styles.score2}>{props.score2}</Text>
        <Text style={styles.frames2}>Frames: {props.frame2}</Text>
    </Pressable>
    <Pressable style={styles.reset} onPress={()=>{props.setFrame1(0); props.setFrame2(0); props.setScore1(0); props.setScore2(0)}}>
        <Text style={styles.resetText}>Reset</Text>
     </Pressable>
</View>
)
}

export default ScoreCards

const styles = StyleSheet.create({
    reset: {
        marginTop: 20,
        borderColor:"black",
        borderWidth:2,
        height:30,
        width:75,
        bottom:5,
        left:330,
    },
    resetText: {
        fontSize:20,
        textAlign:"right",
        marginRight:20,
    },
    button1: {
        marginTop: 30,
        marginRight: "5%",
        marginLeft: "5%",
        height: "40%",
        width: "90%",
        backgroundColor: "blue",
        justifyContent: "center",
    },
    score1: {
        color: "white",
        textAlign: "center",
        fontSize: 150,
    },
    button2: {
        marginTop: 5,
        marginRight: "5%",
        marginLeft: "5%",
        height: "40%",
        width: "90%",
        backgroundColor: "orange",
        justifyContent: "center",
    },
    score2: {
        color: "black",
        textAlign: "center",
        fontSize: 150,
    },
    frames1: {
        textAlign: "right",
        right:20,
        marginTop: 5,
        fontSize:20,
        color:"white",
    },
    frames2: {
        textAlign: "right",
        right:20,
        marginTop: 5,
        fontSize:20,
    },
    diff: {
        textAlign: "center",
        marginTop:3,
        fontSize:53,
    },
})