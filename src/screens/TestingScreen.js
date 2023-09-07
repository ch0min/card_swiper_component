import React, {useState} from "react";
import {ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";

const TestingScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/klimakampen-logo.png")}
                style={styles.cardFrontImage}>
            </ImageBackground>
            <TouchableOpacity style={styles.buttonInfo} onPress={toggleCard}>
                <Ionicons name="information-circle" style={styles.buttonInfoIcon}/>
            </TouchableOpacity>
        </View>



    );
};


const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "90%",
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
    },
    cardFrontImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        zIndex: 1,

        justifyContent: "flex-end",
    },
    buttonInfo: {
        position: "absolute",
        top: 55,
        right: 55,
        zIndex: 2,
        elevation: 2,

    },
    buttonInfoIcon: {
        fontSize: 44,
        color: "#ffffff",
        zIndex: 2,
        elevation: 2,

    },
});

export default TestingScreen;