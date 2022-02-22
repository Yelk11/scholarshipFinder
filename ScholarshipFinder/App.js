// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserSignIn from './src/Screens/UserSignIn';
import Questions from './src/Screens/Questions';
import BrowseScholarships from './src/Screens/BrowseScholarships';
import ScholarshipDetails from './src/Screens/ScholarshipDetails';

const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Questions">
         <Stack.Screen name="UserSignIn" component={UserSignInScreen}/>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
         <Stack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }}/>
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

function QuestionsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Questions/>
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