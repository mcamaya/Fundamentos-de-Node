function greet(nombre, unCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);

        unCallback(); //función adios()

    }, 1500);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(`Adiós, ${nombre}`);

        otroCallback(); // finalizando proceso

    }, 1000);
}

console.log('Iniciando proceso');
greet('Camila', () => {

    adios('Camila', () => {
        console.log('Finalizando proceso...');
    });

});



