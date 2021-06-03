import React from 'react'
import { View, Text, StyleSheet, TextInput, ViewPagerAndroid } from 'react-native'

const Input = (props) => {
  return (
    <View>
      <Text>{ props.label }</Text>
      <TextInput
        placeholder="useless placeholder"
      />
    </View>
  )
}


export default Input