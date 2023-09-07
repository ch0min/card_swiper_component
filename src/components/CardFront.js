import React from "react";
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";


const CardFront = ({name, image, bio, age, icon, toggleFlip}) => {

    return (
        <View>
            <TouchableOpacity style={styles.buttonInfo} onPress={toggleFlip}>
                <Ionicons name="information-circle" style={styles.buttonInfoIcon}/>
            </TouchableOpacity>

            <ImageBackground
                   source={image}
                   style={styles.cardFrontImage}>
                   <Text style={styles.subheadingFrontLeft}>
                       <Image source={icon}
                              style={styles.subheadingIcon}/> {age}y/o
                   </Text>
                   <View style={styles.centerCircle}>
                       <Ionicons name="trash-outline" style={styles.centerIcon}/>
                   </View>
                   <View style={styles.cardFrontBox}>
                       <Text style={styles.headingFront}>{name}</Text>
                       <Text style={styles.descFront}>{bio}</Text>
                   </View>
               </ImageBackground>
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

        // shadowColor: "#000000",   // for ios
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 10,
        // elevation: 10    // causing problems for nextCard
    },
    cardFrontImage: {
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "flex-end",
    },
    cardFrontBox: {
        height: "25%",
        padding: 30,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    subheadingFrontLeft: {
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
        top: 75,
        left: 10,
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
        zIndex: 2
    },
    buttonInfoIcon: {
        fontSize: 44,
        color: "#ffffff"
    },
    centerCircle: {
        width: 75,
        height: 75,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        alignSelf: "center",
        top: 30,
        zIndex: 2
    },
    centerIcon: {
        fontSize: 44,
        color: "#5ba970",
        alignSelf: "center",
        top: 15,
    }
})

export default CardFront