// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserSignIn from './src/Screens/UserSignIn';
import Questions from './src/Screens/Questions';
import BrowseScholarships from './src/Screens/BrowseScholarships';
import ScholarshipDetails from './src/Screens/ScholarshipDetails';
import CreateAccount from './src/Screens/CreateAccount';

import WelcomeScreen from './src/Screens/WelcomeScreen';
import PersonalInfo from './src/Screens/PersonalInfo';
import SuccessfullAccount from './src/Screens/SuccessfullAccount';

import Settings from './src/Screens/Settings';
import EditPersonalInfo from './src/Screens/EditPersonalInfo';
import AccountClosed from './src/Screens/AccountClosed';
import Logout from './src/Screens/Logout';

import auth from '@react-native-firebase/auth';
import PostScholarship from './src/Screens/PostScholarship';
import ScholarshipSubmitted from './src/Screens/ScholarshipSubmitted';

const App = () => {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="BrowseScholarships"
        screenOptions={{

          headerRight: () => (
            <Button
              onPress={() =>
                auth()
                  .signOut()
                  .then(() => console.log('User signed out'))}
              title="Info"
              color="#fff"
            />
          ),
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreenScreen} />
        <Stack.Screen name="SuccessfullAccount" component={SuccessfullAccountScreen} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="UserSignIn" component={UserSignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BrowseScholarships" component={BrowseScholarshipsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScholarshipDetails" component={ScholarshipDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditPersonalInfo" component={EditPersonalInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AccountClosed" component={AccountClosedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PostScholarship" component={PostScholarshipScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ScholarshipSubmitted" component={ScholarshipSubmittedScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >

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
function WelcomeScreenScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}

function PersonalInfoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <PersonalInfo />
    </SafeAreaView>
  );
}

function SuccessfullAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <SuccessfullAccount />
    </SafeAreaView>
  );
}

function UserSignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <UserSignIn />
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
      <Questions />
    </SafeAreaView>
  );
}

function BrowseScholarshipsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <BrowseScholarships />
    </SafeAreaView>
  );
}

function ScholarshipDetailsScreen({ route, navigation }) {
  const { name, amount, deadline } = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <ScholarshipDetails name={name} amount={amount} deadline={deadline} />
    </SafeAreaView>
  );
}

function CreateAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <CreateAccount />
    </SafeAreaView>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Settings />
    </SafeAreaView>
  )
}

function EditPersonalInfoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <EditPersonalInfo />
    </SafeAreaView>
  )
}

function AccountClosedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <AccountClosed />
    </SafeAreaView>
  )
}

function LogoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <Logout />
    </SafeAreaView>
  )
}

function PostScholarshipScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <PostScholarship />
    </SafeAreaView>
  )
}

function ScholarshipSubmittedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.root}>
      <ScholarshipSubmitted />
    </SafeAreaView>
  )
}

export default App;