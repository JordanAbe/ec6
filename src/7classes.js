class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrarInfo(){
        return `
            Nombre: ${this.nombre} <br/>
            Apellido: ${this.apellido} <br/>
            Edad: ${this.edad} <br/>
            <hr/>
        `
    }
}
let usuario = new Persona('Jordan', 'Abe', 29);
document.write(usuario.mostrarInfo());

class Empleado extends Persona {
    constructor(nombre, apellido, edad, correo){
        super(nombre, apellido, edad);
        this.correo = correo;
    }

    mostrarInfo() {
        return `
            Nombre: ${this.nombre} <br/>
            Apellido: ${this.apellido} <br/>
            Edad: ${this.edad} <br/>
            Correo: ${this.correo}
            <hr/>
        `
    }
}

let empleado = new Empleado('Alex', 'Chavez', 28, 'alex@hotmail.com')
document.write(empleado.mostrarInfo())

let empleado2 = new Empleado('Jean', 'Lopez', 27, 'jean@gmail.com')
document.write(empleado2.mostrarInfo())