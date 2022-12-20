import { View, Text } from 'react-native'
import React from 'react'

const HolaMundoScreen = () => {
	return (
		<View style={{ 
			flex: 1,
			justifyContent: 'center'
		}}>
			<Text
				style={{ 
					fontSize: 45,
					textAlign: 'center',
				}}
			>
				Hola Mundo
			</Text>
		</View>
	)
}

export default HolaMundoScreen