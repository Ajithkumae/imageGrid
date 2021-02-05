
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import MyStack from './src/Navigation/Appnavigation';
import ConfigStore from './src/Redux/Store/ConfigStore'
import { navigationRef } from './src/Navigation/NavigationServices';
export default App = () => {

  return (
    <Provider store={ConfigStore()}>
      <NavigationContainer ref={navigationRef}>
        <MyStack />
      </NavigationContainer>
     </Provider>
  )
}