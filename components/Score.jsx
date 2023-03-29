import {useState} from "react"
import { Button, StyleSheet, Text, View, TouchableOpacity, Pressable, Modal } from "react-native";

const ScoreCards = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [calc, setCalc] = useState("")
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
            <Pressable style={styles.enter} onPress={()=>{setModalVisible(!modalVisible); props.setScore1(props.score1 + Number(calc)) ; setCalc("")}}>
                <Text>Enter</Text>
            </Pressable>
        </View>
    </Modal>
    <Pressable style={styles.button1} onPress={()=>{setModalVisible(true)}}>
        <Text style={styles.score1}>{props.score1}</Text>
    </Pressable>
    <Text style={styles.frames}>Frames: {props.frame1}</Text>
    <Pressable style={styles.button2}>
        <Text style={styles.score2}>{props.score2}</Text>
    </Pressable>
    <Text style={styles.frames}>Frames: {props.frame2}</Text>
</View>
)
}

export default ScoreCards

const styles = StyleSheet.create({
    button1: {
        marginTop: "5%",
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
        fontSize: 100,
    },
    button2: {
        marginTop: "15%",
        marginBottom: "5%",
        marginRight: "5%",
        marginLeft: "5%",
        height: "40%",
        width: "90%",
        backgroundColor: "orange",
        justifyContent: "center",
    },
    score2: {
        color: "white",
        textAlign: "center",
        fontSize: 100,
    },
    frames: {
        textAlign: "center",
        marginTop: 5,
    },
    modalview: {
        margin: 20,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    enter: {
        backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 20,
    },
    nums1: {
        backgroundColor: "grey",
        padding: 20,
        borderRadius: 50,
        height: 100,
        width: 80,
        alignItems: "center",
    },
    numtext: {
        color: "white",
    },
    scrn: {
        justifyContent:"center",
        alignItems:"center"
    },
    calcScreen: {
        borderColor:"black",
        borderWidth:2,
        width: 300,
        height: 90,
        fontSize: 45,
        marginBottom: 5,
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
    }
})