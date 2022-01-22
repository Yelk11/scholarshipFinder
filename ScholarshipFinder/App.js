// In App.js in a new project
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserSignIn from './src/Screens/UserSignIn';


const App = () => {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator initialRouteName="UserSignIn">
         <Stack.Screen name="UserSignIn" component={UserSignInScreen}/>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
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

 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={DetailsScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }

export default App;