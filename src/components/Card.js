import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

import {Ionicons} from "@expo/vector-icons";


const Card = (props) => {
    const {name, image, bio, desc, age, icon, testbg} = props.user

    const [isCardFlipped, setIsCardFlipped] = useState(false)


    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            setIsCardFlipped(!isCardFlipped)
        }
    }

    const toggleButton = () => {
        setIsCardFlipped(!isCardFlipped)
    }


    return (
        <View style={styles.cardContainer}>
            {isCardFlipped ? (
                <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
                    <View style={styles.cardBack}>
                        <View style={styles.cardBackImageWrapper}>
                            <ImageBackground
                                source={require("../../assets/images/klimakampen-logo.png")}
                                style={styles.cardBackImage}
                            >
                            </ImageBackground>
                            <Text style={styles.headingBack}>Facts</Text>
                            <Text style={styles.descCardBack}>{desc}</Text>
                        </View>
                    </View>
                </TapGestureHandler>

            ) : (
                <View style={styles.cardFront}>
                    <ImageBackground
                        source={image}
                        style={styles.cardFrontImage}
                    >
                        <Text style={styles.subheadingFrontLeft}><Image source={icon}
                                                                        style={styles.subheadingIcon}/> {age}yo </Text>
                        <View style={styles.cardFrontInner}>
                            <Text style={styles.headingFront}>{name}</Text>
                            <Text style={styles.descFront}>{bio}</Text>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={styles.buttonInfo} onPressIn={toggleButton}>
                        <Ionicons name="information-circle" style={styles.buttonIcon}/>
                    </TouchableOpacity>
                </View>
            )}
        </View>

    /** TESTING WITH COLOR BG INSTEAD OF IMAGE BG **/
    // <View style={styles.cardContainer}>
    //     {isCardFlipped ? (
    //         <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
    //             <View style={styles.cardBack}>
    //                 <View style={styles.cardBackImageWrapper}>
    //                     <ImageBackground
    //                         source={require("../../assets/images/klimakampen-logo.png")}
    //                         style={styles.cardBackImage}
    //                     >
    //                     </ImageBackground>
    //                     <Text style={styles.headingBack}>Facts</Text>
    //                     <Text style={styles.descCardBack}>{desc}</Text>
    //                 </View>
    //             </View>
    //         </TapGestureHandler>
    //
    //     ) : (
    //         <View style={styles.cardFront}>
    //             <View
    //                 source={image}
    //                 style={{backgroundColor: testbg, ...StyleSheet.absoluteFillObject,
    //                 }}
    //             >
    //                 <Text style={styles.subheadingFrontLeft}><Image source={icon}
    //                                                                 style={styles.subheadingIcon}/> {age}yo </Text>
    //                 <View style={styles.cardFrontInner}>
    //                     <Text style={styles.headingFront}>{name}</Text>
    //                     <Text style={styles.descFront}>{bio}</Text>
    //                 </View>
    //             </View>
    //             <TouchableOpacity style={styles.buttonInfo} onPressIn={toggleButton}>
    //                 <Ionicons name="information-circle" style={styles.buttonIcon}/>
    //             </TouchableOpacity>
    //         </View>
    //     )}
    // </View>


        // <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
        //     {isCardFlipped ? (
        //         <View style={styles.cardBack}>
        //             <View style={styles.cardBackImageWrapper}>
        //             <ImageBackground
        //                 source={require("../../assets/images/klimakampen-logo.png")}
        //                 style={styles.cardBackImage}
        //             >
        //             </ImageBackground>
        //                 <Text style={styles.headingBack}>Facts</Text>
        //                 <Text style={styles.descCardBack}>{desc}</Text>
        //             </View>
        //         </View>
        //     ) : (
        //         <View style={styles.cardFront}>
        //             <ImageBackground
        //                 source={image}
        //                 style={styles.cardFrontImage}
        //             >
        //                 <Text style={styles.subheadingFrontLeft}>age: {age}</Text>
        //                 <View style={styles.cardFrontInner}>
        //                     <Text style={styles.headingFront}>{name}</Text>
        //                     <Text style={styles.descFront}>{bio}</Text>
        //                 </View>
        //             </ImageBackground>
        //         </View>
        //     )}
        // </TapGestureHandler>


    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: "100%",
        zIndex: 1
    },
    /* CARD FRONT */
    cardFront: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: "#5ba970",

        shadowColor: "#000000",   // for ios
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        // elevation: 10    // causing problems for nextCard
    },
    cardFrontImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",

        justifyContent: "flex-end",
    },
    cardFrontInner: {
        padding: 30,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    subheadingFrontLeft: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
    subheadingIcon: {
        width: 30,
        height: 30,
    },
    headingFront: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold"
    },
    descFront: {
        textAlign: "center",
        fontSize: 18,
        color: "#6a6a6a",
        lineHeight: 25,

    },
    buttonInfo: {
        position: "absolute",
        top: 5,
        right: 10,
    },
    buttonIcon: {
        fontSize: 44,
        color: "#ffffff",
    },
    testbg: {
        ...StyleSheet.absoluteFillObject,

    },


    /* CARD BACK */
    cardBack: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: "#34aa73",
        borderWidth: 1,
        borderColor: "#bae9da",

        shadowColor: "#000000",   // for ios
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        overflow: "hidden"
    },
    cardBackImageWrapper: {
        padding: 10,
        alignItems: "center",
    },
    cardBackImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    headingBack: {
        marginTop: 15,
        fontSize: 20,
        color: "#bae9da",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    descCardBack: {
        margin: 20,
        textAlign: "center",
        fontSize: 18,
        color: "#7fccac",
        lineHeight: 25,
        fontWeight: "bold",
    },

})

export default Card