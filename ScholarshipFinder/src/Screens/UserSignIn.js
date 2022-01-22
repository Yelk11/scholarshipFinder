import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import logo from '../../assets/images/logo-1.png';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UserSignIn = () => {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onUserSignInPressed = () => {
        console.warn('Sign in');
    };
    
    const onForgotMyPasswordPressed = () => {
        console.warn('onForgotMyPasswordPressed');
    };

    const onUserSignInGoogle = () => {
        console.warn('onUserSignInGoogle');
    };

    const onUserSignInApple = () => {
        console.warn('onUserSignInApple');
    };

    const onSignUpPressed = () => {
        console.warn('onSignUpPressed');
    };
    
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>
            <Image
                source={logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
            />
            
            <CustomInput placeholder="Username" 
            value={Username} 
            onChangeText={text => setUsername(text)}
            style={styles.input}/>

            <CustomInput placeholder="Password" 
            value={password} 
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry={true}/>

            <CustomButton text="Sign In" onPress={onUserSignInPressed} />

            <CustomButton text="Forgot my password" onPress={onForgotMyPasswordPressed} type="tertiary" />

            <CustomButton text="Sign In with Google" onPress={onUserSignInGoogle}
            frontColor={"#FAE9EA"} backColor={"#DD4D44"} />
            <CustomButton text="Sign In with Apple" onPress={onUserSignInApple}
            frontColor={"#363636"} backColor={"#e3e3e3"} />
            <CustomButton text="Don't have an account? Create account" 
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