import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SwipeScreen from "./src/screens/SwipeScreen";
import TestingScreen from "./src/screens/TestingScreen";

const App = () => {
    return (
        <GestureHandlerRootView style={styles.pageContainer}>
            <SwipeScreen />
            {/*<TestingScreen />*/}
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
})

export default App