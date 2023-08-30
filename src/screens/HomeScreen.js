import React from "react";
import {StyleSheet, View} from "react-native";

import users from "../../assets/data/users";
import Card from "../components/TinderCard";
import AnimatedStack from "../components/AnimatedStack";


const HomeScreen = () => {
    const onSwipeLeft = (user) => {
        console.warn("Swipe Left", user.name)   // write here for backend data logic
    }
    const onSwipeRight = (user) => {
        console.warn("Swipe Right", user.name) // write here for backend data logic
    }

    return (
        <View style={styles.pageContainer}>
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
        width: "100%"
    }
})

export default HomeScreen