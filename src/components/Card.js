import React from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";

const Card = (props) => {
    const {name, image, bio} = props.user

    return (
        <View style={styles.card}>
            <ImageBackground
                source={{uri: image}}
                style={styles.image}>
                <View style={styles.cardInner}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: "#fff",

        // shadowColor: "#ff0000",   // for ios
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        elevation: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",

        justifyContent: "flex-end",
    },
    cardInner: {
        padding: 10
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