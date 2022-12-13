
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion,
}

interface Direccion {
    pais: string,
    casaNo: number,
}


const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Abdiel',
        edad: 21,
        direccion: {
            pais: 'Mexico',
            casaNo: 418,
        }
    }




  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify( persona, null, 2)}
            </pre>
        </code>
    </>
  )
}

export default ObjetosLiterales