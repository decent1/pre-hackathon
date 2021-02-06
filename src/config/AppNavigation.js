import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import LoginPage from '../screen/LoginPage';
import SignUp from '../screen/SignUp';
import bloodGroup from '../screen/bloodGroup';
import medicalReport from '../screen/medicalReport';
import HomeScreen from '../screen/HomeScreen';
import MyTabs from '../screen/MyTabs';

const Stack = createStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitle: 'Blood Donor Login',
            headerTintColor: '#FFD700',
          }}
          name="SignIn"
          component={LoginPage}
        />
      <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitle: 'Home',
            headerTintColor: '#FFD700',
            headerShown: false
          }}
          name="myTabs"
          component={MyTabs}
         
        />
       
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitle: 'Register as a blood donor and save lives',
            headerTintColor: '#FFD700',
            headerTitleStyle: {fontSize: 15},
            
          }}
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitle: 'Medical Report',
            headerTintColor: '#FFD700',
          }}
          name="medicalReport"
          component={medicalReport}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
