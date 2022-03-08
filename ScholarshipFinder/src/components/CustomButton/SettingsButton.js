import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native'

const SettingsButton = ({onPress, text, type = "PRIMARY", backColor, frontColor}) => {
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
        backgroundColor: '#FFCE31',
        width: '100%',
    
        padding: 15,
        marginVertical: 7.5,
        alignItems: 'center',
        borderRadius: 15,
        //borderWidth: 1,
        },

        container_Primary: {
            backgroundColor: '#FFCE31',
        },

        container_tertiary: {},

        text: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
        },
        text_tertiary: {
            color: 'gray',
        }
    });
export default SettingsButton;