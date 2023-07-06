
let i = 0;
let intervalo = setInterval( () => {
    if (i === 3 ) {
        clearInterval(intervalo);
    }
    console.log('Hola');
    i++;
}, 1000);

setImmediate( () => {
    console.log('holaaaaa');
});


console.log(global);
console.log(process);
console.log(__dirname); //muestra la ruta de carpetas
console.log(__filename); // muestra la ruta del archivo