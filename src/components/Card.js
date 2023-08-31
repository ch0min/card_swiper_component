import React, {useState} from "react";
import {StyleSheet, View, Text, ImageBackground} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

const Card = (props) => {
    const {name, image, bio, desc} = props.user

    const [isCardFlipped, setIsCardFlipped] = useState(false)

    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            setIsCardFlipped(!isCardFlipped)
        }
    }


    return (
        <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
            {isCardFlipped ? (
                <View style={styles.cardBack}>
                    <View style={styles.cardBackImageWrapper}>
                    <ImageBackground
                        source={require("../../assets/images/klimakampen-logo.png")}
                        style={styles.cardBackImage}>
                    </ImageBackground>
                        <Text style={styles.headingBack}>Facts</Text>
                        <Text style={styles.descCardBack}>{desc}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.cardFront}>
                    <ImageBackground
                        source={image}
                        style={styles.cardFrontImage}>
                        <View style={styles.cardFrontInner}>
                            <Text style={styles.headingFront}>{name}</Text>
                            <Text style={styles.descFront}>{bio}</Text>
                        </View>
                    </ImageBackground>
                </View>
            )}
        </TapGestureHandler>
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
        backgroundColor: "#fff"
    },
    headingFront: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold"
    },
    descFront: {
        fontSize: 18,
        color: "#6a6a6a",
        lineHeight: 25,
    },


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
        borderRadius: 20,
    },
    headingBack: {
        fontSize: 30,
        color: "#bae9da",
        fontWeight: "bold",
        fontStyle: "uppercase"
    },
    descCardBack: {
        margin: 30,
        fontSize: 18,
        color: "#7fccac",
        lineHeight: 25,
    },

})

export default Card