import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import SecondaryCard from '../components/SecondaryCard';
import { ListofMajors } from '../components/ListOfMajors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Questions = () => {

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        firestore()
            .collection('user_info')
            .doc(auth().currentUser.uid)
            .set({
                college_year: 'sophomore'
            }, { merge: true })
        navigation.navigate('SuccessfullAccount')
    }

    const [shouldShow, setShouldShow] = useState(true);

    const [shouldShow2, setShouldShow2] = useState(true);

    const [shouldShow3, setShouldShow3] = useState(true);

    const [shouldShow4, setShouldShow4] = useState(true);

    const [shouldShow5, setShouldShow5] = useState(true);


    const [isModalVisible, setisModalVisible] = useState(false);

    const ref = firestore().collection('user_info').doc(auth().currentUser.uid)
    const [highSchool, setHighSchol] = useState();
    const [satMath, setSatMath] = useState();
    const [satEBRW, setSatEBRW] = useState();
    const [act, setAct] = useState();
    // const [sport, setSport] = useState([]);
    const [military, setMilitary] = useState();
    const [incomeLevel, setIncomeLevel] = useState();
    const [firstCollegeStudent, setFirstCollegeStudent] = useState();
    const [classStanding, setClassStanding] = useState();
    const [enrollmentStatus, setEnrollmentStatus] = useState();
    const [major, setMajor] = useState();
    const [college, setCollege] = useState();
    const [degree, setDegree] = useState();
    const [gpa, setGpa] = useState();

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }



    return (
        <View style={styles.container}>

            <ScrollView>
                <SecondaryCard>
                    <Text style={styles.text}>I attended high school at</Text>
                    <TextInput placeholder="High School"
                        placeholderTextColor="#FFFFFF"
                        value={highSchool}
                        onChangeText={text => setHighSchool(text)}
                        style={styles.inputBox}
                    />

                </SecondaryCard>
                <SecondaryCard>
                    <Text style={styles.text}>SAT Math Score</Text>
                    <TextInput placeholder="200 - 800"
                        placeholderTextColor="#FFFFFF"
                        value={satMath}
                        onChangeText={text => setSatMath(text)}
                        style={styles.inputBox}/>
                    <Text style={styles.text}>SAT Evidence-Based Reading and Writing Score</Text>
                    <TextInput placeholder="200 - 800"
                        placeholderTextColor="#FFFFFF"
                        value={satEBRW}
                        onChangeText={text => setSatEBRW(text)}
                        style={styles.inputBox} />
                    <Text style={styles.text}>ACT Score</Text>
                    <TextInput placeholder="1 - 36"
                        placeholderTextColor="#FFFFFF"
                        value={act}
                        onChangeText={text => setAct(text)}
                        style={styles.inputBox} />
                </SecondaryCard>
                <SecondaryCard>
                    <Text style={styles.text}>Do you have any athletic interests or participation?</Text>
                    <Text style={styles.text}>Sport 1</Text>
                    <TextInput placeholder="Enter a sport here (leave blank if none)"
                        placeholderTextColor="#FFFFFF"
                        //value = {FName}
                        //onChangeText = {text => setFirstName(text)}
                        style={styles.inputBox} />
                    <Text style={styles.text}>Sport 2</Text>
                    <TextInput placeholder="Enter a sport here (leave blank if none)"
                        placeholderTextColor="#FFFFFF"
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style={styles.inputBox} />
                    <Text style={styles.text}>Sport 3</Text>
                    <TextInput placeholder="Enter a sport here (leave blank if none)"
                        placeholderTextColor="#FFFFFF"
                        //value = {LName}
                        //onChangeText = {text => setLastName(text)}
                        style={styles.inputBox}/>
                </SecondaryCard>

                {
                    shouldShow3 ? (
                        <SecondaryCard>

                            <Text style={styles.text}>Are you affiliated with the military?</Text>


                            <CustomButton frontColor="#000000" backColor="#6FE7C3" text="Yes" onPress={() => {
                                setShouldShow3(!shouldShow3)
                                setMilitary(true)
                            }} />
                            <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                                setShouldShow3(!shouldShow3)
                                setMilitary(false)
                            }} />

                        </SecondaryCard>
                    ) : null
                }

                {shouldShow4 ? (
                    <SecondaryCard>

                        <Text style={styles.text}>Select your income level</Text>


                        <CustomButton frontColor="#000000" backColor="#FFF" text="Low" onPress={() => {
                            setShouldShow4(!shouldShow4)
                            setIncomeLevel('low')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Low-Middle" onPress={() => {
                            setShouldShow4(!shouldShow4)
                            setIncomeLevel('low-middle')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Middle" onPress={() => {
                            setShouldShow4(!shouldShow4)
                            setIncomeLevel('middle')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Middle-High" onPress={() => {
                            setShouldShow4(!shouldShow4)
                            setIncomeLevel('middle-high')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="High" onPress={() => {
                            setShouldShow4(!shouldShow4)
                            setIncomeLevel('high')
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
                                setFirstCollegeStudent(true)
                            }} />
                            <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                                setShouldShow(!shouldShow)
                                setFirstCollegeStudent(false)
                            }} />

                        </SecondaryCard>
                    ) : null
                }

                {shouldShow2 ? (
                    <SecondaryCard>

                        <Text style={styles.text}>What year of college are you in?</Text>


                        <CustomButton frontColor="#000000" backColor="#FFF" text="Incoming College Student" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            setClassStanding('incoming')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Freshman" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            setClassStanding('freshman')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            setClassStanding('sophomore')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            setClassStanding('junior')

                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            setClassStanding('senior')
                        }} />
                        <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={() => {
                            setShouldShow2(!shouldShow2)
                            setClassStanding('other')
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
                                setEnrollmentStatus('full-time')
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Part-Time" onPress={() => {
                                setShouldShow5(!shouldShow5)
                                setEnrollmentStatus('part-time')
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Undecided" onPress={() => {
                                setShouldShow5(!shouldShow5)
                                setEnrollmentStatus('undecided')
                            }} />

                        </SecondaryCard>
                    ) : null
                }


                <SecondaryCard>
                    <Text style={styles.text}>Identify your major:</Text>
                    <TouchableOpacity onPress={() => changeModalVisibility(true)}>
                        <Text style={styles.dropdown}>Choose Your Major</Text>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={isModalVisible}
                        nRequestClose={() => changeModalVisibility(false)}
                    >
                        <ListofMajors
                            changeModalVisibility={changeModalVisibility}
                            setData={major}
                        />

                    </Modal>
                </SecondaryCard>

                <SecondaryCard>
                    <Text style={styles.text}>I (will) attend school at</Text>
                    <TextInput placeholder="College/University"
                        placeholderTextColor="#FFFFFF"
                        value = {college}
                        onChangeText = {text => setCollege(text)}
                        style={styles.inputBox}/>
                    <Text style={styles.text}>seeking a</Text>
                    <TextInput placeholder="Degree"
                        placeholderTextColor="#FFFFFF"
                        value = {degree}
                        onChangeText = {text => setDegree(text)}
                        style={styles.inputBox} />
                    <Text style={styles.text}>with a GPA of</Text>
                    <TextInput placeholder="GPA"
                        placeholderTextColor="#FFFFFF"
                        value = {gpa}
                        onChangeText = {text => setGpa(text)}
                        style={styles.inputBox} />
                </SecondaryCard>
                <CustomButton frontColor="#000000" backColor="#FFF" text="Submit" onPress={onSubmitPressed} />
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
    inputBox:{
        backgroundColor: '#596066', borderColor: '#e8e8e8',
        borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
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