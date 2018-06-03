let { getUser } = require('./usuarios/usuario').default;

console.log('Start of the program');

getUser(1, function(usuario1) {
    console.log(usuario1);
});

getUser(2, function(usuario2) {
    console.log(usuario2);
});

console.log('Hola mundo!');