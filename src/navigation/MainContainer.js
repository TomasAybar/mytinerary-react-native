import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './BottomTab';
import Navigation from './Navigation';
import BottomStack from './BottomStack';

const MainContainer = () => {
  return (

    <NavigationContainer>

      <BottomTab />
      {/* <BottomStack /> */}

    </NavigationContainer>

  )
}

export default MainContainer