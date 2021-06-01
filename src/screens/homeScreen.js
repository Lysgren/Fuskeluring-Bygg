import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import SplashScreen from '../components/UI/SplashScreen/SplashScreen'

import StoreContext from '../store/store-context'
import LoginScreen from './loginScreen'

const HomeScreen = props => {
  const storeCtx = useContext(StoreContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  if (!storeCtx.loggedIn) {
    return (<LoginScreen />)
  } else {
    return (
      loading ? <SplashScreen /> :
      <View style={styles.container}>
        <Text>Inge bra bygg!</Text>
        <Text>Test test test!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen

