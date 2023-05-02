import {useState} from "react"
import { StyleSheet, Text, View, Pressable, Modal, Alert } from "react-native";

const ModalScore = (props) => {
    const [calc, setCalc] = useState("")

    const setterAdd = (val) => {
        if (props.player == 1) {
          props.setScore1(props.score1 + val);
        } else {
          props.setScore2(props.score2 + val);
        }
      };

      const setterRemove = (val) => {
        if (props.player == 1) {
          props.setScore1(props.score1 - val);
        } else {
          props.setScore2(props.score2 - val);
        }
      };

return (
<View>
    <Modal  animationType="slide" transparent={true} visible={props.modalVisible} onRequestClose={()=>{props.setModalVisible(!props.modalVisible)}}>
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
            <Pressable style={styles.enter} onPress={()=>{props.setModalVisible(!props.modalVisible); setterAdd(Number(calc)) ; setCalc("")}}>
                <Text style={styles.enterText}>Add</Text>
            </Pressable>
            <Pressable style={styles.remove} onPress={()=>{props.setModalVisible(!props.modalVisible); setterRemove(Number(calc)) ; setCalc("")}}>
                <Text style={styles.removeText}>Remove</Text>
            </Pressable>
            <Pressable style={styles.newGameB} onPress={()=>{props.setModalVisible(!props.modalVisible);if (props.score1 > props.score2){Alert.alert('New Game', "Player 1's frame");props.setFrame1(props.frame1+1)} else if (props.score1 == props.score2){Alert.alert('New Game', 'Draw')} else {Alert.alert('New Game', "Player 2's frame");props.setFrame2(props.frame2+1)}; props.setScore1(0); props.setScore2(0) ; setCalc("")}}>
                <Text style={styles.newGameT}>New Game</Text>
            </Pressable>
            </View>
            <Pressable style={styles.back} onPress={()=>{props.setModalVisible(!props.modalVisible); setCalc("")}}>
                <Text style={styles.enterText}>X</Text>
            </Pressable>
        </View>
    </Modal>
</View>
)
}

export default ModalScore

const styles = StyleSheet.create({
    endButtons: {
        display:"flex",
        flexDirection: "row",
    },
    modalview: {
        height: "100%",
        margin: "1%",
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
        fontSize:25,
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
    remove: {
        backgroundColor: "pink",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        borderColor:"black",
        borderWidth:2,
    },
    removeText: {
        fontSize:25,
        textAlign: "center"
    },
    newGameB:{
        backgroundColor:"lightblue",
        borderColor:"black",
        borderWidth:2,
        borderRadius:20,
        padding:10,
        margin: 10,
    },
    newGameT:{
        fontSize:25,
        textAlign:"center"
    },
})