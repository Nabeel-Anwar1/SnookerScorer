import {useState} from "react"
import { StyleSheet, Text, View, Pressable, Modal, Alert } from "react-native";
import ModalScore from "./Modal";

const ScoreCards = (props) => {
    const [modalVisible, setModalVisible] = useState(false)

return (
<View >
    <View style={styles.box}>
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
        <View style={styles.b1}>
    <Pressable style={styles.button1} onPress={()=>{setModalVisible(true); props.setPlayer(1)}}>
        <Text style={styles.score1}>{props.score1}</Text>
        <Text style={styles.frames1}>Frames: {props.frame1}</Text>
    </Pressable>
    </View>
    <View style={styles.diffBox}>
    <Text style={styles.diff}>{props.score1 - props.score2}</Text>
    </View>
    <View style={styles.b2}>
    <Pressable style={styles.button2} onPress={()=>{setModalVisible(true); props.setPlayer(2)}}>
        <Text style={styles.score2}>{props.score2}</Text>
        <Text style={styles.frames2}>Frames: {props.frame2}</Text>
    </Pressable>
    </View>
    <View style={styles.b3}>
    <Pressable style={styles.reset} onPress={()=>{props.setFrame1(0); props.setFrame2(0); props.setScore1(0); props.setScore2(0)}}>
        <Text style={styles.resetText}>Reset</Text>
     </Pressable>
     </View>
     </View>
</View>
)
}

export default ScoreCards

const styles = StyleSheet.create({
    box: {
        flexDirection:"column",
        width: "100%",
        height: "100%"
    },
    b1: {
        flex:10,
        justifyContent:"center",
        backgroundColor: "royalblue"
    },
    diffBox: {
        flex:2
    },
    b2: {
        flex:10,
        backgroundColor: "sandybrown"
    },
    b3: {
        flex:1
    },
    button1: {
        height: "100%",
        width: "100%",
    },
    button2: {
        height: "100%",
        width: "100%",
    },
    diff:{
        textAlign: "center",
        maxHeight: "100%",
        maxWidth:"100%",
        fontSize:50,
    },
    score1: {
        fontSize: 200,
        textAlign: "center",
    },
    frames1: {
        fontSize: 20,
        textAlign:"right",
        marginRight: "5%"
    },
    score2: {
        fontSize: 200,
        textAlign: "center"
    },
    frames2: {
        fontSize: 20,
        textAlign:"right",
        marginRight: "5%"
    },
    resetText:{
        fontSize:20,
        textAlign: "right",
        marginRight:"5%"
    },
})