const fs = require('fs');
// modulo para imprimir y operar

/*
esta es la segunda: 
module.exports.crearArchivo = (base) => {
*/

// listarTabla
let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${ base } no es un numero`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            console.log(`${base} * ${i} = ${ base*i }`);
        }
    })
}



// crearArchivo
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${ base } no es un numero`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-del-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
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
    listarTabla
}