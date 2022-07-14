import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SignupScreen from '../screens/SignupScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={ HomeScreen } />
            <Tab.Screen name='Cities' component={ CitiesScreen } />
            <Tab.Screen name='Details' component={ DetailsScreen } />
            <Tab.Screen name='Sign up' component={ SignupScreen } />
        </Tab.Navigator>
    );
}