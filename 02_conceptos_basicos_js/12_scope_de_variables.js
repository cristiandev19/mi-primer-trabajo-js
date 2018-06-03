/*
scope y clousures


scope -> conjunto de variables y funciones al cual nosotros podemos acceder
		en una determinada linea 

clouse -> son funciones que recuerdan el scope (el entorno) en el cual 
		 fueron creadas y podemos acceder a todas las variabels y 
		 funciones que pertenecen a ese scope pero con los valores que tienen
		 esas variables y funciones al momento que las invocamos  


si declaramos una variable 
*/
var nombre = "Cristian"

function saludar () {
	alert(`Hola ${nombre}`)
}

saludar() // y funcionara x

// y que pasaria si..
var nombre = "Cristian"

/* recibe como parametro nombre
cual tomaria la variable que esta como parametro o  la de scope global */
function saludar (nombre) {
	alert(`Hola ${nombre}`)
}

saludar("Diego") // y nos devolvera "Diego" y no "Cristian"
console.log(nombre) // y nos da cristian


// incluso si 
function saludar () {
	var nombre = "Diego"
	alert(`Hola ${nombre}`)
}

saludar() // y nos devolvera "Cristian" ahora 
console.log(nombre) // y nos da cristian

// ahora
function saludar () {
/*si quitamos el var la variable nombre buscara en toda la funcion por la
variable nombre, y cuando no la encuentre buscara en un scope mas arriba
y porque la variable global es var "Cristian" ahora seria "Diego" porque 
tendra acceso a ella*/
	nombre = "Diego"
	alert(`Hola ${nombre}`)
}

saludar() // y nos devolvera "Diego" 
console.log(nombre) // y nos da Diego ahora




function saludar () {
// que pasaria si dentro del if
	if (true){
		let nombre = "Diego"
	}
	// si imprimiria igual Diego poruqe el scope de var seria toda la funcion
	alert(`Hola ${nombre}`)
}

saludar() // y nos devolvera "Diego" 
console.log(nombre) // y nos da Diego ahora
/*
por el hoisting todas la declaraciones con la palabra var se suben
ala primera linea del scope en este caso la funcion 


asi que en javascript como en cualquier otro lenguaje queremos evitar
eso que el scope se salga de control por esto se agrego un nuevo tipo
de variable el cual es let este si respeta el scope 
asi que no olvidar dentro de una funcion hay un scope , dentro de un if
hay otro scope dentro de un bucle hay otro scope y asi sucesivamente
*/

