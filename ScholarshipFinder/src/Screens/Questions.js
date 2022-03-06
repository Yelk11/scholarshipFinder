import React, {useState} from 'react';
import { View, Button, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
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
                        <Text style={styles.text}>Are you a first time college student in your family? (Can be changed later)</Text>
                        <SecondaryCard>
                        <CustomButton frontColor="#000000" backColor="#6FE7C3" text="Yes" onPress={() => {
                            setShouldShow(!shouldShow)
                            try {
                                await AsyncStorage.setItem('@first_college_student', true)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                            setShouldShow(!shouldShow)
                            try {
                                await AsyncStorage.setItem('@first_college_student', false)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        </SecondaryCard>
                        </Card>
                    ) : null
                }

                {   shouldShow2 ? (
                        <Card>
                        <Text style={styles.text}>What year of college are you in? (Can be changed later)</Text>
                        <SecondaryCard>
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Incoming College Student" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                await AsyncStorage.setItem('@college_year', 0)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Freshman" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                await AsyncStorage.setItem('@college_year', 1)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                await AsyncStorage.setItem('@college_year', 2)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                await AsyncStorage.setItem('@college_year', 3)
                              } catch (e) {
                                alert('Save failed');
                              }
                        
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                await AsyncStorage.setItem('@college_year', 4)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                await AsyncStorage.setItem('@college_year', 5)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
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
        color: "white",
        fontSize: 20,
        textAlign: 'center',
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