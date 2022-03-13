import React, { useState } from 'react';
import { View, Button, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/small-logo.png';
import underlineScreen from '../../assets/images/current-tab.png';
import Card from '../components/Card';
import SecondaryCard from '../components/SecondaryCard';
import { ListofMajors } from '../components/ListOfMajors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Questions = () => {

    const navigation = useNavigation();

    const onQuestionPressed = () => navigation.navigate('BrowseScholarships')

    const [shouldShow, setShouldShow] = useState(true);

    const [shouldShow2, setShouldShow2] = useState(true);

    const [chooseData, setchooseData] = useState('Select your Major...');

    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }
    const storeValue = async (name, value) => {
        try {

            await AsyncStorage.setItem(name, value)
        } catch (e) {
            alert('Save failed');
        }
    }
    
    return (
        <View style={styles.container}>

            <ScrollView>
                {
                    shouldShow ? (
                        <SecondaryCard>

                            <Text style={styles.text}>Are you a first time college student in your family?</Text>


                            <CustomButton frontColor="#000000" backColor="#6FE7C3" text="Yes" onPress={() => {
                                setShouldShow(!shouldShow)
                                firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        first_college_student: true
                                    },{merge:true})
                                
                            }} />
                            <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                                setShouldShow(!shouldShow)
                                firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        first_college_student: false
                                    },{merge:true})
                            }} />

                        </SecondaryCard>
                    ) : null
                }

                {shouldShow2 ? (
                    <SecondaryCard>

                        <Text style={styles.text}>What year of college are you in?</Text>


                        <CustomButton frontColor="#000000" backColor="#FFF" text="Incoming College Student" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        college_year: 'incoming'
                                    },{merge:true})
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Freshman" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        college_year: 'freshman'
                                    },{merge:true})
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        college_year: 'sophomore'
                                    },{merge:true})
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        college_year: 'junior'
                                    },{merge:true})

                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        college_year: 'senior'
                                    },{merge:true})
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            firestore()
                                    .collection('user_info')
                                    .doc(auth().currentUser.uid)
                                    .set({
                                        college_year: 'other'
                                    },{merge:true})
                        }} />

                    </SecondaryCard>
                ) : null
                }

                <SecondaryCard>
                    <Text style={styles.text}>Identify your major:</Text>
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
                </SecondaryCard>

                <SecondaryCard>
                    <Text style={styles.text}>I (will) attend school at</Text>
                    <TextInput placeholder="College/University"
                        placeholderTextColor="#FFFFFF"
                        //value = {FName}
                        //onChangeText = {text => setFirstName(text)}
                        style={{
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <Text style={styles.text}>seeking a</Text>
                    <TextInput placeholder="Degree"
                        placeholderTextColor="#FFFFFF"
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style={{
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <Text style={styles.text}>with a GPA of</Text>
                    <TextInput placeholder="GPA"
                        placeholderTextColor="#FFFFFF"
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style={{
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                </SecondaryCard>
                <CustomButton frontColor="#000000" backColor="#FFF" text="Submit" onPress={onQuestionPressed} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#3E4347",
    },

    flexAdjustment: {
        flex: .9,
        top: 30
    },

    text: {
        color: "black",
        fontSize: 16,
        textAlign: 'center',
    },

    scholarshipTopRight: {
        height: 40,
        width: 30,
        position: 'absolute',
        top: 5, right: 6,
    },

    settingsTopLeft: {
        height: 30,
        width: 50,
        position: 'absolute',
        top: 5, left: 2,
    },

    logoTopCenter: {
        height: 40,
        width: 50,
        position: 'absolute',
        top: 5,
        justifyContent: 'center'
    },

    underlineTopCenter: {
        height: 2,
        width: 40,
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
    },

    dropdown: {
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

export default Questions;