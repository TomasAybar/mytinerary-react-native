import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import DetailsScreen from '../screens/DetailsScreen';
import SignupScreen from '../screens/SignupScreen';
import ActivityCommentScreen from '../screens/ActivityCommentScreen';

export const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Details' component={DetailsScreen} />
            <Stack.Screen name='Sign up' component={SignupScreen} />
            <Stack.Screen name='ActivityComment' component={ActivityCommentScreen} />
        </Stack.Navigator>
    );

}