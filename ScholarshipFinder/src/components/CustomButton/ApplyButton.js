import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const ApplyButton = ({ onPress, text, type = "PRIMARY", backColor, frontColor, apply_url }) => {
    
    return (
        <Pressable onPress={onPress} style={[styles.container, styles['container_${type}'],
        backColor ? { backgroundColor: backColor } : {}]}>
            <Text style={[styles.text, styles['text_${type}'],
            frontColor ? { color: frontColor } : {}]}>{text}</Text>
            
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
        padding: 5,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        borderRadius: 16,
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
        fontWeight: 'bold'
        // textDecorationLine: 'underline'
    },
    text_tertiary: {
        color: 'gray',
    }
});
export default ApplyButton;