//
const fs = require('fs');
// const colors = require();

let list_todo = [];


const load_db = () => {
    try {
        list_todo = require('../db/data.json');
    } catch (error) {
        list_todo = [];
    }
    // en este lenguaje con solo hacerle un require a un archivo json
    // este nos ĺos serializa y lo transforma a un objeto js
    // console.log(data);
}

const save_db = () => {
    // debemos pasar la lista (list_todo) a un json y js nos permite eso
    let data = JSON.stringify(list_todo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('hubo un error', err);
    });

}


const create_todo = (desc) => {
    let todo = {
        desc: desc,
        completed: false
    };

    load_db();

    list_todo.push(todo);
    save_db();
    return todo;
}

const read_todo = () => {
    load_db();
    return list_todo;
}

const update_todo = (desc, completed = true) => {
    load_db();
    let idx = list_todo.findIndex(tarea => tarea.desc === desc)
    if (idx >= 0) {
        console.log(completed);
        list_todo[idx].completed = completed;
        save_db();
        return true;
    } else {
        return false;
    }
}

const deleted_todo = (desc) => {
    load_db();
    // let idx = list_todo.findIndex(tarea => tarea.desc === desc);
    // como borrar un elemento con filter
    // la funcion filter regresa un numero arreglo solo con los valoes que pasen la condicion
    let new_list_todo = list_todo.filter(tarea => tarea.desc !== desc)
    // list_todo.slice(idx - 1, idx + 1)

    if (new_list_todo.length === list_todo.length) {
        return false;
    } else {
        list_todo = new_list_todo;
        save_db();
        return true;
    }
}

module.exports = {
    create_todo,
    read_todo,
    update_todo,
    deleted_todo
}