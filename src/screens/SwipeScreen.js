import React from "react";
import {StyleSheet, View, Text} from "react-native";

import users from "../../assets/data/users";
import Card from "../components/Card";
import AnimatedStack from "../components/AnimatedStack";


const SwipeScreen = () => {
    const onSwipeLeft = (user) => {
        console.warn("Swipe Left", user.name)   // write here for backend data logic
    }
    const onSwipeRight = (user) => {
        console.warn("Swipe Right", user.name) // write here for backend data logic
    }

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.heading}>What's on your mind</Text>
            <AnimatedStack
                data={users}
                renderItem={({item}) => <Card user={item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100%",
        backgroundColor: "#5ba970",
    },
    heading: {
        position: "absolute",
        top: "10%",
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        alignItems: "center",
    }
})

export default SwipeScreen