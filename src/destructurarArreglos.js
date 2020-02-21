const persona = ['jordan', 34, 'peru']

const [nombre, edad, pais, profesion = 'no especificado'] = persona;

let realizar = ([nombre, pais] = p) => {
    console.log(`su nombre  ${nombre} y su pais es ${pais}`)
}

realizar(persona);