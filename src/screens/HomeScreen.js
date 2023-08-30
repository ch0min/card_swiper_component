import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import users from "../../assets/data/users";
import Card from "../../src/components/TinderCard";
import AnimatedStack from "../../src/components/AnimatedStack";


const HomeScreen = () => {

    const onSwipeLeft = (user) => {
        console.warn("Swipe Left", user.name)   // write here for backend data logic
    }
    const onSwipeRight = (user) => {
        console.warn("Swipe Right", user.name) // write here for backend data logic
    }

    return (
        <GestureHandlerRootView style={styles.pageContainer}>
            <AnimatedStack
                data={users}
                renderItem={({item}) => <Card user={item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export default HomeScreen