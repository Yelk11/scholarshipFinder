import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
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
        }); return () => subscriber;
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <SafeAreaView >
            <FlatList
                data={scholarships}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ScholarshipDetails',
                        {
                            name: item.title,
                            amount: item.amount,
                            deadline: item.deadline
                        })}>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text>Award: {item.amount}</Text>
                    </TouchableOpacity>
                )}

            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'powderblue',
        borderColor: 'black'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default BrowseScholarships;