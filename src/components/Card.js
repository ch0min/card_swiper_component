import React, {useState} from "react";
import {StyleSheet, View} from "react-native";

import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = (props) => {
    const {name, image, bio, desc, age, icon} = props.user
    const [isCardFlipped, setIsCardFlipped] = useState(false)

    const toggleInfoButton = () => {
        setIsCardFlipped(!isCardFlipped)
    }


    return (
        <View style={styles.cardContainer}>
            {isCardFlipped ? (
                    <CardBack
                        desc={desc}
                        toggleInfoButton={toggleInfoButton}
                    />
            ) : (
                <CardFront
                    name={name}
                    image={image}
                    bio={bio}
                    age={age}
                    icon={icon}
                    toggleInfoButton={toggleInfoButton}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: "100%",
        zIndex: 1
    }
})

export default Card