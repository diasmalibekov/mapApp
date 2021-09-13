import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'

import TabNavigation from './src/components/Navigation/Navigation';
import MapPointsScreen from './src/screens/MapPointsScreen/MapPointsScreen'
import MapScreen from './src/screens/MapScreen/MapScreen'
import AddMapPointScreen from './src/screens/AddMapPointScreen/AddMapPointScreen';


const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    
  );
};

export default App;
