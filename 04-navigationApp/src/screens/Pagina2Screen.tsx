import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'


const Pagina2Screen = () => {

  const navigator = useNavigation()

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: '',
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button 
        title='Ir a la pagina 3'
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}

export default Pagina2Screen
