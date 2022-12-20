import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Fab from '../components/Fab'


const ContadorScreen = () => {

	const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title} >  Contador: {contador}  </Text>

			<Fab
				title='+1'
				onPress= {() => setContador(contador + 1)}
			/>
			<Fab 
				title='-1'
				onPress= {() => setContador(contador - 1)}
				position={'bl'}
			/>

    </View>
  )
}

export default ContadorScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 40,
		top: -15,
	},
})