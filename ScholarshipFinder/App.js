// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserSignIn from './src/Screens/UserSignIn';
import Question1 from './src/Screens/Question1';
import Question2 from './src/Screens/Question2';
import Question3 from './src/Screens/Question3';
import BrowseScholarships from './src/Screens/BrowseScholarships';
import ScholarshipDetails from './src/Screens/ScholarshipDetails';

const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="BrowseScholarships">
         <Stack.Screen name="UserSignIn" component={UserSignInScreen}/>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
         <Stack.Screen name="Question1" component={Question1Screen} />
         <Stack.Screen name="Question2" component={Question2Screen} />
         <Stack.Screen name="Question3" component={Question3Screen} />
         <Stack.Screen name="BrowseScholarships" component={BrowseScholarshipsScreen} />
         <Stack.Screen name="ScholarshipDetails" component={ScholarshipDetailsScreen} />
       </Stack.Navigator>
     </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function UserSignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <UserSignIn/>
    </SafeAreaView>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Question1Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Question1/>
    </SafeAreaView>
  );
}

function Question2Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Question2/>
    </SafeAreaView>
  );
}

function Question3Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Question3/>
    </SafeAreaView>
  );
}

function BrowseScholarshipsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <BrowseScholarships/>
    </SafeAreaView>
  );
}

function ScholarshipDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <ScholarshipDetails/>
    </SafeAreaView>
  );
}

export default App;