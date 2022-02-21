import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/small-logo.png';
import underlineScreen from '../../assets/images/current-tab.png';


const BrowseScholarships = () => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [scholarships, setScholarships] = useState([]); // Initial empty array of scholarships

    const navigation = useNavigation();


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
        <SafeAreaView style={styles.container}>
            <FlatList
                data={scholarships}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('ScholarshipDetails',
                        {
                            name: item.title,
                            amount: item.amount,
                            deadline: item.deadline
                        })}>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.info}>Award: {item.amount}</Text>
                    </TouchableOpacity>
                )}

            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#474747'
    },

    listItem: {
        flex: 1,
        backgroundColor: 'gold',
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        borderRadius: 10
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold'
    },
    info: {
        marginLeft: 5
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
});

export default BrowseScholarships;