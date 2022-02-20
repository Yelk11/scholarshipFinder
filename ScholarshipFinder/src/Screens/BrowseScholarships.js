import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
const BrowseScholarships = () => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [scholarships, setScholarships] = useState([]); // Initial empty array of scholarships

    const navigation = useNavigation();

    const onScholarshipPressed = () => navigation.navigate('ScholarshipDetails')




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
            console.log(scholarships)
        });
        return () => subscriber();
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <FlatList

            data={scholarships}
            renderItem={({ item }) => (
                <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>User ID: {item.title}</Text>

                </View>
            )}
        />
    );
};



export default BrowseScholarships;