import React from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

const CardBack = ({desc, flipState, toggleFlip}) => {

    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if (flipState.value === 1) {
                toggleFlip()
            }
        }
    }

    return (
        <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
            <View style={styles.cardBack}>
                <View style={styles.cardBackImageWrapper}>
                    <ImageBackground
                        source={require("../../assets/images/klimakampen-logo.png")}
                        style={styles.cardBackImage}>
                    </ImageBackground>
                    <Text style={styles.headingBack}>Facts</Text>
                    <View>
                        <Text style={styles.descCardBack}>{desc}</Text>
                    </View>

                </View>
            </View>
        </TapGestureHandler>

    )
}

const styles = StyleSheet.create({
    /* CARD BACK */
    cardBack: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: "#34aa73",
        borderWidth: 1,
        borderColor: "#bae9da",

        // shadowColor: "#000000",   // for ios
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        overflow: "hidden"
    },
    cardBackImageWrapper: {
        alignItems: "center",
        padding: 10,
    },
    cardBackImage: {
        position: "absolute",
        alignSelf: "flex-start",
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    headingBack: {
        marginTop: 55,
        fontSize: 20,
        color: "#bae9da",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    descCardBack: {
        margin: 20,
        textAlign: "center",
        fontSize: 18,
        color: "#7fccac",
        lineHeight: 25,
        fontWeight: "bold",
    },
})

export default CardBack