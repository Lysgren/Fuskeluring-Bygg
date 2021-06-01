import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './navigators/MainStack'
import StoreProvider from './store/storeProvider'

export default function App() {

  return (
    <StoreProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </StoreProvider>
  )
}