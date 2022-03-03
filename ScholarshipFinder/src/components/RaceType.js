import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

const OPTIONS = [
    "American Indian or Alaskan native",
    "Black or African American",
    "Hispanic or Latino",
    "White or Caucasian",
    "Native Hawaiian or Pacific Islander",
    "Multiracial or Biracial",
    "A race/ethnicity not listed here",
    ]

// const WITDH = Dimensions.get('window').width;

// const HEIGHT = Dimensions.get('window').height;

const RaceType = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style ={[styles.modal]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        backgroundColor: '#596066',
        borderRadius: 10
    },
    option:{
        alignItems: 'flex-start'
    },
    text: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold'
    }


})

export {RaceType}