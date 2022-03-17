import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, setValue, onChangeText, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import initialLogo from '../../assets/images/logo-initial.png';
import LoginSystemCard from '../components/LoginSystemCard';
import LoginButton from '../components/CustomButton/LoginButton';
import auth, { firebase } from '@react-native-firebase/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const onResetPasswordPressed = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            Alert.alert("Password reset email has been sent.");
        }, (error) => {
            Alert.alert("The email entered is invalid.");
        });
        if (email == "") {
            Alert.alert("Please enter a valid email.")
        }
    }

    const onLoginPressed = () => {
        navigation.navigate("UserSignIn")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter your email address to reset password</Text>
            <LoginSystemCard>
                <TextInput placeholder="Email"
                    placeholderTextColor="#FFFFFF"
                    color="#FFF"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={{
                        backgroundColor: '#596066',
                        width: '100%',
                        borderColor: '#e8e8e8',
                        borderWidth: 0.3, borderRadius: 3, paddingHorizontal: 6, marginVertical: 20
                    }} />
                <LoginButton frontColor="#000000" backColor="#FFF" text="Reset Password" onPress={onResetPasswordPressed} />
                <LoginButton frontColor="#000000" backColor="#FFF" text="Return to Login" onPress={onLoginPressed} />
            </LoginSystemCard>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexStart: .2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFCE31",
        flexDirection: "row",
        //display:"flex",
    },

    flexAdjustment: {
        flex: 30,
        top: 5,
    },

    text: {
        color: "black",
        fontSize: 32,
        textAlign: "center",
        padding: 1,
        top: -30,

    },

});

export default ForgotPassword;