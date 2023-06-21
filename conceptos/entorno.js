//Variables de entorno
let nombre  = process.env.NOMBRE;

console.log(`Hola, ${nombre}!`);

/* 
Cuando ejecutamos en terminal:
node conceptos/entorno.js --> Hola, undefined!
NOMBRE=Camila node conceptos/entorno.js --> Hola, Camila!
 */

let nombre2 = process.env.OTRO_NOMBRE || 'Sin nombre'; //Valores por defecto
let web = process.env.WEB || 'No tienes web';
console.log(`Hola, ${nombre2}! Tu web es ${web}`);

/* 
node conceptos/entorno.js --> Hola, Sin nombre! Tu web es No tienes web
OTRO_NOMBRE=Veronica WEB=loquesea.com node conceptos/entorno.js --> Hola, Veronica! Tu web es loquesea.com
*/