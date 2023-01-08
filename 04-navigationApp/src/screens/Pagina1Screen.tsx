import { Button, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any>{};

const Pagina1Screen = ({navigation} : Props) => {


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />



      <Text style={{ fontSize: 20, marginVertical: 10 }}>Navegar con argumentos</Text>

      <TouchableOpacity
        style={{ backgroundColor: 'powderblue', padding: 10, borderRadius: 5, marginVertical: 5 }}
        onPress={() => navigation.navigate('PersonaScreen',{
          id: 1,
          nombre: 'Abdiel'
        })}
      >
        <Text style={{ fontSize: 20 }}>Abdiel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: 'pink', padding: 10, borderRadius: 5, marginVertical: 5 }}
        onPress={() => navigation.navigate('PersonaScreen',{
          id: 2,
          nombre: 'Mimi'
        })}
      >
        <Text style={{ fontSize: 20 }}>Mimi</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Pagina1Screen
