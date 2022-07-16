import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyStack } from './stackNavigator';
// Screens
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SignupScreen from '../screens/SignupScreen';
import ActivityCommentScreen from '../screens/ActivityCommentScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Cities' component={CitiesScreen} />
            <Tab.Screen name='Details' component={DetailsScreen} />
            <Tab.Screen name='Sign up' component={SignupScreen} />
            <Tab.Screen name='ActivityComment' component={ActivityCommentScreen} />

        </Tab.Navigator>
    );
}