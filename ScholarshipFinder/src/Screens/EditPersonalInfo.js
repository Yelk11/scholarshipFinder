import React, { useEffect, useState } from 'react';
import { View, Button, TouchableOpacity, Modal, Text, TextInput, StyleSheet, ScrollView, Image, onChangeText } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import BackButton from '../../assets/images/back-button.png';
import smallLogo from '../../assets/images/app-logo-dark-background.png';
import SecondaryCard from '../components/SecondaryCard';
import WhiteButton from '../components/CustomButton/WhiteButton';
import CustomButton from '../components/CustomButton/CustomButton';
import { ListofMajors } from '../components/ListOfMajors';
import { isValidObjField, updateError } from '../components/CustomInput/methods';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const EditPersonalInfo = (props) => {
    const navigation = useNavigation();


    const [race, setRace] = useState('');
    const [citizenship, setCitizen] = useState('');
    const [gender, setGender] = useState('');
    const [college, setCollege] = useState('');
    const [enrollmentStatus, setEnrollmentStatus] = useState('');
    const [classStanding, setClassStanding] = useState('');
    const [degree, setDegree] = useState('');
    const [major, setMajor] = useState('');
    const [gpa, setGpa] = useState('');
    const [military, setMilitary] = useState('');
    const [highSchool, setHighSchool] = useState('');
    const [satMath, setSatMath] = useState('');
    const [satEBRW, setSatEBRW] = useState('');
    const [act, setACT] = useState('');
    const [firstCollegeStudent, setFirstCollegeStudent] = useState('');
    const [incomeLevel, setIncomeLevel] = useState('');


    const GoBack = () => navigation.navigate('Settings')

    const CloseAccountPressed = () => navigation.navigate('AccountClosed')

    const onQuestionPressed = () => {
        if (isValidForm()) {
            firestore()
            .collection('user_info')
            .doc(auth().currentUser.uid)
            .set({
                high_school: highSchool,
                sat_math: satMath,
                sat_ebrw: satEBRW,
                act: act,
                military:military,
                income_level: incomeLevel,
                first_college_student: firstCollegeStudent,
                class_standing: classStanding,
                enrollment_status: enrollmentStatus,
                major: major,
                college: college,
                degree: degree,
                gpa: gpa
            }, { merge: true })
            navigation.navigate('Settings')
        }
    }

    const [shouldShow, setShouldShow] = useState(true);

    const [shouldShow2, setShouldShow2] = useState(true);

    const [shouldShow3, setShouldShow3] = useState(true);

    const [shouldShow4, setShouldShow4] = useState(true);

    const [shouldShow5, setShouldShow5] = useState(true);

    const [chooseData, setchooseData] = useState('Select your Major...');

    const [isModalVisible, setisModalVisible] = useState(false);
    const [firstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [CurrentPassword, setCurrentPassword] = useState('');
    const [password, setpassword] = useState('');
    const [Re_password, setRe_password] = useState('');
    const [error, setError] = useState('');


    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchooseData(option)
    }

    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim())
    };
    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('');
        }, 5000);
    };
    console.log(auth().currentUser.uid)
    firestore()
        .collection('user_info')
        .doc(auth().currentUser.uid)
        .get()
        .then(documentSnapshot => {
            const data = documentSnapshot.data()

            if (data.first_name != null){
                setFirstName(data.first_name)
            }
            if (data.last_name != null){
                setLastName(data.last_name)
            }
            if (data.race != '') {
                setRace(data.race)
            }
            if (data.citizen != '') {
                setCitizen(data.citizen)
            }
            if (data.gender != '') {
                setGender(data.gender)
            }
            if (data.college != '') {
                setCollege(data.college)
            }
            if (data.enrollmentStatus != '') {
                setEnrollmentStatus(data.enrollmentStatus)
            }
            if (data.classStanding != '') {
                setClassStanding(data.classStanding)
            }
            if (data.degree != '') {
                setDegree(data.degree)
            }
            if (data.major != '') {
                setMajor(data.major)
            }
            if (data.gpa != '') {
                setGpa(data.gpa)
            }
            if (data.military != '') {
                setMilitary(data.military)
            }
            if (data.highSchool != '') {
                setHighSchool(data.highSchool)
            }
            if (data.satMath != '') {
                setSatMath(data.satMath)
            }
            if (data.satEBRW != '') {
                setSatEBRW(data.satEBRW)
            }
            if (data.act != '') {
                setACT(data.act)
            }
            if (data.firstCollegeStudent != '') {
                setFirstCollegeStudent(data.firstCollegeStudent)
            }
            if (data.incomeLevel != '') {
                setIncomeLevel(data.incomeLevel)
            }
        });
    const isValidForm = () => {
        // we will accept only if all of the fields have value
        if (!isValidObjField(lastName, firstName))
            return updateError('Required first name and last name', setError);

        if (!firstName.trim() || firstName.length < 3)
            return updateError('Invalid first name!', setError);

        if (!lastName.trim() || lastName.length < 3)
            return updateError('Invalid last name!', setError);
        if (!password.trim() || password.length < 6)
            return updateError('Password is less than 6 characters!', setError);
        if (!Re_password.trim() || Re_password.length < 6)
            return updateError('Password is less than 6 characters!', setError);
        if (password !== Re_password)
            return updateError('Password does not match! please try again!', setError);
        return true;
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={GoBack}>
                <Image style={styles.settingsTopLeft} source={BackButton} />
            </TouchableOpacity>
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
                {error ? (
                    <Text style={{ color: 'red', fontSize: 16, textAlign: 'center' }}>
                        {error}
                    </Text>
                ) : null}
                <ScrollView>

                    <SecondaryCard>
                        <Text style={styles.text}>Email</Text>
                        <TextInput placeholder={"nickdemo@gmail.com"}
                            placeholderTextColor="#FFFFFF"
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>

                    <SecondaryCard>
                        <Text style={styles.text}>Password</Text>
                        <TextInput placeholder="Current Password"
                            placeholderTextColor="#FFFFFF"
                            value={CurrentPassword}
                            secureTextEntry={true}
                            onChangeText={text => setCurrentPassword(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <TextInput placeholder="New Password"
                            placeholderTextColor="#FFFFFF"
                            value={password}
                            secureTextEntry={true}
                            onChangeText={text => setpassword(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <TextInput placeholder="Retype New Password"
                            placeholderTextColor="#FFFFFF"
                            value={Re_password}
                            secureTextEntry={true}
                            onChangeText={text => setRe_password(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>

                    <SecondaryCard>
                        <Text style={styles.text}>My name is</Text>
                        <TextInput placeholder={firstName}
                            placeholderTextColor="#FFFFFF"
                            value={firstName}
                            onChangeText={text => setFirstName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />

                        <TextInput placeholder={lastName}
                            placeholderTextColor="#FFFFFF"
                            value={lastName}
                            onChangeText={text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>

                    <SecondaryCard>
                        <Text style={styles.text}>Citizenship</Text>
                        <TextInput placeholder={citizenship}
                            placeholderTextColor="#FFFFFF"
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>

                    <SecondaryCard>
                        <Text style={styles.text}>Gender</Text>
                        <TextInput placeholder={gender}
                            placeholderTextColor="#FFFFFF"
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>

                    <SecondaryCard>
                        <Text style={styles.text}>I attended high school at</Text>
                        <TextInput placeholder={highSchool}
                            placeholderTextColor="#FFFFFF"
                            //value = {FName}
                            //onChangeText = {text => setFirstName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>
                    <SecondaryCard>
                        <Text style={styles.text}>SAT Math Score</Text>
                        <TextInput placeholder={satMath}
                            placeholderTextColor="#FFFFFF"
                            //value = {FName}
                            //onChangeText = {text => setFirstName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <Text style={styles.text}>SAT Evidence-Based Reading and Writing Score</Text>
                        <TextInput placeholder={satEBRW}
                            placeholderTextColor="#FFFFFF"
                            //value = {LName}
                            //onChangeText = {text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <Text style={styles.text}>ACT Score</Text>
                        <TextInput placeholder={act}
                            placeholderTextColor="#FFFFFF"
                            //value = {LName}
                            //onChangeText = {text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>

                    <SecondaryCard>
                        <Text style={styles.text}>Do you have any athletic interests or participation?</Text>
                        <Text style={styles.text}>Sport 1</Text>
                        <TextInput placeholder="Enter a sport here (leave blank if none)"
                            placeholderTextColor="#FFFFFF"
                            //value = {FName}
                            //onChangeText = {text => setFirstName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <Text style={styles.text}>Sport 2</Text>
                        <TextInput placeholder="Enter a sport here (leave blank if none)"
                            placeholderTextColor="#FFFFFF"
                            //value = {LName}
                            //onChangeText = {text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <Text style={styles.text}>Sport 3</Text>
                        <TextInput placeholder="Enter a sport here (leave blank if none)"
                            placeholderTextColor="#FFFFFF"
                            //value = {LName}
                            //onChangeText = {text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
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

                            <Text style={styles.text}>Select your income level</Text>


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
                                }} />
                                <CustomButton frontColor="#000000" backColor="#EA5E6A" text="No" onPress={() => {
                                    setShouldShow(!shouldShow)
                                }} />

                            </SecondaryCard>
                        ) : null
                    }

                    {shouldShow2 ? (
                        <SecondaryCard>

                            <Text style={styles.text}>What year of college are you in?</Text>


                            <CustomButton frontColor="#000000" backColor="#FFF" text="Incoming College Student" onPress={() => {
                                setShouldShow2(!shouldShow2)
                                
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Freshman" onPress={() => {
                                setShouldShow2(!shouldShow2)
                                
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Sophomore" onPress={() => {
                                setShouldShow2(!shouldShow2)
                                
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Junior" onPress={() => {
                                setShouldShow2(!shouldShow2)
                                

                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Senior" onPress={() => {
                                setShouldShow2(!shouldShow2)
                                
                            }} />
                            <CustomButton frontColor="#000000" backColor="#FFF" text="Other" onPress={() => {
                                setShouldShow2(!shouldShow2)
                                
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
                        <TextInput placeholder={college}
                            placeholderTextColor="#FFFFFF"
                            //value = {FName}
                            //onChangeText = {text => setFirstName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <Text style={styles.text}>seeking a</Text>
                        <TextInput placeholder={degree}
                            placeholderTextColor="#FFFFFF"
                            //value = {LName}
                            //onChangeText = {text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                        <Text style={styles.text}>with a GPA of</Text>
                        <TextInput placeholder={gpa}
                            placeholderTextColor="#FFFFFF"
                            //value = {LName}
                            //onChangeText = {text => setLastName(text)}
                            style={{
                                backgroundColor: '#596066', borderColor: '#e8e8e8', fontWeight: 'bold',
                                borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginVertical: 5, color: "#FFF"
                            }} />
                    </SecondaryCard>
                    <WhiteButton frontColor="#000000" backColor="#FFF" text="Save Changes" onPress={onQuestionPressed} />


                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#3E4347',
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },

    headertext: {
        color: "#FFF",
        fontSize: 24,
        textAlign: 'center',
        width: "100%",
        fontWeight: 'bold',
    },

    text: {
        color: "black",
        fontSize: 20,
        textAlign: 'left',
        width: "100%",
        paddingBottom: 10,
        fontWeight: 'bold'
    },

    headers: {
        color: "#000",
        fontSize: 24,
        textAlign: 'left',
        width: "100%",
        padding: 10,
        textDecorationLine: 'underline'

    },

    small: {
        color: "#000",
        fontSize: 14,
        textAlign: 'left',
        width: "100%",
        padding: 2,
    },

    scholarshipTopRight: {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 5, right: 10,
    },

    settingsTopLeft: {
        height: 45,
        width: 50,
        position: 'absolute',
        top: -27.5, left: 2,
    },

    logoTopCenter: {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 5,
        left: 180,

    },

    logout: {
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: 2.5,
        left: 80
    },

    flexAdjustment: {
        flex: .9,
        top: 35
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
        backgroundColor: "white",
        fontWeight: 'bold',
    }
})

export default EditPersonalInfo;