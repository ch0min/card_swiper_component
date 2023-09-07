import React from "react";
import {StyleSheet, View} from "react-native";
import Animated, {useAnimatedStyle, interpolate, withTiming} from "react-native-reanimated";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = (props) => {
    const {rotateFlip} = props
    const {name, image, bio, desc, age, icon} = props.user

    const toggleFlip = () => {
        rotateFlip.value = rotateFlip.value ? 0 : 1
        console.log("Button clicked")
    }

    const cardFrontFlipStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(rotateFlip.value, [0, 1], [0, 180])
        return {
            transform: [
                {
                    rotateY: withTiming(`${rotateValue}deg`, {duration: 500})
                }
            ],
            zIndex: rotateFlip.value === 0 ? 1 : -1
        }
    })

    const cardBackFlipStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(rotateFlip.value, [0, 1], [180, 360])
        return {
            transform: [
                {
                    rotateY: withTiming(`${rotateValue}deg`, {duration: 500})
                }
            ],
            zIndex: rotateFlip.value === 1 ? 1 : -1
        }
    })


    return (
        <View style={styles.cardContainer}>
            <Animated.View style={[styles.cardFront, cardFrontFlipStyle]}>
                <CardFront
                        name={name}
                        image={image}
                        bio={bio}
                        age={age}
                        icon={icon}
                        toggleFlip={toggleFlip}
                    />
                </Animated.View>
                <Animated.View style={[styles.cardBack, cardBackFlipStyle]}>
                    <CardBack
                        desc={desc}
                        rotateFlip={rotateFlip}
                        toggleFlip={toggleFlip}
                    />
                </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    cardFront: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backfaceVisibility: "hidden",
    },
    cardBack: {
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden"
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

export default Card