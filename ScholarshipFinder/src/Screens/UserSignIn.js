import React, {useState} from 'react';
import { View, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import logo from '../../assets/images/logo-1.png';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UserSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    
    
    
    const onUserSignInPressed = () => navigation.navigate("Questions")
    
    const onForgotMyPasswordPressed = () => {
        console.warn('onForgotMyPasswordPressed');
    };

    const onUserSignInGoogle = () => {
        console.warn('onUserSignInGoogle');
    };

    const onUserSignInFacebook = () => {
        console.warn('onUserSignInFacebook');
    };

    const onSignUpPressed = () => navigation.navigate('CreateAccount')
    
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>
            <Image
                source={logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />
            
            <TextInput placeholder="Email" 
            value = {email}
            onChangeText = {text => setEmail(text)}
            style = { {backgroundColor :'White',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>

           <TextInput placeholder="Password" 
            value = {password}
            onChangeText = {text => setPassword(text)}
            secureTextEntry={true}
            style = { {backgroundColor :'White',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>

            <CustomButton text="Sign In" onPress={onUserSignInPressed} />

            <CustomButton text="Forgot my password" onPress={onForgotMyPasswordPressed} type="tertiary" />

            <CustomButton text="Sign In with Google" onPress={onUserSignInGoogle}
            frontColor={"#FAE9EA"} backColor={"#DD4D44"} />
            <CustomButton text="Sign In with Facebook" onPress={onUserSignInFacebook}
            frontColor={"#363636"} backColor={"#e3e3e3"} />
            <CustomButton text="Don't have an account? Create new account" 
            onPress={onSignUpPressed} type="tertiary" />
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width:'65%',
        maxHeight:200,
        maxWidth:150,
    },
});

export default UserSignIn;