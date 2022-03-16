import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, setValue, onChangeText, TextInput, Image } from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import initialLogo from '../../assets/images/logo-initial.png';
import LoginSystemCard from '../components/LoginSystemCard';
import LoginButton from '../components/CustomButton/LoginButton';

import auth from '@react-native-firebase/auth';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        navigation.navigate('UserSignIn');
    };
    const onSignUpPressed = () => {
        navigation.navigate('SuccessfullAccount');
    };

    const onUserSignupGoogle = () => {
        console.warn('onUserSignupGoogle');
    };

    const onUserSignupFacebook = () => {
        console.warn('onUserSignupFacebook');
    };

    return (

        <View style={styles.container}>
            <Image style={styles.logoTopCenter} source={initialLogo} />

                    <LoginSystemCard>

                    <Text style={styles.title}>Create an account</Text>

                    <TextInput placeholder="Email"
                        placeholderTextColor="#FFFFFF"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={{
                            backgroundColor: '#596066',
                            width: '100%',
                            borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5
                        }} />

                    <TextInput placeholder="Password"
                        placeholderTextColor="#FFFFFF"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        style={{
                            backgroundColor: '#596066',
                            width: '100%',
                            borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5
                        }} />

                    <TextInput placeholder="Confirm Password"
                        placeholderTextColor="#FFFFFF"
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry={true}
                        style={{
                            backgroundColor: '#596066',
                            width: '100%',
                            borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5
                        }} />

                    <LoginButton text="Register" onPress={() => {
                        if (password == confirmPassword) {
                            auth()
                                .createUserWithEmailAndPassword(email, password)
                                .then(() => {
                                    console.log('User account created & signed in!');
                                    navigation.navigate("PersonalInfo")
                                }).catch(error => {
                                    if (error.code === 'auth/email-already-in-use') {
                                      console.log('That email address is already in use!');
                                    }
                                
                                    if (error.code === 'auth/invalid-email') {
                                      console.log('That email address is invalid!');
                                    }
                                
                                    console.error(error);
                                  })
                        }
                    }


                    } />


                    <LoginButton text="Have an account? Sign in"
                        onPress={onSignInPressed} type="TERTIARY" />
                    
                    </LoginSystemCard>

                </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3E4347",
        flexDirection: "row",
    },

    title: {
        fontWeight: 'bold'
    },

    flexAdjustment: {
        flex: 30,
        top: 3,
    },

    logoTopCenter: {
        height: 100,
        width: 100,
        position: 'absolute',
        top: 55,
        justifyContent: 'center'
    },
});

export default CreateAccount;