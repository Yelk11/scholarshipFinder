import React, {useState} from 'react';
import { View, TouchableOpacity, Button, Modal, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from '../components/CustomButton/CustomButton';
import { ListofMajors } from '../components/ListOfMajors';

const Question3 = () => {

    const navigation = useNavigation();

    const [chooseData, setchooseData] = useState('Select your Major...');

    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }

    const onQuestion3Pressed = () => navigation.navigate('BrowseScholarships')
    
    return(
        <View style={styles.container}>
            <Text style={styles.questions}>Identify your major: (Can be changed later)</Text>
            <TouchableOpacity onPress={() => changeModalVisibility(true)}>
                <Text style={styles.dropdown}>{chooseData}</Text>
            </TouchableOpacity>
            <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisibility(false)}
            >
                <ListofMajors
                    changeModalVisibility={changeModalVisibility}
                    setData={setData}
                />

            </Modal>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Submit" onPress={onQuestion3Pressed}/>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#FFCE31",
    },

    questions : {
        color: "white",
        fontSize: 24,
        backgroundColor : "#3E4347",
        textAlign: 'center',
        width: "100%",
        padding: 20,
        // bottom:
    },

    dropdown:{
        color: "black",
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
    
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "white"
    }

})

export default Question3;