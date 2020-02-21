let nombres = ["jordan", "alex", "eduardo", "marcos"];

// let leer = nombres.map(function(nombre){
//     console.log(`este nombre ${nombre} tiene ${nombre.length} caracteres`)
// })


let leer = nombres.map(  nombre => `${nombre} tiene ${nombre.length} caracteres` );

console.log(leer)

leer = nombres.map(function(nombre){
    return `${nombre} tiene ${nombre.length} caracteres`;
});

console.log(leer);
