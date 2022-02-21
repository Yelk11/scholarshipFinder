import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/small-logo.png';
import underlineScreen from '../../assets/images/current-tab.png';

const ScholarshipDetails = (props) => {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            

            <Image style={styles.underlineTopRight} source={underlineScreen} />
            <Image style={styles.settingsTopLeft} source={settingsButton} />
            <Image style={styles.scholarshipTopRight} source={scholarshipSearch} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
              <Text style={styles.title}>Name {props.name}</Text>
            <Text style={styles.info}>Amount {props.amount}</Text>
            <Text style={styles.info}>Deadline: {props.deadline.toDate().toDateString()}</Text>

        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },

    title:{
        fontWeight: 'bold',
        textAlign: 'center'
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