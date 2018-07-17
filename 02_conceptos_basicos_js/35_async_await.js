/*jshint esversion: 6*/

// con la palabra async se vuelve una funcion asincrona
// let getName = async() => {

//     // como lanzariamos un error
//     throw new Error('No existe un nombre para ese usuario');

//     return 'Cristian';
// };

// este seria el equivalente de la funcion de getName para que sea una promesa
//pero solo usamos la palabra async 
let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Cristian');
        }, 3000);

        // resolve('Diego');
    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}

// y como volvimos una funcion promesa podemos manejarla como tal
// con su "then" y "catch" respectivos
// getNombre().then(nombre => {
//     console.log(nombre);
// })
// .catch(e => {
//     console.log('Error de ASYNC', e);
// })

// luego lo que nos devolveria una promesa (Promise) que resuleve 'Cristian'
// console.log(getNombre());

saludo().then(msj => {
        console.log(msj);
    })
    .catch(e => {
        console.log('Error de ASYNC', e);
    })


/*

entonces lo que async y await nos permite es:

async : vuelve una funcion cualquiera en una funcion asincrona. De la cual podemos usar 
        sur respectivas caractiristicas como then, catch, etc

await : puede ser usada dentro de una funcion convertida a asincrona mediante async. Y 
        nos permite recibir valores de manera asincrona mediante su supuesto resolve. 
        y en caso de haber un error este debera ser atrapado ( catch ) sino no avanzara 
        el procedimiento 

*/