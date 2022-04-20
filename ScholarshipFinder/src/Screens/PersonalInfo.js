import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet, useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import PersonalCard from '../components/PersonalCard';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {isValidObjField, updateError} from '../components/CustomInput/methods';

const PersonalInfo = () => {

    const navigation = useNavigation();

    const onNextPressed = () => {
        firestore()
            .collection('user_info')
            .doc(auth().currentUser.uid)
            .set({
                first_name: FName,
                last_name: LName,
                race: race,
                citizenship_status: CitizinshipStatus,
                gender: gender,
            }, { merge: true })
        if (isValidForm()) {
            // submit form
            console.log(FName, LName);
            navigation.navigate('Questions')
          }
    }

    const [error, setError] = useState('');

    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim())
    };
    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
        stateUpdater('');
        }, 5000);
    };
    const [FName, setFirstName] = useState('');
    const [LName, setLastName] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [race, setRace] = useState('');
    const [CitizinshipStatus, setCitizenship] = useState('');
    const [gender, setGender] = useState('');
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const isValidForm = () => {
        // we will accept only if all of the fields have value
        if (!isValidObjField(LName, FName))
          return updateError('Required first name and last name', setError);

        if (!FName.trim() || FName.length < 3)
          return updateError('Invalid first name!', setError);

        if (!LName.trim() || LName.length < 3)
          return updateError('Invalid last name!', setError);
        return true;
      };

    return (
        <View style={styles.container}>
            <ScrollView>

                <PersonalCard>
                    <Text style={styles.text}>My name is</Text>
                    {error ? (
                        <Text style={{color: 'red', fontSize: 16, textAlign:'center'}}>
                            {error}
                        </Text>
                    ) :null}

                    <TextInput placeholder="First Name"
                        placeholderTextColor="#FFFFFF"
                        value={FName}
                        onChangeText={text => setFirstName(text)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <TextInput placeholder="Last Name"
                        placeholderTextColor="#FFFFFF"
                        value={LName}
                        onChangeText={text => setLastName(text)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                </PersonalCard>

                <PersonalCard>
                    <Text style={styles.text}>Birthday</Text>
                    <TextInput placeholder="MM/DD/YYYY"
                        placeholderTextColor="#FFFFFF"
                        value={date}
                        onChangeText={text => setDate(text)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                </PersonalCard>

                <PersonalCard>
                    <Text style={styles.text}>I am a</Text>
                    <TextInput placeholder="Race / Ethnicity"
                        placeholderTextColor="#FFFFFF"
                        value={race}
                        onChangeText={text => setRace(text)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <TextInput placeholder="Citizenship Status"
                        placeholderTextColor="#FFFFFF"
                        value={CitizinshipStatus}
                        onChangeText={text => setCitizenship(text)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <TextInput placeholder="Gender"
                        placeholderTextColor="#FFFFFF"
                        value={gender}
                        onChangeText={text => setGender(text)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                </PersonalCard>




                <CustomButton frontColor="#000000" backColor="#FFF" text="Next" onPress={onNextPressed} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#3E4347',
    },

    flexAdjustment: {
        flex: 1,
        top: 30
    },

    text: {
        color: "black",
        fontSize: 20,
        textAlign: 'left',
        marginVertical: 10,
        fontWeight: 'bold'
    },

    enteredText: {
        color: "#FFF"
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
        fontSize: 18,
        textAlign: 'center',
        width: '100%',
        padding: 8,
        marginVertical: 3,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#596066"
    }

})

export default PersonalInfo;