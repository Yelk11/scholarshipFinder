import React, {useState} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';

const ScholarshipDetails = (props) => {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Name {props.name}</Text>
            <Text>Amount {props.amount}</Text>
            <Text>Deadline: {props.deadline.toDate().toDateString()}</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        bottom: 40
    },

    text : {
        color: "#000",
        fontSize: 16,
        textAlign: 'left',
        width: "100%",
        padding: 2,
        left: 20
        // bottom:
    },

    headers : {
        color: "#000",
        fontSize: 24,
        textAlign: 'left',
        width: "100%",
        padding: 10,
        textDecorationLine: 'underline'
        // bottom:
    },

    small : {
        color: "#000",
        fontSize: 14,
        textAlign: 'left',
        width: "100%",
        padding: 2,
        // bottom:
    }

})

export default ScholarshipDetails;