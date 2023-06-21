function greet(nombre, unCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        unCallback(); //función adios()
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('blah, blah, blah...');
        callbackHablar();
    }, 500)
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(`Adiós, ${nombre}`);
        otroCallback(); // finalizando proceso
    }, 1000);
}

//Callback hell :)
console.log('Iniciando proceso');
greet('Camila', () => {
    hablar(() => {
        hablar(() => {
            hablar (() => {
                adios('Camila', () => {
                    console.log('Finalizando proceso...');
                });
            })
        });
    });
});

//Evitamos callback hell ;)
function conversar(nombre, repetir, callback){
    if (repetir > 0) {
        hablar(() => {
            conversar(nombre, --repetir, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

greet('Camila', () => {
    conversar('Camila', 3, ('Camila', () => {
        console.log('Terminamos proceso')
    }));
});