import React, {useState} from 'react';
import { View, Button, Text, Image, Alert, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/small-logo.png';
import underlineScreen from '../../assets/images/current-tab.png';

const ScholarshipDetails = () => {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image style={styles.underlineTopRight} source={underlineScreen} />
            <Image style={styles.settingsTopLeft} source={settingsButton} />
            <Image style={styles.scholarshipTopRight} source={scholarshipSearch} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <Text style={styles.headers}>MSI 46k Scholarship / $46,000</Text>
            <Text style={styles.headers}>Requirements</Text>
            <Text style={styles.text}>IT Major</Text>
            <Text style={styles.text}>First Time College Student</Text>
            <Text style={styles.text}>Gernman Descent</Text>
            <Text style={styles.text}>Dr. Z's Personal Chef</Text>
            <Text style={styles.headers}>Application Questions</Text>
            <Text style={styles.small}>These are the type of questions to expect when applying for this scholarship.</Text>
            <Text style={styles.text}>Tell us about yourself</Text>
            <Text style={styles.text}>Why do you deserve this scholarship?</Text>
            <Text style={styles.text}>What are your career goals?</Text>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="APPLY NOW!" onPress={() => Alert.alert("Apply Pressed")} />
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        bottom: 40
    },

    text : {
        color: "#000",
        fontSize: 16,
        textAlign: 'left',
        width: "100%",
        padding: 2,
        left: 20
        // bottom:
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
        width: 30,
        position: 'absolute',
        top: 45, right: 6,
    },

    settingsTopLeft : {
        height: 30,
        width: 50,
        position: 'absolute',
        top: 45, left: 2,
    },

    underlineTopRight : {
        height: 3,
        width: 35,
        position: 'absolute',
        top: 90, right: 6,
    },

    logoTopCenter : {
        height: 40,
        width: 50,
        position: 'absolute',
        top: 45,
        justifyContent: 'center'
    }

})

export default ScholarshipDetails;