import React, {useState} from 'react';
import { View, TextInput, Image, Text, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import initialLogo from '../../assets/images/logo-initial.png';
import LoginSystemCard from '../components/LoginSystemCard';

const UserSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onUserSignInPressed = () => navigation.navigate('Questions')
    
    const onForgotMyPasswordPressed = () => {
        console.warn('onForgotMyPasswordPressed');
    };

    const onUserSignInGoogle = () => {
        console.warn('onUserSignInGoogle');
    };

    const onUserSignInFacebook = () => {
        console.warn('onUserSignInFacebook');
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

                <CustomButton frontColor="#000000" backColor="#FFF" text="Login" onPress={onUserSignInPressed} />

                <CustomButton text="Forgot my password" textStyle= {{color:"#039BE5"}} onPress={onForgotMyPasswordPressed} type="clear" />

                <CustomButton text="Sign In with Google" onPress={onUserSignInGoogle}
                frontColor={"#FAE9EA"} backColor={"#DD4D44"} />
                <CustomButton text="Sign In with Facebook" onPress={onUserSignInFacebook}
                frontColor={"#363636"} backColor={"#e3e3e3"} />
            </LoginSystemCard>
        </View>
);
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        //flexStart: .2,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#3E4347",
        flexDirection: "row",
        //display:"flex",
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

export default UserSignIn;