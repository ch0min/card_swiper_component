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

const ROTATION = 60
const SWIPE_VELOCITY = 1000

const SwipeLogic = (props) => {
    const {data, renderItem, onSwipeLeft, onSwipeRight, flipState} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(currentIndex + 1)
    const currentCard = data[currentIndex]
    const nextCard = data[nextIndex]

    const {width: screenWidth} = useWindowDimensions()
    const hiddenTranslateX = 2 * screenWidth
    const translateX = useSharedValue(0) // main points: -width   0    width

    const rotate = useDerivedValue(() => interpolate(translateX.value,
        [0, hiddenTranslateX],
        [0, ROTATION]
    ) + "deg")               // main points: -60deg  0deg  60deg


    const cardAnim = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        },
            {
                rotate: rotate.value
            }
        ]
    }))

    const nextCardAnim = useAnimatedStyle(() => ({
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

    const nextCardOpacityAnim = useAnimatedStyle(() => ({
        opacity: interpolate(flipState.value,
            [1, 0.5, 1],
            [1, 0, 1])
    }))

    const greenAnim = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value,
            [50, hiddenTranslateX / 2],
            [0, 1],
            Extrapolate.CLAMP
        );
        return {
            opacity: opacity,
            zIndex: opacity > 0.01 ? 1 : -1,
        }
    });

    const redAnim = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value,
            [-50, -hiddenTranslateX / 2],
            [0, 1],
            Extrapolate.CLAMP
        );
        return {
            opacity: opacity,
            zIndex: opacity > 0.01 ? 1 : -1,
        }
    });

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
                const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
                onSwipe && runOnJS(onSwipe)(currentCard);

                translateX.value = withSpring(event.velocityX > 0 ? hiddenTranslateX : -hiddenTranslateX,
                    {},
                    () => {
                        runOnJS(setCurrentIndex)(currentIndex + 1)
                    }
                )

                flipState.value = 0
            }
        }
    })


    useEffect(() => {
        const delayReset = setTimeout(() => {
            translateX.value = 0
            setNextIndex(currentIndex + 1)
        }, 30)

        return () => {
            clearTimeout(delayReset)
        }
    }, [currentIndex, translateX]);


    return (
        <View style={styles.container}>

            {nextCard && (
                <View style={styles.nextCardContainer}>
                    <Animated.View style={[styles.animatedCard, nextCardAnim, nextCardOpacityAnim]}>
                        {renderItem({card: nextCard})}
                    </Animated.View>
                </View>
            )}

            {currentCard && (
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.animatedCard, cardAnim]}>
                        <Animated.View style={[styles.green, greenAnim]}></Animated.View>
                        <Animated.View style={[styles.red, redAnim]}></Animated.View>

                        {renderItem({card: currentCard})}
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
    indicatorContainer: {

    },
    green: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,
        backgroundColor: "green",
    },
    red: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,
        backgroundColor: "red",
    },
})

export default SwipeLogic