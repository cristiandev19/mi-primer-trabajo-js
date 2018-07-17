// required
const fs = require('fs');
/*
hay 3 tipos de require:
- cuando importamos un paquete que ya existe por nativamente en node
- cuando importamos un paquete que a sido creado por la comunidad 
- cuando importamos un paquete que nosotros hemos creado
*/

let base = 3;
let data = '';

for (let i = 0; i <= 10; i++) {
    data += `${base} * ${i} = ${ base*i }\n`;
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file app-example1.txt has been saved!');
});

crearArchivo(base)
    .then(archivo => console.log(`archivoo creado: ${ archivo }`));