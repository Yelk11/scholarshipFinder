import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';

const Question1 = () => {

    const navigation = useNavigation();

    const onQuestion1Pressed = () => navigation.navigate('Question2')
    
    return(
        <View style={styles.container}>
            <Text style={styles.questions}>Are you a first time college student in your family? (Can be changed later)</Text>
            <CustomButton frontColor="#000000" backColor="#6FE7C3" text="Yes" onPress={onQuestion1Pressed}/>
            <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={onQuestion1Pressed}/>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#FFCE31",
    },

    questions : {
        color: "white",
        fontSize: 24,
        backgroundColor : "#3E4347",
        textAlign: 'center',
        width: "100%",
        padding: 20,
        // bottom:
    }

})

export default Question1;