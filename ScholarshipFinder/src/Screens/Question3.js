import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';

const Question3 = () => {

    const navigation = useNavigation();

    const onQuestion3Pressed = () => navigation.navigate('Question4')
    
    return(
        <View style={styles.container}>
            <Text style={styles.questions}>Identify your area of study: (Can be changed later)</Text>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Architecture and Related Services" onPress={onQuestion3Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Engineering" onPress={onQuestion3Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="History" onPress={onQuestion3Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Psychology" onPress={onQuestion3Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="OTHER" onPress={onQuestion3Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="UNDECIDED" onPress={onQuestion3Pressed}/>
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