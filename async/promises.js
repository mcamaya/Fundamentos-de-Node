function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola, ${nombre}`);
            resolve(nombre); 
        }, 1500);
    });
    
}

function hablar(nombre){
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log('blah, blah, blah...');
            resolve(nombre);
        }, 500);
    })
}

function adios(nombre){
    return new Promise( function (resolve, reject) {
        setTimeout(() => {
            console.log(`Adiós, ${nombre}`);
            resolve();
        }, 1000);
    })
}

// ---
console.log('Iniciando...');
hola('Camila')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso :)');
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.error(error);
    })