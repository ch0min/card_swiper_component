import React from "react";
import {StyleSheet, View, Text, Image, ImageBackground} from "react-native";

const App = () => {

  return (
      <View style={styles.pageContainer}>
        <View style={styles.card}>
          <ImageBackground
              source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"}}

              style={styles.image}
          />

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { // for ios
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden"
  }
})

export default App