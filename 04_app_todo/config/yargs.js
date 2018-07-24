
//
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer',
}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como pendiente o completado una tarea',
}


const argv = require('yargs')
    .command('create', 'Crea una tarea', {descripcion})
    .command('read', 'Lista las tareas', {})
    .command('update', 'Actualiza una tarea', {descripcion,completado})
    .command('delete', 'Elimina una tarea', {descripcion})
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