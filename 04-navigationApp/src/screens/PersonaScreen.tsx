import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigator'

interface RouteParams {
  id: number,
  nombre: string,
}

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

const PersonaScreen = ({route,┬ánavigation}: Props) => {

  const params = route.params as RouteParams

  useEffect(() => {

    navigation.setOptions({
      title: params.nombre
    })
  },[])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params,null, 3,)}
      </Text>
    </View>
  )
}

export default PersonaScreen