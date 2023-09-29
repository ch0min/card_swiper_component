import React from "react";
import {StyleSheet, View} from "react-native";

import cards from "../../assets/data/cards";
import Card from "../components/Card";
import SwipeLogic from "../components/SwipeLogic";
import {useSharedValue} from "react-native-reanimated";


const SwipeScreen = () => {
    const flipState = useSharedValue(0)

    const onSwipeLeft = (card) => {
        console.warn("Swipe Left")   // write here for backend data logic
    }
    const onSwipeRight = (card) => {
        console.warn("Swipe Right") // write here for backend data logic
    }

    return (
            <View style={styles.pageContainer}>
                <SwipeLogic
                    data={cards}
                    renderItem={({card}) => <Card card={card} flipState={flipState}/>}
                    onSwipeLeft={onSwipeLeft}
                    onSwipeRight={onSwipeRight}
                    flipState={flipState}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
    },
    heading: {
        position: "absolute",
        top: "10%",
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        alignItems: "center",
        zIndex: 1
    }
})

export default SwipeScreen