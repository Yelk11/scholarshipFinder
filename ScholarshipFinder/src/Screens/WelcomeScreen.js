import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import initialLogo from '../../assets/images/logo-initial.png';
import InitialScreenCard from '../components/InitialScreenCard';

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const onUserSignInPressed = () => navigation.navigate('UserSignIn');
    const onUserCreateAccountPressed = () => navigation.navigate('CreateAccount');
    
    return(
                <View style={styles.container}>
                        <Image style={styles.logoTopCenter} source={initialLogo} />
                        <Text style={styles.text}>Find and apply to Scholarships that actually pertain to you</Text>
                        <InitialScreenCard>
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Sign In" onPress={onUserSignInPressed} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Create an account" onPress={onUserCreateAccountPressed} />
                        </InitialScreenCard>
                </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        //flexStart: .2,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#3E4347",
        flexDirection: "row",
        //display:"flex",
    },

    flexAdjustment : {
        flex: 30,
        top: 3,
    },

    text : {
        color: "white",
        fontSize: 32,
        textAlign: "center",
        padding: 1,
        top: -30,

    },

    logoTopCenter : {
        height: 100,
        width: 100,
        position: 'absolute',
        top: 55,
        justifyContent: 'center'
    },

})

export default WelcomeScreen;