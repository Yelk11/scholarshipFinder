import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/small-logo.png';
import underlineScreen from '../../assets/images/current-tab.png';

const BrowseScholarships = () => {

    const navigation = useNavigation();

    const onScholarshipPressed = () => navigation.navigate('ScholarshipDetails')
    
    return(
        <View style={styles.container}>
            <Image style={styles.underlineTopRight} source={underlineScreen} />
            <Image style={styles.settingsTopLeft} source={settingsButton} />
            <Image style={styles.scholarshipTopRight} source={scholarshipSearch} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <Text style={styles.text}>Choose from these availale scholarships recommended to you based on your answers!</Text>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="MSI 46k Scholarship / $46,000" onPress={onScholarshipPressed}/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Melinda and Bill Gates Scholarship Foundation / $6,000" onPress={onScholarshipPressed}/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Founders in Technology / $10,000" onPress={onScholarshipPressed}/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="OU Relatives and Graduates / $2,000" onPress={onScholarshipPressed}/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Women in Engineering / $3,000" onPress={onScholarshipPressed}/>
            <CustomButton frontColor="#FFFFFF" backColor="#000" text="Dr. Z's very own personal funding! / $999,999,999,999.99" onPress={onScholarshipPressed}/>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        // backgroundColor : "#FFCE31"
        bottom: 40
    },

    text : {
        color: "#000",
        fontSize: 24,
        // backgroundColor : "#3E4347",
        textAlign: 'left',
        width: "100%",
        padding: 20,
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

    logoTopCenter : {
        height: 40,
        width: 50,
        position: 'absolute',
        top: 45,
        justifyContent: 'center'
    },

    underlineTopRight : {
        height: 3,
        width: 35,
        position: 'absolute',
        top: 90, right: 6,
    }

})

export default BrowseScholarships;