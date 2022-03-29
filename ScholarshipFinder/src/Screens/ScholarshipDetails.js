import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import BackButton from '../../assets/images/back-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import underlineScreen from '../../assets/images/current-tab.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import DetailsCard from '../components/DetailsCard';
import infoIcon from '../../assets/images/info.png';
import AccentCard from '../components/AccentCard';
import ApplyButton from '../components/CustomButton/ApplyButton';
import LikeButton from '../../assets/images/like-button.png';
import ShareButton from '../../assets/images/share-button.png';
import emailjs from 'emailjs-com';

const ScholarshipDetails = (props) => {

    const templateParams = {
        name: 'Nick',
        link: 'https://www.usra.edu/educational-activities-and-opportunities/usra-distinguished-undergraduate-awards',
        email: 'kramenator13@gmail.com',
    }

    function sendEmail() {
        emailjs.send('service_xfm3dal', 'template_9piifjo', templateParams, '1iNE_5oYK6-Gs9dJS')
        .then(() => {
            Alert.alert("An email has been sent to you. Please check your inbox to begin applying!");   
    })
}

    const navigation = useNavigation();

    const GoBack = () => navigation.navigate('BrowseScholarships')

    return(
        <View style={styles.container}>

            <Pressable onPress={GoBack}>
            <Image style={styles.settingsTopLeft} source={BackButton} />
            </Pressable>
            {/* <Image style={styles.scholarshipTopRight} source={scholarshipSearch} /> */}
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
            <DetailsCard>
            <Image style={styles.infoLogo} source={infoIcon} />
            <Text style={styles.title}>Name {props.name}</Text>
            <Text style={styles.info}>Amount {props.amount}</Text>
            <Text style={styles.info}>Deadline: {props.deadline.toDate().toDateString()}</Text>
            <Text style={styles.headers}>Requirements Met</Text>
            <Text style={styles.smallheader}>IT Major</Text>
            <Text style={styles.smallheader}>Full Time Student</Text>
            <Text style={styles.smallheader}>Bachelors</Text>
            <Text style={styles.smallheader}>GPA</Text>
            <Text style={styles.headers}>Application Guide</Text>
            <Text style={styles.text}>{'\u2B24'} 1000 - 2000 word essay</Text>
            <Text style={styles.text}>{'\u2B24'} “The role of technology companies in transforming the world and altering the social fabric."</Text>
            <Text style={styles.headers}>Submission Format</Text>
            <Text style={styles.text}>{'\u2B24'} No Log-in Required</Text>
            <Text style={styles.text}>{'\u2B24'} Google Doc Submission</Text>
            <Text style={styles.text}>{'\u2B24'} File Upload</Text>
            <Text style={styles.headers}>More Information</Text>
            <Text style={styles.text}>{'\u2B24'} Source 1</Text>
            <Text style={styles.text}>{'\u2B24'} Source 2</Text>
            </DetailsCard>
            <AccentCard>
                    <Image style={styles.like} source={LikeButton} />
                    <Image style={styles.share} source={ShareButton} />
                        <ApplyButton text="Apply!" onPress={sendEmail}/>
                    </AccentCard> 
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor: '#474747'
    },

    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        fontSize: 16
    },

    info: {
        textAlign: 'center',
        marginLeft: 5,
        color: "black"
    },

    smallheader : {
        color: "black",
        fontSize: 16,
        right: 20,
        fontWeight: 'bold'
    },
        
    text : {
        color: "black",
        fontSize: 14,
        right: 20,
    },

    headers : {
        color: "black",
        fontSize: 20,
        right: 50,
        //width: "100%",
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: 10
    },

    scholarshipTopRight : {
        height: 40,
        width: 30,
        position: 'absolute',
        top: 5, right: 6,
    },

    settingsTopLeft : {
        height: 50,
        width: 50,
        position: 'absolute',
        top: -30, 
        left: -200,
    },

    underlineTopRight : {
        height: 3,
        width: 35,
        position: 'absolute',
        top: 50, right: 6,
    },

    logoTopCenter : {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        justif5yContent: 'center'

    },

    flexAdjustment : {
        flex: .9,
        top: 35
    },

    infoLogo: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: 4,
        right: -30
    },

    share: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 17.5,
        left: 180
    },
    
    like: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 19.5,
        right: 180
    }

})

export default ScholarshipDetails;