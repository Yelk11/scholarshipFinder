import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, setValue, onChangeText, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onRegisterPressed = () => { 
        navigation.navigate('ConfirmationEmail');
    };

    const onSignInPressed = () => {
        navigation.navigate('UserSignIn');
    };

    const OnTermsOFUsePressed = () => {
        console.warn('OnTermsOFUsePressed');
    };

    const OnPrivacyPressed = () => {
        console.warn('OnPrivacyPressed');
    };

    const onUserSignupGoogle = () => {
        console.warn('onUserSignupGoogle');
    };
  
      const onUserSignupFacebook = () => {
        console.warn('onUserSignupFacebook');
    };
    
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style ={styles.root}>

            <Text style= {styles.title}> Create an account</Text>

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

            <TextInput placeholder="Confirm Password" 
            value = {ConfirmPassword}
            onChangeText = {text => setConfirmPassword(text)}
            secureTextEntry={true}
            style = { {backgroundColor :'White',
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
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        flex: 1,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e3c56',
        margin:10,
    },
    text: { color: 'gray',
    marginVertical: 10,},
    link: {color: '#FDB075', },
});

export default CreateAccount;