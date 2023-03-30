import {useState} from "react"
import { StyleSheet, Text, View, Pressable, Modal, Alert } from "react-native";

const ScoreCards = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [calc, setCalc] = useState("")

    const setter = (val) => {
        if (props.player == 1) {
          props.setScore1(props.score1 + val);
        } else {
          props.setScore2(props.score2 + val);
        }
      };

return (
<View>
    <Modal  animationType="slide" transparent={true} visible={modalVisible} onRequestClose={()=>{setModalVisible(!modalVisible)}}>
        <View style={styles.modalview}>
            <View style={styles.scrn}>
            <Text style={styles.calcScreen}>{calc}</Text>
            </View>
            <View style={styles.one}>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}1`)}}>
                <Text style={styles.numtext}>1</Text>
            </Pressable>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}2`)}}>
                <Text style={styles.numtext}>2</Text>
            </Pressable>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}3`)}}>
                <Text style={styles.numtext}>3</Text>
            </Pressable>
            </View>
            <View style={styles.two}>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}4`)}}>
                <Text style={styles.numtext}>4</Text>
            </Pressable>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}5`)}}>
                <Text style={styles.numtext}>5</Text>
            </Pressable>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}6`)}}>
                <Text style={styles.numtext}>6</Text>
            </Pressable>
            </View>
            <View style={styles.three}>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}7`)}}>
                <Text style={styles.numtext}>7</Text>
            </Pressable>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}8`)}}>
                <Text style={styles.numtext}>8</Text>
            </Pressable>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}9`)}}>
                <Text style={styles.numtext}>9</Text>
            </Pressable>
            </View>
            <Pressable style={styles.nums1} onPress={()=>{setCalc(`${calc}0`)}}>
                <Text style={styles.numtext}>0</Text>
            </Pressable>
            <View style={styles.endButtons}>
            <Pressable style={styles.enter} onPress={()=>{setModalVisible(!modalVisible); setter(Number(calc)) ; setCalc("")}}>
                <Text style={styles.enterText}>Enter</Text>
            </Pressable>
            <Pressable style={styles.newGameB} onPress={()=>{setModalVisible(!modalVisible);if (props.score1 > props.score2){Alert.alert('New Game', "Player 1's frame");props.setFrame1(props.frame1+1)} else if (props.score1 == props.score2){Alert.alert('New Game', 'Draw')} else {Alert.alert('New Game', "Player 2's frame");props.setFrame2(props.frame2+1)}; props.setScore1(0); props.setScore2(0) ; setCalc("")}}>
                <Text style={styles.newGameT}>New Game</Text>
            </Pressable>
            </View>
            <Pressable style={styles.back} onPress={()=>{setModalVisible(!modalVisible); setCalc("")}}>
                <Text style={styles.enterText}>X</Text>
            </Pressable>
        </View>
    </Modal>
    <Pressable style={styles.button1} onPress={()=>{setModalVisible(true); props.setPlayer(1)}}>
        <Text style={styles.score1}>{props.score1}</Text>
    </Pressable>
    <Text style={styles.frames}>Frames: {props.frame1}</Text>
    <Text style={styles.diff}>{props.score1 - props.score2}</Text>
    <Pressable style={styles.button2} onPress={()=>{setModalVisible(true); props.setPlayer(2)}}>
        <Text style={styles.score2}>{props.score2}</Text>
    </Pressable>
    <Text style={styles.frames}>Frames: {props.frame2}</Text>
    <Pressable style={styles.reset} onPress={()=>{props.setFrame1(0); props.setFrame2(0); props.setScore1(0); props.setScore2(0)}}>
        <Text style={styles.resetText}>Reset</Text>
     </Pressable>
</View>
)
}

export default ScoreCards

const styles = StyleSheet.create({
    newGameB:{
        backgroundColor:"lightblue",
        borderColor:"black",
        borderWidth:2,
        borderRadius:20,
        justifyContent:"center",
        padding:2,
        height:60,
        marginTop:12,
    },
    newGameT:{
        fontSize:25,
        textAlign:"center"
    },
    endButtons: {
        display:"flex",
        flexDirection: "row",
    },
    reset: {
        marginTop: 20,
        borderColor:"black",
        borderWidth:2,
        height:30,
        width:75,
        bottom:10,
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
        height: "38%",
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
        marginTop: 15,
        marginRight: "5%",
        marginLeft: "5%",
        height: "38%",
        width: "90%",
        backgroundColor: "orange",
        justifyContent: "center",
    },
    score2: {
        color: "white",
        textAlign: "center",
        fontSize: 150,
    },
    frames: {
        textAlign: "center",
        marginTop: 5,
        fontSize:15,
    },
    modalview: {
        margin: 5,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center"
    },
    enter: {
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        borderColor:"black",
        borderWidth:2,
    },
    nums1: {
        backgroundColor: "lightgrey",
        padding: 20,
        borderRadius: 50,
        height: 100,
        width: 100,
        alignItems: "center",
        marginTop:10,
        borderColor:"black",
        borderWidth:2,
        justifyContent:"center"
    },
    numtext: {
        color: "black",
        fontSize:30,

    },
    scrn: {
        justifyContent:"center",
        alignItems:"center",
        display: "flex"
    },
    calcScreen: {
        borderColor:"black",
        borderWidth:2,
        width: 300,
        height: 90,
        fontSize: 45,
        textAlign: "center",
    },
    one: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    two: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    three: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    enterText: {
        fontSize:30,
        textAlign: "center"
    },
    back: {
        backgroundColor:"red",
        padding: 4,
        borderRadius: 40,
        width:50,
        height: 50,
        borderColor:"black",
        borderWidth:2,
    },
    diff: {
        textAlign: "center",
        marginTop:10,
        fontSize:30,
    }
})