const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b',
        },
        limite: {
            alias: 'l',
            default: 10,
        }
    })
    .help()
    .argv;



// cuando le pasamos argumentos por consola sin ser "flags"
// estos se guardan en un array de nombre -> "_"
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        break;

    case 'crear':
        console.log('crear');
        break;

    default:
        console.log('bandera invalida');
        break;
}

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));
//