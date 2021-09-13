import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import { Image, StyleSheet } from 'react-native'

import MapPointsScreen from '../../screens/MapPointsScreen/MapPointsScreen'
import MapScreen from '../../screens/MapScreen/MapScreen'
import AddMapPointScreen from '../../screens/AddMapPointScreen/AddMapPointScreen'
import Header from '../Header'

const Stack = createNativeStackNavigator() 
const MyStack = () => { 
  return (
    <Stack.Navigator
      screenOptions={{
      }}
    >
        <Stack.Screen name="Google Map Points" component={MapPointsScreen} 
          options={{
            header: () => <Header title='Google Points' />
          }}
        /> 
        <Stack.Screen name="Add Map Point" component={AddMapPointScreen} 
          options={{
            header: () => <Header title='Add Point' back/>
          }}
        /> 
    </Stack.Navigator>
  )
}

const  Tab = createBottomTabNavigator() 
const TabNavigation = () => {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="MAP" component={MapScreen} 
        options={{
          header: () => <Header title='Map'/>,
          tabBarIcon: ({ focused }) => <Image source={require('../../assets/icons/map.png')} style={{...styles.icon, tintColor: focused ? "#ff3200" : "#000"}} />
        }}
      />
      <Tab.Screen name='POINTS' component={MyStack} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Image source={require('../../assets/icons/placeholder.png')} style={{...styles.icon, tintColor: focused ? "#ff3200" : "#000"}} />
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 23,
    height: 23
  }
})

export default TabNavigation