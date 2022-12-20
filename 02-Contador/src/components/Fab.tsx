import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'
import React from 'react'


interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
}

const Fab = ({title, onPress, position='br'}: Props) => {

    const ios = () => {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={ (position == 'bl') ? styles.fabLocationBL : styles.fabLocationBR }
                >
                    <View style={styles.fab} >
                        <Text style={ styles.fabText }> {title}</Text>
                    </View>
                </TouchableOpacity>
            </>
          )  
    }

    const android = () => {
        return (
            <View style={ (position == 'bl') ? styles.fabLocationBL : styles.fabLocationBR }>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#454534', false,30)}
                >
                    <View style={styles.fab} >
                        <Text style={ styles.fabText }> {title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
          ) 
    }

  return (
    (Platform.OS === 'android') 
        ? android() 
        : ios() 
  )
}

export default Fab

const styles = StyleSheet.create({
    fab: {
		backgroundColor: '#5856D6',
		width: 60,
		height: 60,
		borderRadius: 100,
		justifyContent: 'center',
        //sombra
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
	},
	fabText: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	fabLocationBR: {
		position: 'absolute',
		bottom: 25,
		right: 25
	},
	fabLocationBL: {
		position: 'absolute',
		bottom: 25,
		left: 25,
	}
})