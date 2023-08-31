import React from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";

const Card = (props) => {
    const {name, image, bio} = props.user

    return (
        <View style={styles.card}>
            <ImageBackground
                source={image}
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
        borderRadius: 20,
        backgroundColor: "#5ba970",

        // shadowColor: "#ff0000",   // for ios
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        // elevation: 10    // causing problems for nextCard
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",

        justifyContent: "flex-end",
    },
    cardInner: {
        padding: 30,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    name: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold"
    },
    bio: {
        fontSize: 18,
        color: "#6a6a6a",
        lineHeight: 25,
    }
})

export default Card