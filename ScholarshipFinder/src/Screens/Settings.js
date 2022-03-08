import React, {useState} from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import YellowSettingsButton from '../../assets/images/yellow-settings-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import SettingsCard from '../SettingsCard';
import SettingsButton from '../components/CustomButton/SettingsButton';
import LogoutButton from '../components/CustomButton/LogoutButton';
import LogoutIcon from '../../assets/images/logout-icon.png'

const Settings = (props) => {
    
    const navigation = useNavigation();

    const GoToPersonalInfo = () => navigation.navigate('EditPersonalInfo')

    const LogoutPressed = () => navigation.navigate('Logout')

    return(
        <View style={styles.container}>
            <Image style={styles.settingsTopLeft} source={YellowSettingsButton} />
            <Image style={styles.scholarshipTopRight} source={scholarshipFilter} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <SettingsCard>
                <Text style={styles.headertext}>Welcome Back!</Text>
                <Text style={styles.text}>AsianGirls</Text>
                <SettingsButton text="Profile" onPress={GoToPersonalInfo}></SettingsButton>
                <SettingsButton text="Scholarship Feed"></SettingsButton>
                <SettingsButton text="Post A Scholarship"></SettingsButton>
                <SettingsButton text="FAQs"></SettingsButton>
                <SettingsButton text="App Review"></SettingsButton>
                <LogoutButton text="Logout" onPress={LogoutPressed}></LogoutButton>
                <Image style={styles.logout} source={LogoutIcon}/>
            </SettingsCard>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        backgroundColor: '#3E4347',
    },

    title:{
        fontWeight: 'bold',
        textAlign: 'center'
    },
        
    headertext : {
        color: "#FFF",
        fontSize: 24,
        textAlign: 'center',
        width: "100%",
        fontWeight: 'bold',
    },

    text : {
        color: "#FFF",
        fontSize: 20,
        textAlign: 'center',
        width: "100%",
        paddingBottom: 15,
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
    },

    scholarshipTopRight : {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 5, right: 10,
    },

    settingsTopLeft : {
        height: 30,
        width: 50,
        position: 'absolute',
        top: 5, left: 2,
    },

    logoTopCenter : {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 5,
        left: 180,

    },

    logout : {
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: 2.5,
        left: 80
    }
})

export default Settings;