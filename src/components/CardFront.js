import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const CardFront = ({name, image, bio, age, icon, toggleInfoButton}) => {

    return (
        <View style={styles.cardFront}>
            <ImageBackground
                source={image}
                style={styles.cardFrontImage}>
                <Text style={styles.subheadingFrontLeft}>
                    <Image source={icon}
                           style={styles.subheadingIcon}/> {age}yo </Text>
                <View style={styles.cardFrontInner}>
                    <Text style={styles.headingFront}>{name}</Text>
                    <Text style={styles.descFront}>{bio}</Text>
                </View>
            </ImageBackground>
            <TouchableOpacity style={styles.buttonInfo} onPressIn={toggleInfoButton}>
                <Ionicons name="information-circle" style={styles.buttonInfoIcon}/>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    /* CARD FRONT */
    cardFront: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: "#5ba970",

        shadowColor: "#000000",   // for ios
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        // elevation: 10    // causing problems for nextCard
    },
    cardFrontImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",

        justifyContent: "flex-end",
    },
    cardFrontInner: {
        padding: 30,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    subheadingFrontLeft: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
    subheadingIcon: {
        width: 30,
        height: 30,
    },
    headingFront: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold"
    },
    descFront: {
        textAlign: "center",
        fontSize: 18,
        color: "#6a6a6a",
        lineHeight: 25,
    },
    buttonInfo: {
        position: "absolute",
        top: 5,
        right: 10,
    },
    buttonInfoIcon: {
        fontSize: 44,
        color: "#ffffff",
    },
})

export default CardFront