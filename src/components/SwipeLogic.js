import React, {useState, useEffect} from "react";
import {StyleSheet, View, useWindowDimensions} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useAnimatedGestureHandler,
    interpolate, withSpring, runOnJS, Extrapolate
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";

import Like from "../../assets/images/LIKE2.png";
import Nope from "../../assets/images/nope.png";

const ROTATION = 60
const SWIPE_VELOCITY = 1000
const LABEL_THRESHOLD = 50

const SwipeLogic = (props) => {
    const {data, renderItem, onSwipeLeft, onSwipeRight} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(currentIndex + 1)
    const currentProfile = data[currentIndex]
    const nextProfile = data[nextIndex]

    const {width: screenWidth} = useWindowDimensions()
    const hiddenTranslateX = 2 * screenWidth
    const translateX = useSharedValue(0) // main points: -width   0    width

    const rotate = useDerivedValue(() => interpolate(translateX.value,
        [0, hiddenTranslateX],
        [0, ROTATION]
    ) + "deg")               // main points: -60deg  0deg  60deg


    const cardStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        },
            {
                rotate: rotate.value
            }
        ]
    }))


    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(translateX.value,
                    [-hiddenTranslateX, 0, hiddenTranslateX],
                    [1, 0.8, 1]),
            }
        ],
        opacity: interpolate(translateX.value,
            [-hiddenTranslateX, 0, hiddenTranslateX],
            [1, 0.5, 1]),
    }))


    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value,
            [LABEL_THRESHOLD, hiddenTranslateX / 5],
            [0, 1],
            Extrapolate.CLAMP
        )
    }))
    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value,
            [-LABEL_THRESHOLD, -hiddenTranslateX / 5],
            [0, 1],
            Extrapolate.CLAMP
        )
    }))

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX
        },
        onEnd: (event) => {
            if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0, {
                    damping: 10,
                })
            } else {
                translateX.value = withSpring(event.velocityX > 0 ? hiddenTranslateX : -hiddenTranslateX,
                    {},
                    () => {
                        runOnJS(setCurrentIndex)(currentIndex + 1)
                    }
                )

                const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
                onSwipe && runOnJS(onSwipe)(currentProfile);
            }
        }
    })


    useEffect(() => {
        const delayReset = setTimeout(() => {
            translateX.value = 0
            setNextIndex(currentIndex + 1)
        }, 50)

        return () => {
            clearTimeout(delayReset)
        }
    }, [currentIndex, translateX]);


    return (
        <View style={styles.container}>
            {nextProfile && (
                <View style={styles.nextCardContainer}>
                    <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                        {renderItem({item: nextProfile})}
                    </Animated.View>
                </View>
            )}

            {currentProfile && (
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.animatedCard, cardStyle]}>
                        <View style={styles.labelsContainer}>
                            <Animated.Image source={Like} style={[styles.like, likeStyle]}/>
                        </View>
                        <View style={styles.labelsContainer}>
                            <Animated.Image source={Nope} style={[styles.nope, nopeStyle]}/>
                        </View>
                        {renderItem({item: currentProfile})}
                    </Animated.View>
                </PanGestureHandler>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    animatedCard: {
        width: "85%",
        height: "65%",
        justifyContent: "center",
        alignItems: "center",
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    labelsContainer: {
        zIndex: 5,
        pointerEvents: "none"
    },
    like: {
        width: 90,
        height: 100,
        resizeMode: "contain",
        position: "absolute",
        top: 40,
        right: "20%",
        zIndex: 2,
        // elevation: 1   // maybe on ios or android?
    },
    nope: {
        width: 125,
        height: 125,
        resizeMode: "contain",
        position: "absolute",
        top: 40,
        left: "15%",
        zIndex: 2,
        // elevation: 1   // maybe on ios or android?
    }
})

export default SwipeLogic