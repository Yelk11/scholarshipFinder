import React, {useState} from 'react';
import { View, Button, TouchableOpacity, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import BackButton from '../../assets/images/back-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import SettingsButton from '../components/CustomButton/SettingsButton';
import LogoutButton from '../components/CustomButton/LogoutButton';
import LogoutIcon from '../../assets/images/logout-icon.png'
import SecondaryCard from '../components/SecondaryCard';
import WhiteButton from '../components/CustomButton/WhiteButton';

const EditPersonalInfo = (props) => {
    
    const navigation = useNavigation();

    const GoBack = () => navigation.navigate('Settings')

    const CloseAccountPressed = () => navigation.navigate('AccountClosed')

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={GoBack}>
            <Image style={styles.settingsTopLeft} source={BackButton} />
            </TouchableOpacity>
            <Image style={styles.scholarshipTopRight} source={scholarshipFilter} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
            <ScrollView>
            
            <SecondaryCard>
            <Text style={styles.text}>Email</Text>
            <TextInput placeholder="AsianGirls@something.com"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>Password</Text>
            <TextInput placeholder="Current Password"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <TextInput placeholder="New Password"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <TextInput placeholder="Retype New Password"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>My name is</Text>
            <TextInput placeholder="First Name"
	            placeholderTextColor="#FFFFFF"
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <TextInput placeholder="Last Name"
	            placeholderTextColor="#FFFFFF"
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>Citizenship</Text>
            <TextInput placeholder="U.S Citizen"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>Gender</Text>
            <TextInput placeholder="Male"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>I (will) attend school at</Text>
            <TextInput placeholder="Oakland University"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <Text style={styles.text}>seeking a</Text>
            <TextInput placeholder="Bachelor's Degree"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <Text style={styles.text}>with a GPA of</Text>
            <TextInput placeholder="3.6"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <WhiteButton text="Close Account" onPress={CloseAccountPressed}></WhiteButton>

            </ScrollView>
            </View>
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
        color: "black",
        fontSize: 20,
        textAlign: 'left',
        width: "100%",
        paddingBottom: 10,
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
        height: 45,
        width: 50,
        position: 'absolute',
        top: -27.5, left: 2,
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
    },

    flexAdjustment : {
        flex: .9,
        top: 35
    }
})

export default EditPersonalInfo;