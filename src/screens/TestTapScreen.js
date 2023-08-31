import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

const TestTapScreen = () => {
    const [isSingleTapped, setIsSingleTapped] = useState(false);

    const _onSingleTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            setIsSingleTapped(!isSingleTapped);
        }
    };

    return (
        <TapGestureHandler onHandlerStateChange={_onSingleTap}>

            <View
                style={[
                    styles.container,
                    isSingleTapped ? styles.blueContainer : styles.redContainer,
                ]}>

                <Text style={styles.text}>
                    {isSingleTapped ? "BLUE" : "RED"}
                </Text>

            </View>
        </TapGestureHandler>
    );
};




const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
    },
    redContainer: {
        backgroundColor: "red",
    },
    blueContainer: {
        backgroundColor: "blue",
    },
    text: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: 40,
    },
});

export default TestTapScreen;