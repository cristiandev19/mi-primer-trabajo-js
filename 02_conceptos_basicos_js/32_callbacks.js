/*jshint esversion: 6 */

// que son los callbacks ? 
// por ahora digamos que son acciones que esperan ser realizadas 


// el callback mas conocido y facil en "setTimeout" (descomente para correr)
// setTimeout( function() {
//     console.log('hola ya pasaron 3 segundos')
// }, 3000)



// EJEMPLO
// practica comun de callbacks
let getUserById = (id, callback) => {
    let user = {
            name: 'cristian',
            id
        }
        // simular que un id no existe
    if (id == 30) {
        callback(`the user with id ${ id }, dont exist at DB`);
    } else {
        callback(null, user);
    }
}

// el primer parametro en un callback suele ser un error (error, e, err)
getUserById(30, (err, user) => {
    if (er) {
        return console.log(err);
    }
    console.log('user of DB: ', user);
});