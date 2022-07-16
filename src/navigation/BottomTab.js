import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CitiesStack } from './BottomStack'

// Icons
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (

        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#3a5ba0',
                tabBarStyle: { height: 50 }
            }}
        >

            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={30} color={color} />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen
                name='Cities'
                component={CitiesStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="city" size={30} color={color} />
                    ),
                    headerShown: false
                }}
            />

        </Tab.Navigator>

    );
}