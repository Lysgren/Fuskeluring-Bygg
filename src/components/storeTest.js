import React, { useContext } from 'react'

import { Text, View, Button } from 'react-native'
import StoreContext from '../store/store-context'

const StoreTest = props => {
  const storeCtx = useContext(StoreContext)

  return (
    <View>
      <Text>Value: { storeCtx.loggedIn }</Text>
      <Button title='Click me!' onPress={() => storeCtx.testFunc() }></Button>
    </View>
  )
}

export default StoreTest