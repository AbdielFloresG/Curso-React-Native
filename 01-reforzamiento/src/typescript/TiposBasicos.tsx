
const TiposBasicos = () => {

	let nombre: string = "Abdiel Flores"
	const edad: number = 35;
	const estaActivo: boolean = false

	const poderes: Array<string> = []

	poderes.push('Velocidad')
	poderes.push('Volar')
	poderes.push('Respirar bajo el agua')
	poderes.push('Hola')
	poderes.push('Perro')

	return (
		<>
			<h3>Tipos básicos</h3>
			{nombre}, {edad}, {(estaActivo) ? 'activo':'no activo'}
			<br />
			{poderes.join(', ')}
		</>
	)
}

export default TiposBasicos