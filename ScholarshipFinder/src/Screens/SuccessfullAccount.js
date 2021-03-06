import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, setValue, onChangeText, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginSystemCard from '../components/LoginSystemCard';
import LoginButton from '../components/CustomButton/LoginButton';
import initialLogo from '../../assets/images/logo-initial.png';

const SuccessfullAccount = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onContinuePressed = () => { 
        navigation.navigate('PersonalInfo');
    };

    const onScholarshipsPressed = () => { 
        navigation.navigate('BrowseScholarships');
    };
    
    return(
        <View style={styles.container}>
            <Image style={styles.logoTopCenter} source={initialLogo} />
            <Text style={styles.text}>Your Account was successfully created</Text>
            <LoginSystemCard>       
                <LoginButton frontColor="#000000" backColor="#FFF" text="Browse Scholarships now" onPress={onScholarshipsPressed} />
            </LoginSystemCard>
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
        fontWeight: 'bold'

    },

    logoTopCenter: {
        height: 150,
        width: 150,
        position: 'absolute',
        top: 60,
        justifyContent: 'center'
    },

});

export default SuccessfullAccount;