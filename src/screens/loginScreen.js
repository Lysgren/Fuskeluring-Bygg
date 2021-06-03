import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Input from '../components/UI/Input/Input'
import ButtonUI from '../components/UI/Button/Button'

import StoreContext from '../store/store-context'

const Login = props => {
  const storeCtx = useContext(StoreContext)

  return (
    <View >
      <Text>Login</Text>
      <Input label='Username' />
      <Input label='Password' />
      <ButtonUI title='Login' onPress={() => storeCtx.login()} />
    </View>
  )
}

export default Login