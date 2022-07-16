import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import DetailsScreen from '../screens/DetailsScreen';
import CitiesScreen from '../screens/CitiesScreen';
import ActivityCommentScreen from '../screens/ActivityCommentScreen';

const Stack = createNativeStackNavigator();

function CitiesStack() {

    return (

        <Stack.Navigator
            initialRouteName='Cities'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Cities' component={CitiesScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
            <Stack.Screen 
            name='ActivityComment' 
            component={ActivityCommentScreen} 
            
            />

        </Stack.Navigator>

    );

}

export { CitiesStack }




