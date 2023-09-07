import React from "react";
import {StyleSheet, View, ScrollView, Text, ImageBackground} from "react-native";
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

                    <Text style={styles.headingBack}>Facts</Text>
                    <ScrollView>
                        <Text style={styles.descCardBack}>{desc}</Text>
                    </ScrollView>
                    <ImageBackground
                        source={require("../../assets/images/klimakampen-logo.png")}
                        style={styles.cardBackImage}>
                    </ImageBackground>
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

        shadowColor: "#000000",   // for ios
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        overflow: "hidden"
    },
    cardBackImageWrapper: {
        padding: 10,
        alignItems: "center",
    },
    cardBackImage: {
        width: 100,
        height: 100,
        top: 75,
        borderRadius: 20,
    },
    headingBack: {
        marginTop: 15,
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