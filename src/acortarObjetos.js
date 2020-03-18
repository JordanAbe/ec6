let crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo() {
            return `${nombre} tiene ${edad} anos `;
        }
    }
}

console.log(crearObjeto('jordan', 29).mostrarInfo());