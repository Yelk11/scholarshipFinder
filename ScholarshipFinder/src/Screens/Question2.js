import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';

const Question2 = () => {

    const navigation = useNavigation();

    const onQuestion2Pressed = () => navigation.navigate('Question3')
    
    return(
        <View style={styles.container}>
            <Text style={styles.questions}>What year of college are you in? (Can Change Later)</Text>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Incoming College Student" onPress={onQuestion2Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Freshman" onPress={onQuestion2Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={onQuestion2Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={onQuestion2Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={onQuestion2Pressed}/>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={onQuestion2Pressed}/>
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

export default Question2;