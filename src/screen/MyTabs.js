import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screen/HomeScreen';
import Profile from '../screen/profile';
import DonorList from './donorList';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {backgroundColor: 'black'},
        indicatorStyle: {backgroundColor: 'black', height: 0},
        activeTintColor: '#FFD700',
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="home" style={{fontSize: 25}} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="user" style={{fontSize: 25}} />
          ),
        }}
      />
      <Tab.Screen
        name="DonorList"
        component={DonorList}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon color={color} name="list" style={{fontSize: 25}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
