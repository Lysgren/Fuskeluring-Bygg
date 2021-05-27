import React from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Shape } from 'react-native-svg'


const Spinner = props => {
  return (
    <View>
      <SpinnerSvg width={120} height={40}/>
    </View>
  )
}

export default Spinner