const fs = require('fs');
// modulo para imprimir y operar

/*
esta es la segunda: 
module.exports.crearArchivo = (base) => {
*/


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${ base } no es un numero`);
            return;
        }

        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`)
        });
    })
}

// hay varias formas de hacerlo

/* 
La primera es esta: 

module.exports = {
    // esta primero es igual a
    // crearArchivo: crearArchivo
    // esta segunda
    crearArchivo,
}
*/
module.exports = {
    // esta primero es igual a
    // crearArchivo: crearArchivo
    // esta segunda
    crearArchivo,
}