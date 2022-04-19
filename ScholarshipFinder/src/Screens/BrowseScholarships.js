import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, ActivityIndicator, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import smallLogo from '../../assets/images/app-logo-dark-background.png';
import ScholarshipCard from '../components/ScholarshipCard';
import AccentCard from '../components/AccentCard';
import ApplyButton from '../components/CustomButton/ApplyButton';
import LikeButton from '../../assets/images/like-button.png';
import ShareButton from '../../assets/images/share-button.png';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import YellowSettingsButton from '../../assets/images/settings-gear.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';



const BrowseScholarships = () => {
    const [loading, setLoading] = useState(true);
    const [scholarships, setScholarships] = useState([]);

    const navigation = useNavigation();

    const onSettingsPressed = () => {
        navigation.navigate('Settings');
    };

    const templateParams = {
        link: props.apply_url,
        email: auth().currentUser.email,
    }

    function sendEmail() {
        emailjs.send('service_xfm3dal', 'template_9piifjo', templateParams, '1iNE_5oYK6-Gs9dJS')
            .then(() => {
                Alert.alert("An email has been sent to you. Please check your inbox to begin applying!");
            })
    }
    console.log(props.apply_url);

    useEffect(() => {
        const subscriber = firestore().collection('scholarships').get().then((querySnapshot) => {
            
            const objectsArray = [];
            querySnapshot.forEach(documentSnapshot => {
                objectsArray.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                });
            });
            setScholarships(objectsArray);
            setLoading(false);
        }); return () => subscriber;
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSettingsPressed}>
                <Image style={styles.settingsTopLeft} source={YellowSettingsButton} />
            </TouchableOpacity>
            {/* <Image style={styles.scholarshipTopRight} source={scholarshipFilter} /> */}
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
            <FlatList
                data={scholarships}
                renderItem={({ item }) => (
                    <><ScholarshipCard>

                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.circleContainer}>
                                <View style={styles.circle}><Text style={styles.circleText}>INSERT MATCH %</Text></View>
                                <View style={styles.circle}><Text style={styles.circleText}>${item.amount}</Text></View>
                            </View>
                    <Text style={styles.headers}>Requirements Met</Text>
                    <Text style={styles.smallheader}>IT Major</Text>
                    <Text style={styles.smallheader}>Full Time Student</Text>
                    <Text style={styles.smallheader}>Bachelors</Text>
                    <Text style={styles.smallheader}>GPA</Text>
                    <Text style={styles.headers}>Application Guide</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} 1000 - 2000 word essay</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} “The role of technology companies in transforming the world and altering the social fabric."</Text>
                    <Text style={styles.headers}>Submission Format</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} No Log-in Required</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} Google Doc Submission</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} File Upload</Text>
                    <Text style={styles.headers}>More Information</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} Source 1</Text>
                    <Text style={styles.detailtext}>{'\u2B24'} Source 2</Text>
                    </ScholarshipCard>
                    <AccentCard>
                    {/* <Image style={styles.like} source={LikeButton} />
                    <Image style={styles.share} source={ShareButton} /> */}
                        <ApplyButton text="Apply" onPress={sendEmail}/>
                    </AccentCard></>
                )}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#474747'
    },
    circleContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingBottom: 2
    },
    listItem: {
        flex: 1,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        borderRadius: 10
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 5
    },
    info: {
        marginLeft: 5,
        color: "black"
    },
    text : {
        color: "#000",
        fontSize: 24,
        textAlign: 'left',
        width: "100%",
        padding: 20,
    },

    scholarshipTopRight : {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5, right: 10,
    },

    settingsTopLeft : {
        height: 50,
        width: 50,
        position: 'absolute',
        top: -28, 
        left: 6,
    },

    logoTopCenter : {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 5,
        left: 180
    },

    underlineTopRight : {
        height: 3,
        width: 35,
        position: 'absolute',
        top: 90, right: 6,

    },

    share: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 17.5,
        left: 200
    },
    
    like: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 19.5,
        right: 200
    },

    flexAdjustment : {
        flex: .9,
        top: 35
    },

    circle: {
        fllex: 1,
        height: 80,
        width:80,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 80/2,
        justifyContent:'center',
        backgroundColor:'white'
    },

    circleText:{
        textAlign:'center'
    },
    
    smallheader: {
        color: "black",
        fontSize: 16,
        left: 20,
        fontWeight: 'bold'
    },

    headers: {
        color: "black",
        fontSize: 20,
        left: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },

    detailtext: {
        color: "black",
        fontSize: 14,
        paddingBottom: 25,
        left: 5
    },
});

export default BrowseScholarships;