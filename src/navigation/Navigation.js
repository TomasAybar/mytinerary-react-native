import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// screens
import HomeScreen from '../screens/HomeScreen';
import CitiesScreen from '../screens/CitiesScreen';

import DetailsScreen from '../screens/DetailsScreen';

import StackScreen from '../screens/StackScreen';

const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CitiesStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='Details'
        >
            <HomeStackNavigator.Screen name='Details' component={DetailsScreen} />
            {/* <HomeStackNavigator.Screen name='Stack' component={StackScreen} /> */}
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#3a5ba0',
                tabBarStyle: { height: 50}
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
                component={CitiesScreen}
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

export default function Navigation() {

    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}