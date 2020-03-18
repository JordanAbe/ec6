let promesa = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        let exito = false;
        if(exito){
            resolve('la operación fue exitorsa');
        } else {
            reject('La operación tuvo problemas');
        }
    }, 5000)
});

promesa.then((mensaje)=>{
    alert(mensaje);
})

promesa.catch(mensaje => {
    alert(mensaje)
})