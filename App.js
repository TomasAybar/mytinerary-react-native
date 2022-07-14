import React from 'react'
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import mainReducer from './src/redux/reducers/mainReducer';
const reduxStore = createStore({ reducer: mainReducer }); // creas la nube y le pasas el MAIN REDUCER

import { StatusBar } from 'react-native'
import MainContainer from './src/navigation/MainContainer';



const App = () => {
  return (

    <Provider store={reduxStore}>

      <MainContainer />
      <StatusBar style='auto' hidden />

    </Provider>

  )
}

export default App