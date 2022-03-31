import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import smallLogo from '../../assets/images/app-logo-dark-background.png';
import ScholarshipCard from '../components/ScholarshipCard';
import AccentCard from '../components/AccentCard';
import ApplyButton from '../components/CustomButton/ApplyButton';
import LikeButton from '../../assets/images/like-button.png';
import ShareButton from '../../assets/images/share-button.png';
import scholarshipFilter from '../../assets/images/yellow-filter.png';
import YellowSettingsButton from '../../assets/images/settings-gear.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const BrowseScholarships = () => {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [scholarships, setScholarships] = useState([]); // Initial empty array of scholarships

    const [amount, setAmount] = useState([]);
    const [deadline, setDeadline] = useState([]);
    const [opens, setOpens] = useState([]);
    const [race, setRace] = useState([]);
    const [citizenship, setCitizen] = useState([]);
    const [gender, setGender] = useState([]);
    const [college, setCollege] = useState([]);
    const [enrollmentStatus, setEnrollmentStatus] = useState([]);
    const [classStanding, setClassStanding] = useState([]);
    const [degree, setDegree] = useState([]);
    const [major, setMajor] = useState([]);
    const [gpa, setGpa] = useState([]);
    const [military, setMilitary] = useState([]);
    const [highSchool, setHighSchool] = useState([]);
    const [satMath, setSatMath] = useState([]);
    const [satEBRW, setSatEBRW] = useState([]);
    const [act, setACT] = useState([]);
    const [firstCollegeStudent, setFirstCollegeStudent] = useState([]);
    const [incomeLevel, setIncomeLevel] = useState([]);


    const navigation = useNavigation();

    const getValue = async () => {
        const user = await firestore().collection('user_info').doc(auth().currentUser.uid).get();
        const data = user.data()
        setAmount(data.amount)
        setDeadline(data.deadline)
        setOpens(data.opens)
        setRace(data.race)
        setCitizen(data.citizen)
        setGender(data.gender)
        setCollege(data.college)
        setEnrollmentStatus(data.enrollmentStatus)
        setClassStanding(data.classStanding)
        setDegree(data.degree)
        setMajor(data.major)
        setGpa(data.gpa)
        setMilitary(data.military)
        setHighSchool(data.highSchool)
        setSatMath(data.satMath)
        setSatEBRW(data.satEBRW)
        setACT(data.act)
        setFirstCollegeStudent(data.firstCollegeStudent)
        setIncomeLevel(data.incomeLevel)


    }

    function add_match_percentage(scholarship_array) {
        console.log(typeof scholarship_array[0])
        for (let i = 0; i < scholarship_array.length; i++) {
            scholarship_array[i]['match'] = calc_match_percentage();
        }
        console.log(scholarship_array[0])
    }
    function calc_match_percentage(i) {
        return 100 - i
    }
    function sort_by_percentage(scholarship_array) {
        return scholarship_array.sort(compare_function);
    }

    function compare_function(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    const onSettingsPressed = () => {
        navigation.navigate('Settings');
    };

    useEffect(() => {
        getValue()
        const subscriber = firestore().collection('scholarships')
            .get().then((querySnapshot) => {
                const objectsArray = [];
                querySnapshot.forEach(documentSnapshot => {
                    objectsArray.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                console.log(objectsArray[0])
                total_attributes = 3;

                for (let i = 0; i < objectsArray.length; i++) {
                    counter = 0;
                    
                    try {objectsArray[i].race.includes('black') || objectsArray[i].race.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].us_citizen.includes(citizenship) || objectsArray[i].us_citizen.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].sex.includes(gender) || objectsArray[i].sex.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].college.includes(college) || objectsArray[i].college.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].enrollment_status.includes(enrollmentStatus) || objectsArray[i].enrollment_status.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].class_standing.includes(classStanding) || objectsArray[i].class_standing.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].degree.includes(degree) || objectsArray[i].degree.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].major.includes(major) || objectsArray[i].major.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].gpa <= gpa || objectsArray[i].gpa.includes('all') ? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].military.includes(military) || objectsArray[i].military.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].high_school.includes(highSchool) || objectsArray[i].high_school.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].sat_math <= satMath || objectsArray[i].sat_math.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].sat_ebrw <= (satEBRW) || objectsArray[i].sat_ebrw.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].act.includes(act) || objectsArray[i].act.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].first_college_student.includes(firstCollegeStudent) || objectsArray[i].first_college_student.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    try {objectsArray[i].income_level.includes(incomeLevel) || objectsArray[i].income_level.includes('all')? counter++ : null} catch (error) {total_attributes--;}
                    
                    

                    objectsArray[i]['match'] = (counter / total_attributes) * 100;
                    console.log(objectsArray[i].race)
                    console.log(counter / total_attributes)
                }
                
                setScholarships(objectsArray);
                setLoading(false);
            }); return () => subscriber;
    }, []);
    if (loading) {
        return <ActivityIndicator />;
    }
    return (
        <View style={styles.container}>
            <Pressable hitSlop={50} onPress={onSettingsPressed}>
                <Image style={styles.settingsTopLeft} source={YellowSettingsButton} />
            </Pressable>
            <Image style={styles.scholarshipTopRight} source={scholarshipFilter} />
            <Image style={styles.logoTopCenter} source={smallLogo} />
            <View style={styles.flexAdjustment}>
                <FlatList
                    data={scholarships}
                    renderItem={({ item }) => (
                        <><ScholarshipCard>
                            <Pressable style={styles.listItem} onPress={() => navigation.navigate('ScholarshipDetails',
                                {
                                    name: item.title,
                                    amount: item.amount,
                                    deadline: item.deadline
                                })}>

                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.circleContainer}>
                                    <View style={styles.circle}><Text style={styles.circleText}>%{item.match}</Text></View>
                                    <View style={styles.circle}><Text style={styles.circleText}>${item.amount}</Text></View>
                                    {/* <View style={styles.circle}><Text style={styles.circleText}>Due {'\n'} {item.deadline.toDate().getMonth().toString()}/{item.deadline.toDate().getDate().toString()}</Text></View> */}
                                </View>


                            </Pressable>
                        </ScholarshipCard>
                            <AccentCard>
                                <Image style={styles.like} source={LikeButton} />
                                <Image style={styles.share} source={ShareButton} />
                                <ApplyButton text="Apply!" />
                            </AccentCard></>
                    )}

                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#474747'
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    listItem: {
        flex: 1,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        borderRadius: 10
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    info: {
        marginLeft: 5,
        color: "black"
    },


    text: {
        color: "#000",
        fontSize: 24,
        // backgroundColor : "#3E4347",
        textAlign: 'left',
        width: "100%",
        padding: 20,
    },

    scholarshipTopRight: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5, right: 10,
    },

    settingsTopLeft: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: -30,
        left: 6,
    },

    logoTopCenter: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        left: 175
    },

    underlineTopRight: {
        height: 3,
        width: 35,
        position: 'absolute',
        top: 90, right: 6,

    },

    share: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 17.5,
        left: 200
    },

    like: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: 19.5,
        right: 200
    },

    flexAdjustment: {
        flex: .9,
        top: 35
    },
    circle: {
        fllex: 1,
        height: 80,
        width: 80,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    circleText: {
        textAlign: 'center'
    }
});

export default BrowseScholarships;