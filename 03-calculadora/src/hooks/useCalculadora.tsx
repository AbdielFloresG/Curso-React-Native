import { useRef, useState } from 'react'

enum Operadores {
	sumar, restar, multiplicar, dividir
}

const useCalculadora = () => {
    const [numero, setNumero] = useState('0')
	const [numeroAnterior, setNumeroAnterior] = useState('0')

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

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    }
    
}

export default useCalculadora