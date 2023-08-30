import 'react-native-gesture-handler';
import React from "react";
import {StyleSheet} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";


const App = () => {
    return (
        <GestureHandlerRootView style={styles.pageContainer}>
            <HomeScreen />
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({})

export default App