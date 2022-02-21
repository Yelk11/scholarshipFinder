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
            <Text style={styles.title}>Name {props.name}</Text>
            <Text style={styles.info}>Amount {props.amount}</Text>
            <Text style={styles.info}>Deadline: {props.deadline.toDate().toDateString()}</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        
    }
})

export default ScholarshipDetails;