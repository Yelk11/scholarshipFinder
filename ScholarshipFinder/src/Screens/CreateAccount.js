import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, setValue, onChangeText, TextInput, Image } from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import initialLogo from '../../assets/images/logo-initial.png';
import LoginSystemCard from '../components/LoginSystemCard';
import LoginButton from '../components/CustomButton/LoginButton';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onSignUpPressed = () => { 
        navigation.navigate('SuccessfullAccount');
    };

    const onUserSignupGoogle = () => {
        console.warn('onUserSignupGoogle');
    };
  
      const onUserSignupFacebook = () => {
        console.warn('onUserSignupFacebook');
    };
    
    return(

        <View style={styles.container}>
            <Image style={styles.logoTopCenter} source={initialLogo} />
            <LoginSystemCard>
                <TextInput placeholder="Email"
                           placeholderTextColor="#FFFFFF" 
                           value = {email}
                           onChangeText = {text => setEmail(text)}
                           style = { {backgroundColor :'#596066',
                           width: '100%',
                           borderColor: '#e8e8e8',
                           borderWidth: 0.3, borderRadius: 3, paddingHorizontal: 6, marginVertical: 5}}/>

                <TextInput placeholder="Password"
                           placeholderTextColor="#FFFFFF" 
                           value = {password}
                           onChangeText = {text => setPassword(text)}
                           secureTextEntry={true}
                           style = { {backgroundColor :'#596066',
                           width: '100%',
                           borderColor: '#e8e8e8',
                           borderWidth: 0.3, borderRadius: 3, paddingHorizontal: 6, marginVertical: 2}}/>

                <TextInput placeholder=" Confirm Password"
                           placeholderTextColor="#FFFFFF" 
                           value = {ConfirmPassword}
                           onChangeText = {text => setConfirmPassword(text)}
                           secureTextEntry={true}
                           style = { {backgroundColor :'#596066',
                           width: '100%',
                           borderColor: '#e8e8e8',
                           borderWidth: 0.3, borderRadius: 3, paddingHorizontal: 6, marginVertical: 2}}/>           

                <LoginButton frontColor="#000000" backColor="#FFF" text="Sign Up" onPress={onSignUpPressed} />

                <LoginButton text="Sign Up with Google" onPress={onUserSignupGoogle}
                frontColor={"#FAE9EA"} backColor={"#DD4D44"} />
                <LoginButton text="Sign Up with Facebook" onPress={onUserSignupFacebook}
                frontColor={"#FAE9EA"} backColor={"#4267B2"} />
            </LoginSystemCard>

    <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>

            <Text style= {styles.title}> Create an account</Text>

            <TextInput placeholder="Email" 
            value = {email}
            onChangeText = {text => setEmail(text)}
            style = { {backgroundColor :'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>

            <TextInput placeholder="Password" 
            value = {password}
            onChangeText = {text => setPassword(text)}
            secureTextEntry={true}
            style = { {backgroundColor :'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>

            <TextInput placeholder="Confirm Password" 
            value = {ConfirmPassword}
            onChangeText = {text => setConfirmPassword(text)}
            secureTextEntry={true}
            style = { {backgroundColor :'white',
            width: '100%',
            borderColor: '#e8e8e8',
            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>     

            <CustomButton text="Register" onPress={() => navigation.navigate("Questions")} />


            <CustomButton text="Sign up with Google" onPress={onUserSignupGoogle}
            frontColor={"#FAE9EA"} backColor={"#DD4D44"} />
            <CustomButton text="Sign up with Facebook" onPress={onUserSignupFacebook}
            frontColor={"#363636"} backColor={"#e3e3e3"} />

            <CustomButton text="Have an account? Sign in" 
            onPress={onSignInPressed} type="TERTIARY" />

        </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#3E4347",
        flexDirection: "row",
    },

    flexAdjustment : {
        flex: 30,
        top: 3,
    },

    logoTopCenter : {
        height: 100,
        width: 100,
        position: 'absolute',
        top: 55,
        justifyContent: 'center'
    },
});

export default CreateAccount;