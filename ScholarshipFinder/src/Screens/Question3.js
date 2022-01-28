import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';

const Question3 = () => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.questions}>Identify your area of study: (Can be changed later)</Text>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Architecture and Related Services"/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Engineering"/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="History"/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Psychology"/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="OTHER"/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="UNDECIDED"/>
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

export default Question3;