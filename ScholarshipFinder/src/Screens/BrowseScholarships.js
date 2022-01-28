import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';

const BrowseScholarships = () => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Choose from these availale scholarships recommended to you based on your answers!</Text>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="MSI 46k Scholarship / $46,000"/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Melinda and Bill Gates Scholarship Foundation / $6,000"/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Founders in Technology / $10,000"/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="OU Relatives and Graduates / $2,000"/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Women in Engineering / $3,000"/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Dr. Z's very own personal funding! / $999,999,999,999.99"/>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        // backgroundColor : "#FFCE31"
        bottom: 40
    },

    text : {
        color: "#000",
        fontSize: 24,
        // backgroundColor : "#3E4347",
        textAlign: 'left',
        width: "100%",
        padding: 20,
        // bottom:
    }

})

export default BrowseScholarships;