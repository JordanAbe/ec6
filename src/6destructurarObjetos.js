let persona = { 
    nombre : 'jordan',
    pais : 'peru',
    apellido : 'mensoza',
    profesion : 'desarrollador'
}

let { nombre, pais, apellido, profesion} = persona;

console.log(nombre);

let mostrarInfoDePerson = ({nombre, apellido, pais}) => {
    console.log(`mi nombre es ${nombre} , mi apellido es ${apellido} y mi pais es ${pais}`);
}

mostrarInfoDePerson(persona);