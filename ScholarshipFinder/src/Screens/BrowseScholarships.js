import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, FlatList, Text, ActivityIndicator, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
const BrowseScholarships = () => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [scholarships, setScholarships] = useState([]); // Initial empty array of scholarships

    const navigation = useNavigation();

    const onScholarshipPressed = () => navigation.navigate('ScholarshipDetails')




    firestore().collection('scholarships').get().then((querySnapshot) => {
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
    });
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <SafeAreaView >
            <FlatList
                data={scholarships}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={onScholarshipPressed}>
                        
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>Award: {item.amount}</Text>
                    </TouchableOpacity>
                    // <View style={styles.container}>
                    //     <Text style={styles.title}>{item.title}</Text>
                    //     <Text>Award: {item.amount}</Text>

                    // </View>
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