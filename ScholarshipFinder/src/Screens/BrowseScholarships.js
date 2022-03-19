import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Image, Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import underlineScreen from '../../assets/images/current-tab.png';
import ScholarshipCard from '../components/ScholarshipCard';
import AccentCard from '../components/AccentCard';
import ApplyButton from '../components/CustomButton/ApplyButton';
import LikeButton from '../../assets/images/like-button.png';
import ShareButton from '../../assets/images/share-button.png';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import YellowSettingsButton from '../../assets/images/settings-gear.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import WhiteCircle from '../../assets/images/white-circle.png';


const BrowseScholarships = () => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [scholarships, setScholarships] = useState([]); // Initial empty array of scholarships

    const navigation = useNavigation();

    const onSettingsPressed = () => {
        navigation.navigate('Settings');
    };


    useEffect(() => {
        const subscriber = firestore().collection('scholarships').get().then((querySnapshot) => {
            // console.log('Total Scholarships: ', querySnapshot.size);
            const objectsArray = [];
            querySnapshot.forEach(documentSnapshot => {
                // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
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
            <Pressable hitSlop={50} onPress={onSettingsPressed}>
                <Image style={styles.settingsTopLeft} source={YellowSettingsButton} />
            </Pressable>
            <Image style={styles.scholarshipTopRight} source={scholarshipFilter} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
            <FlatList
                data={scholarships}
                renderItem={({ item }) => (
                    <><ScholarshipCard>
                        <Pressable style={styles.listItem} onPress={() => navigation.navigate('ScholarshipDetails',
                            {
                                name: item.title,
                                amount: item.amount,
                                deadline: item.deadline
                            })}>

                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.circleContainer}>
                                <View style={styles.circle}><Text style={styles.circleText}>INSERT MATCH %</Text></View>
                                <View style={styles.circle}><Text style={styles.circleText}>${item.amount}</Text></View>
                                {/* <View style={styles.circle}><Text style={styles.circleText}>Due {'\n'} {item.deadline.toDate().getMonth().toString()}/{item.deadline.toDate().getDate().toString()}</Text></View> */}
                            </View>
                            

                        </Pressable>
                    </ScholarshipCard>
                    <AccentCard>
                    <Image style={styles.like} source={LikeButton} />
                    <Image style={styles.share} source={ShareButton} />
                        <ApplyButton text="Apply!"/>
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
        justifyContent:'space-evenly'
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
        color: 'black'
    },
    info: {
        marginLeft: 5,
        color: "black"
    },


    text : {
        color: "#000",
        fontSize: 24,
        // backgroundColor : "#3E4347",
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
        top: -30, 
        left: 6,
    },

    logoTopCenter : {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        left: 175
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
        borderWidth: 5,
        borderRadius: 80/2,
        justifyContent:'center',
        backgroundColor:'white'
    },
    circleText:{
        textAlign:'center'
    }
});

export default BrowseScholarships;