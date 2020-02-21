function registrarNombre(nombre, edad = 23, pais){
    return `${nombre} tu edad es ${edad} y tu pais ${pais}`;
}

console.log(registrarNombre('jordan', undefined, 'peru'))