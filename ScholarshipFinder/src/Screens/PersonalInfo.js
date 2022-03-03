import React, {useState} from 'react';
import { View, Button, TextInput, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import scholarshipSearch from '../../assets/images/scholarship-search-button.png';
import settingsButton from '../../assets/images/settings-button.png';
import smallLogo from '../../assets/images/small-logo.png';
import underlineScreen from '../../assets/images/current-tab.png';
import Card from '../components/Card';
import SecondaryCard from '../components/SecondaryCard';
import { ListofMajors } from '../components/ListOfMajors';
import { RaceType } from '../components/RaceType';
//import DatePicker from "react-datepicker";

const PersonalInfo = () => {

    const navigation = useNavigation();

    const onQuestionPressed = () => navigation.navigate('BrowseScholarships')
    
    const [FName, setFirstName] = useState('');
    const [LName, setLastName] = useState('');
    const [date, setDate] = useState('Date of birth');

    const [shouldShow, setShouldShow] = useState(true);

    const [shouldShow2, setShouldShow2] = useState(true);

    const [chooseData, setchooseData] = useState('Select your Major...');

    const [chooseData1, setchooseData1] = useState('Race/Ethnicity');

    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }
    
    return(
        <View style={styles.container}>
            <Image style={styles.settingsTopLeft} source={settingsButton} />
            <Image style={styles.scholarshipTopRight} source={scholarshipSearch} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <Image style={styles.underlineTopCenter} source={underlineScreen} />
            <View style={styles.flexAdjustment}>
            <ScrollView>
                {
                    shouldShow ? (
                        <Card>
                        <Text style={styles.text}> My name is</Text>
                        <SecondaryCard>
                        <TextInput placeholder="First Name"
                                   placeholderTextColor="#FFFFFF"  
                                   value = {FName}
                                   onChangeText = {text => setFirstName(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>
                        <TextInput placeholder="Last Name"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {LName}
                                   onChangeText = {text => setLastName(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>
                        </SecondaryCard>
                        </Card>
                    ) : null
                }

                {   shouldShow2 ? (
                        <Card>
                        <Text style={styles.text}>Iam a</Text>
                        <SecondaryCard>
                        <TextInput placeholder="MM/DD/YYYY"
                                   placeholderTextColor="#FFFFFF" 
                                   value = {date}
                                   onChangeText = {text => setDate(text)}
                                   style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                                   borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5}}/>
                        <Text style={styles.text}>Race/Ethnicity</Text>
                            <TouchableOpacity onPress={() => changeModalVisibility(true)}>
                                <Text style={styles.dropdown}>{chooseData1}</Text>
                            </TouchableOpacity>
                            <Modal
                                transparent={true}
                                animationType='fade'
                                visible={isModalVisible}
                                nRequestClose={() => changeModalVisibility(false)}
                            />
                        <RaceType
                            changeModalVisibility={changeModalVisibility}
                            setData={setchooseData}
                        />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={() => setShouldShow2(!shouldShow2)} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={() => setShouldShow2(!shouldShow2)} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={() => setShouldShow2(!shouldShow2)} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={() => setShouldShow2(!shouldShow2)} />
                        </SecondaryCard>
                        </Card>
                    ) : null
                }

            <Card>
            <Text style={styles.text}>Identify your major: (Can be changed later)</Text>
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
            <SecondaryCard>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Submit" onPress={onQuestionPressed}/>
            </SecondaryCard>
            </Card>
            </ScrollView>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        //flexStart: .2,
        alignItems : "center",
        justifyContent : "center",
        //backgroundColor : "#FFCE31",
    },

    flexAdjustment : {
        flex: .9,
        top: 30
    },

    text : {
        color: "black",
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#FFCE31',
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