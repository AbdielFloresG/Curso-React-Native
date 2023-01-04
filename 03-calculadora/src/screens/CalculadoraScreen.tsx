import { useState } from 'react'
import { View, Text } from 'react-native'
import BotonCalc from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

const colores = {
	grisClaro: '#9b9b9b',
	grisOscuro: '#2d2d2d',
	naranja: '#FF9427'
}

const CalculadoraScreen = () => {


	const [numero, setNumero] = useState('100')
	const [numeroAnterior, setNumeroAnterior] = useState('1500')

	const limpiar = () => {
		setNumero('0')
		setNumeroAnterior('0')
	}

	const armarNumero = (numeroTexto: string) => {
		setNumero(numero + numeroTexto)
	}

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text 
				style={styles.resultado}
				numberOfLines={1}
				adjustsFontSizeToFit
			>
				{numero}
			</Text>

			<View style={styles.fila}>

				<BotonCalc texto='C' color='#9b9b9b' accion={limpiar}/>
				<BotonCalc texto='+/-' color='#9b9b9b' accion={limpiar}/>
				<BotonCalc texto='del' color='#9b9b9b' accion={limpiar}/>
				<BotonCalc texto='/' color='#FF9427' accion={limpiar}/>

			</View>
			
			<View style={styles.fila}>

				<BotonCalc texto='7' accion={armarNumero}/>
				<BotonCalc texto='8' accion={armarNumero}/>
				<BotonCalc texto='9' accion={armarNumero}/>
				<BotonCalc texto='X' accion={limpiar} color={colores.naranja}/>

			</View>

			<View style={styles.fila}>

				<BotonCalc texto='4' accion={armarNumero}/>
				<BotonCalc texto='5' accion={armarNumero}/>
				<BotonCalc texto='6' accion={armarNumero}/>
				<BotonCalc texto='-' accion={limpiar} color={colores.naranja}/>

			</View>

			<View style={styles.fila}>

				<BotonCalc texto='1' accion={armarNumero}/>
				<BotonCalc texto='2' accion={armarNumero}/>
				<BotonCalc texto='3' accion={armarNumero}/>
				<BotonCalc texto='+' accion={limpiar} color={colores.naranja}/>

			</View>

			<View style={styles.fila}>

				<BotonCalc texto='0' accion={armarNumero} ancho/>
				<BotonCalc texto='.' accion={armarNumero}/>
				<BotonCalc texto='=' accion={limpiar} color={colores.naranja}/>

			</View>

    </View>
  )
}

export default CalculadoraScreen