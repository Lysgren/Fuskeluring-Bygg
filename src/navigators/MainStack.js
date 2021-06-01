import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import homeScreen from '../screens/homeScreen'

const Stack = createStackNavigator()

const MainStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={homeScreen} />
    </Stack.Navigator>
  )
}

export default MainStack