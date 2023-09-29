import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import Animated, {useAnimatedStyle, interpolate, withTiming} from "react-native-reanimated";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = (props) => {
    const {flipState, card: {heading, icon, subheading, points, requirement, climate, inspiration, synergy, bgColor, boxColor}} = props

    const toggleFlip = () => {
        flipState.value = flipState.value ? 0 : 1;
    };

    const cardFrontFlipStyle = useAnimatedStyle(() => {
        const flipValue = interpolate(flipState.value, [0, 1], [0, 180])
        return {
            transform: [
                {
                    rotateY: withTiming(`${flipValue}deg`, {duration: 500})
                }
            ],
            zIndex: flipState.value === 0 ? 1 : -1
        }
    });

    const cardBackFlipStyle = useAnimatedStyle(() => {
        const flipValue = interpolate(flipState.value, [0, 1], [180, 360])
        return {
            transform: [
                {
                    rotateY: withTiming(`${flipValue}deg`, {duration: 500})
                }
            ],
            zIndex: flipState.value === 1 ? 1 : -1
        }
    });

    return (
        <View style={styles.cardContainer}>
            <Animated.View style={[styles.cardFront, cardFrontFlipStyle]}>
                <CardFront
                    heading={heading}
                    icon={icon}
                    subheading={subheading}
                    points={points}
                    bgColor={bgColor}
                    flipState={flipState}
                    toggleFlip={toggleFlip}
                />
            </Animated.View>
            <Animated.View style={[styles.cardBack, cardBackFlipStyle]}>
                <CardBack
                    heading={heading}
                    subheading={subheading}
                    points={points}
                    requirement={requirement}
                    climate={climate}
                    inspiration={inspiration}
                    synergy={synergy}
                    bgColor={bgColor}
                    boxColor={boxColor}
                    flipState={flipState}
                    toggleFlip={toggleFlip}
                />

            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
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
        backfaceVisibility: "hidden",
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