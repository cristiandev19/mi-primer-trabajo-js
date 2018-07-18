# Usando el paquete Yargs

Como funciona Yargs ? O que hace ?
Un ejemplo:
```js
const argv = require('yargs').argv;
let argv2 = process.argv;
console.log(argv);
console.log(argv2);
```
y su respectiva llamada por consola
```console
node <nombre-de-la-app> --var1 12 --var2 42
```
Y para ser formales, cuando usamos --var1 o --var2 son llamados **flags** y mediante esto trabajara yargs.
```js
// respuesta del paquete yargs 
{ _: [], var1: 12, var2: 42, '$0': 'app' }
// respuesta extraida de "process"
[ '/usr/bin/node',
  '/home/cris19/Studying/Javascript/node_de_cero_experto/03_bases_de_node/app',
  '--var1',
  '12',
  '--var2',
  '42' ]
```

Como podemos ver el paquete yargs separa los argumentos señalados por banderas dentro de un JSON.

Documentacion oficial - [npm yargs](https://www.npmjs.com/package/yargs)

El ejemplo completo de esto estara en [app.js]() dentro de 03_bases_de_node. Pero la parte interesante es esta:
```js
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
    .help() //y ver como yargs nos apoya con el help
    .argv;
```
Y si queremos probarlo por consola:
```console
node <nombre-del-archivo> listar --help
```
Y nos devuelve
```console
app listar

Imprime en consola la tabla de multiplicar

Options:
  --version     Show version number                        [boolean]
  --help        Show help                                  [boolean]
  --base, -b                                              [required]
  --limite, -l                                         [default: 10]
```

