//
const argv = require('yargs')
    .command('create', 'Crea una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        },
    })
    .command('read', 'Lista las tareas', {

    })
    .command('update', 'Actualiza una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por modificar',
        },
        completado: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Marca como pendiente o completado una tarea',
        }
    })
    .command('delete', 'Elimina una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por BORRAR',
        }
    })
    .help()
    .argv;

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
//     .command('crear', 'crea la tabla de multiplicar', opts)
//     .help()
//     .argv;

/*
comando create 'crear un elemento '

comando update 'actualiza'
*/

module.exports = {
    argv
}