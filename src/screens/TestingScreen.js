import React, {useState} from "react";
import {ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image} from "react-native";
import CardIcons from "../components/CardIcons";



const TestingScreen = () => {
    return (
        <View>
            <CardIcons name="Waste" size={50} color="#F5F5F5" style={styles.cardIcon} />
        </View>



    );
};


const styles = StyleSheet.create({
    cardIcon: {
        width: 100,
        height: 100
    }


});

export default TestingScreen;