const argv = require('./config/yargs').argv;

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b',
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//         }
//     })
//     .command('crear', 'crea la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b',
//         },
//         limite: {
//             alias: 'l',
//             default: 10,
//         }
//     })
//     .help()
//     .argv;
// required
// const fs = require('fs');
/*
hay 3 tipos de require:
- cuando importamos un paquete que ya existe por nativamente en node
- cuando importamos un paquete que a sido creado por la comunidad 
- cuando importamos un paquete que nosotros hemos creado
*/

// el .js en el require es opcional 
// const crearArchivo = require('./multiplicar/multiplicar.js');
// const crearArchivo = require('./multiplicar/multiplicar');

// destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');


// let base = 'hola';

/* si usas  
console.log(module);
-> modulo es un objeto global que se puede usar en toda la aplicacion

imprime lo siguiente:
Module {
    id: '.',
    exports: {},
    parent: null,
    filename:
     '/home/cris19/Studying/Javascript/node_de_cero_experto/03_bases_de_node/app.js',
    loaded: false,
    children: [],
    paths:
     [ '/home/cris19/Studying/Javascript/node_de_cero_experto/03_bases_de_node/node_modules',
       '/home/cris19/Studying/Javascript/node_de_cero_experto/node_modules',
       '/home/cris19/Studying/Javascript/node_modules',
       '/home/cris19/Studying/node_modules',
       '/home/cris19/node_modules',
       '/home/node_modules',
       '/node_modules' ] }
  
*/

/*
existe un objetp llamado process, podemos testear estas lineas
console.log(process);
console.log(process.argv); // esto devuelve dos cosas 
// la ubicacion de node y del archivo que usamos

// pero que nos permite ver .argv ??

pues los argumentos que le pasemos desde linea de comandos
por ejempla

node <nombre-del-archivo js> --numero=4 a b c d
// estos argumentos pasaran a ser parte del objeto 
// creado por argv

*/

// entonces una forma de recibir la base desde linea de comandos
// let argv2 = process.argv;
// console.log(argv2);


// para visualizar que hace yargs
//console.log(argv);


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// para seleccionar parametros
let comando = argv._[0];
// console.log(argv);

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp));
        break;
    case 'crear':
        // console.log('crear...');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('bandera invalida');
        break;
}







// cual es el problema ? las validaciones,  porque? saltarian 
// demasiados posibles errores y esto seria complicado de mantener 

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));