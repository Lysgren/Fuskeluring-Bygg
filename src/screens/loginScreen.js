import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import StoreContext from '../store/store-context'

const Login = props => {
  const storeCtx = useContext(StoreContext)

  return (
    <View>
      <Text>Login</Text>
      <Button title="Press to login" onPress={() => {
        storeCtx.login()
      } }/>
    </View>
  )
}

export default Login