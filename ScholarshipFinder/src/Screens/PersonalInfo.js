import React, {useState} from 'react';
import { View, Button, TextInput, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import PersonalCard from '../components/PersonalCard';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import DateTimePicker from 'react-native-modal-datetime-picker';
import { DateTimePickerProps } from 'react-native-modal-datetime-picker';


const PersonalInfo = () => {

    const navigation = useNavigation();

    const onNextPressed = () => navigation.navigate('Questions')
    
    const [FName, setFirstName] = useState('');
    const [LName, setLastName] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [race, setRace] = useState('');
    const [CitizinshipStatus, setCitizenship] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

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

    //    handlePicker = () => {
    //     this.setState({
    //         isVisible: false
    //     })};

    //  hidePicker = () => {
    //     this.setState({
    //         isVisible: false
    //     })};

    return(
        <View style={styles.container}>
            <ScrollView>

                        <PersonalCard>
                        <Text style={styles.text}>My name is</Text>
                        <TextInput placeholder="First Name"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {FName}
                                   onChangeText = {text => setFirstName(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        <TextInput placeholder="Last Name"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {LName}
                                   onChangeText = {text => setLastName(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        </PersonalCard>

                        <PersonalCard>
                        <Text style={styles.text}>Birthday</Text>
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Birthday" onPress={showDatepicker}/>
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            display="default"
                            onChange={onChange}
                            // onConfirm={this.handlePicker}
                            // onCancel={this.hidePicker}
                            />
                        )}
                        <TextInput placeholder="MM/DD/YYYY"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {date}
                                   onChangeText = {text => setDate(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        </PersonalCard>

                        <PersonalCard>
                        <Text style={styles.text}>I am a</Text>
                        <TextInput placeholder="Race / Ethnicity"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {race}
                                   onChangeText = {text => setRace(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        <TextInput placeholder="Citizenship Status"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {CitizinshipStatus}
                                   onChangeText = {text => setCitizenship(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        <TextInput placeholder="Gender"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {gender}
                                   onChangeText = {text => setGender(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        </PersonalCard>

                        <PersonalCard>
                        <Text style={styles.text}>I live in</Text>
                        <TextInput placeholder="City"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {city}
                                   onChangeText = {text => setCity(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        <TextInput placeholder="State"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {state}
                                   onChangeText = {text => setState(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        <TextInput placeholder="ZIP"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {zip}
                                   onChangeText = {text => setZip(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        <TextInput placeholder="Country"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {country}
                                   onChangeText = {text => setCountry(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
                        </PersonalCard>



            <CustomButton frontColor="#000000" backColor="#FFF" text="Next" onPress={onNextPressed}/>
            </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        backgroundColor : '#3E4347',
    },

    flexAdjustment : {
        flex: 1,
        top: 30
    },

    text : {
        color: "black",
        fontSize: 20,
        textAlign: 'left',
        marginVertical: 10
    },

    enteredText : {
        color: "#FFF"
    },

    scholarshipTopRight : {
        height: 40,
        width: 30,
        position: 'absolute',
        top: 5, right: 6,
    },

    settingsTopLeft : {
        height: 30,
        width: 50,
        position: 'absolute',
        top: 5, left: 2,
    },

    logoTopCenter : {
        height: 40,
        width: 50,
        position: 'absolute',
        top: 5,
        justifyContent: 'center'
    },

    underlineTopCenter : {
        height: 2,
        width: 40,
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
    },

    dropdown:{
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