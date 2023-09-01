import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

const TestTapScreen = () => {
    const [isSingleTapped, setIsSingleTapped] = useState(false);

    const _onSingleTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            setIsSingleTapped(!isSingleTapped);
        }
    };

    const toggleCard = () => {
        setIsSingleTapped(!isSingleTapped);

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCard}>
                <Text style={styles.button}>Click</Text>
            </TouchableOpacity>

            <View style={[
                isSingleTapped ? styles.blueContainer : styles.redContainer
            ]}>
            </View>
        </View>



        // <TapGestureHandler onHandlerStateChange={_onSingleTap}>
        //     <View
        //         style={[
        //             styles.container,
        //             isSingleTapped ? styles.blueContainer : styles.redContainer,
        //         ]}>
        //
        //         <Text style={styles.text}>
        //             {isSingleTapped ? "BLUE" : "RED"}
        //         </Text>
        //
        //     </View>
        // </TapGestureHandler>
    );
};


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
    },
    redContainer: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    blueContainer: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
    text: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: "green",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    }
});

export default TestTapScreen;