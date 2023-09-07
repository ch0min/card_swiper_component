import React, {useState, useEffect} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

const LoadingSpinner = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        isLoading ? (
            <View style={styles.loadingContainer}>
                <ActivityIndicator style={styles.loadingSpinner} size="large" color="#245c00"/>
            </View>
        ) : (
            children
        )
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5ba970"
    },
    loadingSpinner: {
        transform: [{scale: 1.5}]
    }
})

export default LoadingSpinner