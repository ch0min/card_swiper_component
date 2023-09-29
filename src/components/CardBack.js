import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";
import {TapGestureHandler, State} from "react-native-gesture-handler";

import CardIcons from "./CardIcons";

const CardBack = ({
                      heading,
                      subheading,
                      points,
                      requirement,
                      climate,
                      inspiration,
                      synergy,
                      bgColor,
                      boxColor,
                      flipState,
                      toggleFlip
                  }) => {

    const [chooseIcon, setChooseIcon] = useState(0);

    const iconList = [
        {name: "Requirement"},
        {name: "Climate"},
        {name: "Inspiration"},
        {name: "Synergy"}
    ];

    const renderItem = ({item, index}) => (
        <TouchableOpacity style={styles.boxButton} onPress={() => setChooseIcon(index)}>
            <View style={[styles.iconIndicator,
                {
                    borderColor: chooseIcon === index ? "whitesmoke" : "transparent"
                }]}
            >
                <CardIcons name={item.name}/>
            </View>
        </TouchableOpacity>
    )


    const onSingleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            if (flipState.value === 1) {
                toggleFlip()
            }
        }
    }

    const preventPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        <TapGestureHandler onHandlerStateChange={onSingleTapEvent}>
            <View style={[styles.cardBack, {backgroundColor: bgColor}]}>
                <Text style={styles.headingBack}>{heading}</Text>
                <Text style={styles.desc}>Separate waste every day in 8 categories</Text>

                <TapGestureHandler onHandlerStateChange={preventPropagation}>
                    <View style={[styles.boxDetails, {backgroundColor: boxColor}]}>
                        <View style={styles.boxButtons}>
                            <FlatList
                                data={iconList}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </TapGestureHandler>

                <View style={styles.cardDetails}>
                    <Text style={styles.subheading}>{subheading}</Text>
                    <View style={styles.cardPointsDetails}>
                        <Text style={styles.points}>{points}</Text>
                        <Text style={styles.pointsText}>points</Text>
                    </View>
                </View>

            </View>
        </TapGestureHandler>

    )
}

const styles = StyleSheet.create({
    /* CARD BACK */
    cardBack: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        padding: 50
    },
    headingBack: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 26,
        color: "#F5F5F5",
        fontWeight: "bold",
    },
    desc: {
        marginTop: 10,
        marginHorizontal: "5%",
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 18,
        color: "#F5F5F5",
    },
    boxDetails: {
        alignSelf: "center",
        width: 300,
        height: 170,
        marginTop: "15%",
        marginBottom: "25%",
        borderRadius: 25,

        shadowColor: "#6A6A6A",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        elevation: 1
    },
    boxButtons: {
        justifyContent: "center",
        alignItems: "center",
    },
    boxButton: {
        alignSelf: "center",
        marginTop: 20,
    },
    iconIndicator: {
        width: 45,
        height: 35,
        borderWidth: 2,
        borderRadius: 25,
        padding: 5,
    },
    cardDetails: {
        justifyContent: "center",
        alignItems: "center",
    },
    subheading: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 18,
        color: "#F5F5F5",
    },
    cardPointsDetails: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    points: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: "#F5F5F5",
    },
    pointsText: {
        fontFamily: "Rubik_500Medium",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#F5F5F5",
    },
})

export default CardBack