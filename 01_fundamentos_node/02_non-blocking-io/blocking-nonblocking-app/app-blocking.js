let { getUserSync } = require('./usuarios/usuario').default;
// getUserSync es una instruccion que demora 3segundos
// simulando una peticion de DB 

console.log('Start of the program');

let usuario1 = getUserSync(1);
console.log('Usuario1: ', usuario1);

let usuario2 = getUserSync(2);
console.log('Usuario2: ', usuario2);

console.log('Hola mundo!');