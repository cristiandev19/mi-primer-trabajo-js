
IIFE -> que son ? 

Inmediatly Invoked Function Expresion

nos permite ... a esta funcion

const nombre = "Cristian" 

function saludar (nombre) {
 	console.log(`Hola ${nombre}`) 
} 	

saludar()

agregarle parentesis 
y luego ponerle otras parentesis para llamarla, osea se llama a si misma
y ni bien se ejeucte el codigo
const nombre = "Cristian"

(function saludar (nombre) {
 	 	console.log(`Hola ${nombre}`) 
})()

pero esto tiene un problema el cual es que te dira Cristian no es una funcion
poruqe ? porque piensa que todo es una funcion .... de esta manera
 const nombre = "Cristian" (function saludar (nombre) {
 	 	console.log(`Hola ${nombre}`) 
})()

entonces como hariamos para que no nos salga este error ? tendremos que 
decirle a js que (function saludar (nombre) {}) esta en una linea distinta
a const nombre = "Cristian" con un ( ; ) entonces le tendremos que poner 
un punto y coma para que js diferencie y la mayoria de desarrolladores
pone el ( ; ) asi 


const nombre = "Cristian"

;(function saludar (nombre) {
 	 	console.log(`Hola ${nombre}`) 
})()



// Carpe diem:

// ¿Lenguaje fuertemente tipado?
// ¿Buena práctica? ¿Mala práctica?
// ¿strict mode?¿IIFE?
// ¿scope?

// Pienso que JS tiende a contentar a todos, pero en su esfuerzo ninguno termina 
// contento. En general JS es un lenguaje en el que cada uno encuentra la manera 
// más cómoda de programar, el problema radica es que es difícil de mantener.

// Si cada programador muestra su personalidad (alias gusto) en el código, para 
// otro programador que tome la posta, le será cuesta arriba porque no sólo tiene 
// que interpretar el código, sino también tiene que decifrar la personalidad del 
// primero.

// Las arrow functions lucen extremadamente “pro”, pero el código pierde 
// legilibilidad. Es “nice” tener la opción de colocar “,” al final de cada 
// sentencia, pero es un ápendice anacrónico de una época pretérita, cuando 
// los compiladores eran tan primitivos que los programadores estaban obligados 
// a colocar un caracter para separar cada sentencia.

// Pero porqué leguanjes como C, Fortran, Java, JS, etc…, mantienen aspectos que 
// ya debieron haber desparecido, la explicación es sencilla, “los programadores”, 
// o sea se hace, nosotros. Mientras veamos que el código debe reflejar la 
// diversidad de nuestras personalidades y realidades vitales (como si fueramos 
// Cervantes), nunca estaremos contentos con ningún lenguaje.






