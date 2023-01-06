import { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import BotonCalc from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

const colores = {
	grisClaro: '#9b9b9b',
	grisOscuro: '#2d2d2d',
	naranja: '#FF9427'
}

enum Operadores {
	sumar, restar, multiplicar, dividir
}

const CalculadoraScreen = () => {

	const [numero, setNumero] = useState('100')
	const [numeroAnterior, setNumeroAnterior] = useState('1500')

	const ultimaOperacion = useRef<Operadores>()

	const limpiar = () => {
		setNumero('0')
		setNumeroAnterior('0')
	}

	const armarNumero = (numeroTexto: string) => {
		//No aceptar doble punto
		if( numero.includes('.') && numeroTexto === '.') return;

		
		if (numero.startsWith('0') || numero.startsWith('-0')) {

			//Punto decimal
			if( numeroTexto === '.'){
				setNumero(numero + numeroTexto)

				//Evaluar ceros si hay punto decimal
			} else if ( numeroTexto === '0' && numero.includes('.')){
				setNumero(numero + numeroTexto)

				//Evaluar si es diferente de 0 y no tiene punto
			} else if ( numeroTexto !== '0' && !numero.includes('.')){
				setNumero(numeroTexto)

				//Evitar 00000.00
			} else if (numeroTexto === '0' && !numero.includes('.')) {

			} else {
				setNumero(numero + numeroTexto)
			}
		} else {
			setNumero(numero + numeroTexto)
		}
	}

	const positivoNegativo = () => {
		if (numero.includes('-')){
			setNumero(numero.replace("-",''))
		} else {
			setNumero('-' + numero)
		}
	}

	const btnDel = () => {
		let negativo = ''
		let numeroTmp = numero
		if ( numero.includes('-')) {
			negativo = '-'
			numeroTmp = numero.substr(1)
		}
		if( numeroTmp.length > 1 ) {
			setNumero( negativo + numeroTmp.slice(0,-1))
		} else {
			setNumero('0')
		}
	}

	const cambiarNumero = () => {
		if ( numero.endsWith('.')){
			setNumeroAnterior(numero.slice(0,-1))
		}else {
			setNumeroAnterior(numero)
		}
		setNumero('0')
	}

	const btnDividir = () => {
		cambiarNumero()
		ultimaOperacion.current = Operadores.dividir
	}

	const btnMultiplicar = () => {
		cambiarNumero()
		ultimaOperacion.current = Operadores.multiplicar
	}

	const btnRestar = () => {
		cambiarNumero()
		ultimaOperacion.current = Operadores.restar
	}

	const btnSumar = () => {
		cambiarNumero()
		ultimaOperacion.current = Operadores.sumar
	}

	const calcular = () => {

		const num1 = Number( numero)
		const num2 = Number( numeroAnterior)

		switch (ultimaOperacion.current) {
			case Operadores.sumar:
				setNumero(`${num1 + num2}`)
				break;
			case Operadores.restar:
				setNumero(`${num2 - num1}`)
				break
			case Operadores.multiplicar:
				setNumero(`${num1 * num2}`)
				break
			case Operadores.dividir:
				setNumero(`${num2 / num1}`)
				break
			default:
				break;
		}
	}


  return (
    <View style={styles.calculadoraContainer}>
      {/* <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text> */}
      <Text 
				style={styles.resultado}
				numberOfLines={1}
				adjustsFontSizeToFit
			>
				{numero}
			</Text>

			<View style={styles.fila}>

				<BotonCalc texto='C' color='#9b9b9b' accion={limpiar}/>
				<BotonCalc texto='+/-' color='#9b9b9b' accion={positivoNegativo}/>
				<BotonCalc texto='del' color='#9b9b9b' accion={btnDel}/>
				<BotonCalc texto='/' color='#FF9427' accion={btnDividir}/>

			</View>
			
			<View style={styles.fila}>

				<BotonCalc texto='7' accion={armarNumero}/>
				<BotonCalc texto='8' accion={armarNumero}/>
				<BotonCalc texto='9' accion={armarNumero}/>
				<BotonCalc texto='X' accion={btnMultiplicar} color={colores.naranja}/>

			</View>

			<View style={styles.fila}>

				<BotonCalc texto='4' accion={armarNumero}/>
				<BotonCalc texto='5' accion={armarNumero}/>
				<BotonCalc texto='6' accion={armarNumero}/>
				<BotonCalc texto='-' accion={btnRestar} color={colores.naranja}/>

			</View>

			<View style={styles.fila}>

				<BotonCalc texto='1' accion={armarNumero}/>
				<BotonCalc texto='2' accion={armarNumero}/>
				<BotonCalc texto='3' accion={armarNumero}/>
				<BotonCalc texto='+' accion={btnSumar} color={colores.naranja}/>

			</View>

			<View style={styles.fila}>

				<BotonCalc texto='0' accion={armarNumero} ancho/>
				<BotonCalc texto='.' accion={armarNumero}/>
				<BotonCalc texto='=' accion={calcular} color={colores.naranja}/>

			</View>

    </View>
  )
}

export default CalculadoraScreen