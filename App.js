import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SwipeScreen from "./src/screens/SwipeScreen";
import TestTapScreen from "./src/screens/TestTapScreen";

const App = () => {
    return (
        <GestureHandlerRootView style={styles.pageContainer}>
            <SwipeScreen />
            {/*<TestTapScreen />*/}
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