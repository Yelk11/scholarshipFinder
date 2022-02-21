import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
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
                        }) }>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.info}>Award: {item.amount}</Text>
                    </TouchableOpacity>
                )}

            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#474747'
    },
    listItem : {
        flex: 1,
        backgroundColor: 'gold',
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        borderRadius: 10
    },
    title : {
        marginLeft: 5,
        fontWeight: 'bold'
    },
    info : {
        marginLeft: 5
    }
});

export default BrowseScholarships;