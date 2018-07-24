//
// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const colors = require('colors');
// importaciones internas
const script_todo = require('./to-do/to-do');



// console.log(argv);

/*
para crear un todo-app necesitamos acciones:
----        node app.js <accion>        ----
- crear tarea (create)-> c
- listar tareas (read)-> r
- modificar tareas (update)-> u
- eliminar tarea (delete)-> d

para agregar una descripcion al crear una accion:
---   node app.js create -d  "descripcion"    ---

*/

let comando = argv._[0];

switch (comando) {
    case 'create':
        console.log('creating...');
        let created = script_todo.create_todo(argv.descripcion);
        console.log(created);
        console.log('completed');

        break;

    case 'read':
        console.log('listando..\n');
        let readed = script_todo.read_todo();

        for (let work of readed) {
            console.log('=========== Por hacer ============'.green);
            console.log(work.desc);
            console.log('estado: ', work.completed);
            console.log('=================================='.green);
        }
        break;
    case 'update':
        console.log('actualizando');
        let updated = script_todo.update_todo(argv.descripcion, argv.completed);
        console.log(updated);
        break;

    case 'delete':
        console.log('eliminando');
        let deleted = script_todo.deleted_todo(argv.descripcion);
        console.log(deleted);
        break;

    default:
        console.log('clave erronea');
        break;
}