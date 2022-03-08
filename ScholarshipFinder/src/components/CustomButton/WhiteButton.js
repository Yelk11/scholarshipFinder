import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native'

const WhiteButton = ({onPress, text, type = "PRIMARY", backColor, frontColor}) => {
    return(
        <Pressable onPress={onPress} style={[styles.container, styles['container_${type}'],
        backColor ? {backgroundColor: backColor} : {} ]}>
            <Text style={[styles.text, styles['text_${type}'],
        frontColor ? {color: frontColor} : {}]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        padding: 10,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black"
        },

        container_Primary: {
            backgroundColor: '#FFCE31',
        },

        container_tertiary: {},

        text: {
            color: 'black',
            fontSize: 20,
        },
        text_tertiary: {
            color: 'gray',
        }
    });
export default WhiteButton;