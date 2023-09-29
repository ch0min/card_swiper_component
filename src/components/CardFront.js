import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";
import CardIcons from "./CardIcons";

const CardFront = ({heading, icon, subheading, points, bgColor, flipState, toggleFlip}) => {

    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if (flipState.value === 0) {
                toggleFlip()
            }
        }
    }

    return (
        <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
            <View style={[styles.cardFront, {backgroundColor: bgColor}]}>
                <Text style={styles.headingFront}>{heading}</Text>
                <CardIcons name={icon} size={250} style={styles.cardIcon}/>
                <View style={styles.cardDetails}>
                    <Text style={styles.subheading}>{subheading}</Text>
                    <View style={styles.cardPointsDetails}>
                        <Text style={styles.points}>{points}</Text>
                        <Text style={styles.pointsText}>points</Text>
                    </View>
                </View>
            </View>
        </TapGestureHandler>
    );
}

const styles = StyleSheet.create({
    /* CARD FRONT */
    cardFront: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        padding: 50
    },
    headingFront: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 26,
        color: "#F5F5F5",
        fontWeight: "bold",
    },
    cardIcon: {
        alignSelf: "center",
    },
    cardDetails: {
        justifyContent: "center",
        alignItems: "center",
    },
    subheading: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 18,
        color: "#F5F5F5",
    },
    cardPointsDetails: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    points: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: "#F5F5F5",
    },
    pointsText: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#F5F5F5",
    }
})

export default CardFront