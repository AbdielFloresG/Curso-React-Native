import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SettingsScreen = () => {


  const insets = useSafeAreaInsets()

  return (
    <View style={{ marginTop: insets.top}}>
      <Text>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen