const fs = require('fs');

//usando file-system manejamos la asincronía

function leer(ruta, callback){
    fs.readFile(ruta, (err, data) =>  {
        callback(data.toString());
    });
}

leer(__dirname + '/texto.txt', console.log);

// cb == callback

function escribir (ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if(err) {
            console.error('no se pudo escribir, mi loco', err);
        } else {
            console.log('todo gud :D');
        }
    });
}

/* escribir(__dirname + '/archivo111.txt', 'NUEVO TEXTOO', console.log); */

function eliminar (ruta, cb) {
    fs.unlink(ruta, cb);
}

/* eliminar(__dirname + '/archivo111.txt', console.log); */