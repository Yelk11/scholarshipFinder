import React, {useState} from 'react';
import { View, Button, TextInput, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import PersonalCard from '../components/PersonalCard';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import BackButton from '../../assets/images/back-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import WhiteButton from '../components/CustomButton/WhiteButton';


const PostScholarship = () => {

    const navigation = useNavigation();

    const GoBack = () => navigation.navigate('Settings')

    const onSubmitPressed = () => navigation.navigate('ScholarshipSubmitted')

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={GoBack}>
            <Image style={styles.settingsTopLeft} source={BackButton} />
            </TouchableOpacity>
            {/* <Image style={styles.scholarshipTopRight} source={scholarshipFilter} /> */}
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
            <ScrollView>

                        <PersonalCard>
                        <Text style={styles.text}>Scholarship Link</Text>
                        <TextInput placeholder="insert scholarship link here"
                                   placeholderTextColor="#FFFFFF"
                                   multiline
                                   numberOfLines={8}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', fontWeight: 'bold', 
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        </PersonalCard>

            <WhiteButton frontColor="#000000" backColor="#FFF" text="Submit For Review" onPress={onSubmitPressed}/>
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
        fontWeight: 'bold'
    },

    headers : {
        color: "#000",
        fontSize: 24,
        textAlign: 'left',
        width: "100%",
        padding: 10,
        textDecorationLine: 'underline'

    },

    small : {
        color: "#000",
        fontSize: 14,
        textAlign: 'left',
        width: "100%",
        padding: 2,
    },

    scholarshipTopRight : {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 5, right: 10,
    },

    settingsTopLeft : {
        height: 50,
        width: 50,
        position: 'absolute',
        top: -30, left: 2,
    },

    logoTopCenter : {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 5,
        left: 180,

    },

    flexAdjustment : {
        flex: .9,
        top: 35
    },

})

export default PostScholarship;