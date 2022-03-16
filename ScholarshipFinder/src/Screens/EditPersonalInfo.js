import React, {useState} from 'react';
import { View, Button, TouchableOpacity, Modal, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import BackButton from '../../assets/images/back-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import SettingsButton from '../components/CustomButton/SettingsButton';
import LogoutButton from '../components/CustomButton/LogoutButton';
import LogoutIcon from '../../assets/images/logout-icon.png'
import SecondaryCard from '../components/SecondaryCard';
import WhiteButton from '../components/CustomButton/WhiteButton';
import CustomButton from '../components/CustomButton/CustomButton';
import { ListofMajors } from '../components/ListOfMajors';

const EditPersonalInfo = (props) => {
    
    const navigation = useNavigation();

    const GoBack = () => navigation.navigate('Settings')

    const CloseAccountPressed = () => navigation.navigate('AccountClosed')

    const onQuestionPressed = () => navigation.navigate('BrowseScholarships')

    const [shouldShow, setShouldShow] = useState(true);

    const [shouldShow2, setShouldShow2] = useState(true);

    const [shouldShow3, setShouldShow3] = useState(true);

    const [shouldShow4, setShouldShow4] = useState(true);

    const [shouldShow5, setShouldShow5] = useState(true);

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
            <TouchableOpacity onPress={GoBack}>
            <Image style={styles.settingsTopLeft} source={BackButton} />
            </TouchableOpacity>
            <Image style={styles.scholarshipTopRight} source={scholarshipFilter} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
            <ScrollView>
            
            <SecondaryCard>
            <Text style={styles.text}>Email</Text>
            <TextInput placeholder="Mbrown@something.com"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>Password</Text>
            <TextInput placeholder="Current Password"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <TextInput placeholder="New Password"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <TextInput placeholder="Retype New Password"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>My name is</Text>
            <TextInput placeholder="First Name"
	            placeholderTextColor="#FFFFFF"
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <TextInput placeholder="Last Name"
	            placeholderTextColor="#FFFFFF"
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>Citizenship</Text>
            <TextInput placeholder="U.S Citizen"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
            <Text style={styles.text}>Gender</Text>
            <TextInput placeholder="Male"
	            placeholderTextColor="#FFFFFF" 
	            style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
	            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>

            <SecondaryCard>
                    <Text style={styles.text}>Do you have any athletic interests or participation?</Text>
                    <Text style={styles.text}>Sport 1</Text>
                    <TextInput placeholder="Enter a sport here (leave blank if none)"
                        placeholderTextColor="#FFFFFF"
                        //value = {FName}
                        //onChangeText = {text => setFirstName(text)}
                        style={{
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <Text style={styles.text}>Sport 2</Text>
                    <TextInput placeholder="Enter a sport here (leave blank if none)"
                        placeholderTextColor="#FFFFFF"
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style={{
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                    <Text style={styles.text}>Sport 3</Text>
                    <TextInput placeholder="Enter a sport here (leave blank if none)"
                        placeholderTextColor="#FFFFFF"
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style={{
                            backgroundColor: '#596066', borderColor: '#e8e8e8',
                            borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                        }} />
                </SecondaryCard>

                {
                    shouldShow3 ? (
                        <SecondaryCard>

                            <Text style={styles.text}>Are you affiliated with the military?</Text>


                            <CustomButton frontColor="#000000" backColor="#6FE7C3" text="Yes" onPress={() => {
                                setShouldShow3(!shouldShow3)       
                            }} />
                            <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                                setShouldShow3(!shouldShow3)
                            }} />

                        </SecondaryCard>
                    ) : null
                }

                    {shouldShow4 ? (
                    <SecondaryCard>

                        <Text style={styles.text}>Enter your income level</Text>


                        <CustomButton frontColor="#000000" backColor="#FFF" text="Low" onPress={() => {
                            setShouldShow4(!shouldShow4)
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Low-Middle" onPress={() => {
                            setShouldShow4(!shouldShow4)
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Middle" onPress={() => {
                            setShouldShow4(!shouldShow4)
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Middle-High" onPress={() => {
                            setShouldShow4(!shouldShow4)
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="High" onPress={() => {
                            setShouldShow4(!shouldShow4)
                        }} />

                    </SecondaryCard>
                ) : null
                }

                            {
                    shouldShow ? (
                        <SecondaryCard>

                        <Text style={styles.text}>Are you a first time college student in your family?</Text>


                        <CustomButton frontColor="#000000" backColor="#6FE7C3" text="Yes" onPress={() => {
                            setShouldShow(!shouldShow)
                            try {
                                //await AsyncStorage.setItem('@first_college_student', true)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                            setShouldShow(!shouldShow)
                            try {
                                //await AsyncStorage.setItem('@first_college_student', false)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />

                        </SecondaryCard>
                    ) : null
                }

                {   shouldShow2 ? (
                        <SecondaryCard>

                        <Text style={styles.text}>What year of college are you in?</Text>


                        <CustomButton frontColor="#000000" backColor="#FFF" text="Incoming College Student" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                //await AsyncStorage.setItem('@college_year', 0)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Freshman" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                //await AsyncStorage.setItem('@college_year', 1)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                //await AsyncStorage.setItem('@college_year', 2)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                //await AsyncStorage.setItem('@college_year', 3)
                              } catch (e) {
                                alert('Save failed');
                              }
                        
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                //await AsyncStorage.setItem('@college_year', 4)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            try {
                                //await AsyncStorage.setItem('@college_year', 5)
                              } catch (e) {
                                alert('Save failed');
                              }
                        }} />

                        </SecondaryCard>
                    ) : null
                }

{
                    shouldShow5 ? (
                        <SecondaryCard>

                            <Text style={styles.text}>Do you attend Full-Time or Part-Time?</Text>


                            <CustomButton frontColor="#000000" backColor="#FFF" text="Full-Time" onPress={() => {
                                setShouldShow5(!shouldShow5)       
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Part-Time" onPress={() => {
                                setShouldShow5(!shouldShow5)
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Undecided" onPress={() => {
                                setShouldShow5(!shouldShow5)
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
                        style = { {backgroundColor :'#596066', borderColor: '#e8e8e8', 
                        borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <Text style={styles.text}>seeking a</Text>
            <TextInput placeholder="Degree"
                        placeholderTextColor="#FFFFFF" 
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                        borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            <Text style={styles.text}>with a GPA of</Text>
            <TextInput placeholder="GPA"
                        placeholderTextColor="#FFFFFF" 
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style = { {backgroundColor :'#596066', borderColor: '#e8e8e8',
                        borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"}}/>
            </SecondaryCard>
            <CustomButton frontColor="#000000" backColor="#FFF" text="Save Changes" onPress={onQuestionPressed}/>

            <WhiteButton text="Close Account" onPress={CloseAccountPressed}></WhiteButton>

            </ScrollView>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        backgroundColor: '#3E4347',
    },

    title:{
        fontWeight: 'bold',
        textAlign: 'center'
    },
        
    headertext : {
        color: "#FFF",
        fontSize: 24,
        textAlign: 'center',
        width: "100%",
        fontWeight: 'bold',
    },

    text : {
        color: "black",
        fontSize: 20,
        textAlign: 'left',
        width: "100%",
        paddingBottom: 10,
    },

    headers : {
        color: "#000",
        fontSize: 24,
        textAlign: 'left',
        width: "100%",
        padding: 10,
        textDecorationLine: 'underline'

    },

    small : {
        color: "#000",
        fontSize: 14,
        textAlign: 'left',
        width: "100%",
        padding: 2,
    },

    scholarshipTopRight : {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 5, right: 10,
    },

    settingsTopLeft : {
        height: 45,
        width: 50,
        position: 'absolute',
        top: -27.5, left: 2,
    },

    logoTopCenter : {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 5,
        left: 180,

    },

    logout : {
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: 2.5,
        left: 80
    },

    flexAdjustment : {
        flex: .9,
        top: 35
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

export default EditPersonalInfo;