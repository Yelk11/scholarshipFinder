import React, {useState} from 'react';
import { View, Button, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WhiteButton from '../components/CustomButton/WhiteButton';

const ScholarshipSubmitted = (props) => {

    const navigation = useNavigation();

    const onContinuePressed = () => navigation.navigate('PostScholarship')

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Scholarship has been successfully submitted for review!</Text>
            <WhiteButton text="Continue" onPress={onContinuePressed}></WhiteButton>
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
        position: 'absolute',
        top: 130
    },
})

export default ScholarshipSubmitted;