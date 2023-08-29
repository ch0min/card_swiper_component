import React from "react";
import {StyleSheet, View, Text, Image, ImageBackground} from "react-native";

const Card = () => {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"}}
                style={styles.image}>
                <View style={styles.cardInner}>
                    <Text style={styles.name}>Mark Zuckerberg</Text>
                    <Text style={styles.bio}>No need to send me your nudes, I already saw them</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "95%",
        height: "70%",
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: { // for ios
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",

        justifyContent: "flex-end",
    },
    cardInner: {
        padding: 10,
    },
    name: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    bio: {
        fontSize: 18,
        color: "white",
        lineHeight: 25
    }
})

export default Card