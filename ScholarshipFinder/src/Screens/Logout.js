import React, {useState} from 'react';
import { View, Button, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WhiteButton from '../components/CustomButton/WhiteButton';
import initialLogo from '../../assets/images/logo-initial.png';

const Logout = (props) => {

    const navigation = useNavigation();

    const Welcome = () => navigation.navigate('WelcomeScreen')

    return(
        <View style={styles.container}>
            <Image style={styles.logoTopCenter} source={initialLogo} />
            <Text style={styles.text}>You have successfully logged out.</Text>
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
        top: -30,
        fontWeight: 'bold'
    },

    logoTopCenter: {
        height: 150,
        width: 150,
        top: -85,
        left: 130
    },
})

export default Logout;