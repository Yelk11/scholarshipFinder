import React, {useState} from 'react';
import { View, Button, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WhiteButton from '../components/CustomButton/WhiteButton';

const AccountClosed = (props) => {

    const navigation = useNavigation();

    const Welcome = () => navigation.navigate('WelcomeScreen')

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Your account was sucessfully closed</Text>
            <WhiteButton text="Continue" onPress={Welcome}></WhiteButton>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        backgroundColor: '#FFCE31',
    },

    text : {
        color: "black",
        fontSize: 32,
        textAlign: 'center',
        width: "100%",
        paddingBottom: 10,
        position: 'absolute',
        top: 130
    },
})

export default AccountClosed;