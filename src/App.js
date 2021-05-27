import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import SplashScreen from './components/UI/SplashScreen/SplashScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  return (
    <Fragment>
      {
        loading ? <SplashScreen /> :

        <View style={styles.container}>
          <Text>Inge bra bygg!</Text>
          <StatusBar style="auto" />
        </View>
      }
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})