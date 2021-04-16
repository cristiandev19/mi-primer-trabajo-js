
Les comparto la definición de los métodos que a utilizado Sasha en este video,
 a mi me ayudo mucho para entender mejor.

reduce:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_
		globales/Array/reduce
push:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_
		globales/Array/push
map:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_
		globales/Array/map
filter:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_
		globales/Array/filter


// haremos una funcion para calcular la suma de elementos
suma ( 23, 23, 23, 24252, 52, 5252, 5)
// pero tiene n numeros como hacemos para que no tengamos que crear una 
// funcion con los argumentos exactos porque bien podrian ser 1000

// la notacion es tres puntos (...) y el nombre de la variable que queramos
function suma (...numbers) {
	console.log(numbers) //y nos devuelve un array de los numeros que le pasamos 
}

// ahora para que se sumen

function suma (...numero) {
	let acumulador = 0
	for (let i = 0; i < numero.length; i++) {
		acumulador += numero[i]
 	}
 	return acumulador
}

suma ( 23, 23, 23, 24252, 52, 5252, 5)
// pero hay una mejor forma la cual es
// con el metodo reduce
function suma (...numeros) {
// ste metodos acumula un valor sobre un elemento
// reduce recibe como parametro una funcion
	return numeros.reduce(function (acumulador, numero) {
		acumulador += numero 
// y como segundo parametro el valor inicial del acumulador que es 0 en este
// caso
	}, 0)
}

suma ( 23, 23, 23, 24252, 52, 5252, 5)


// ahora para devolver el doble de cada uno entregado
// para agregar un elemento a un array usamos el metodo push()

// escriito medianamente correcto

function doble (...numero) {
	let acumulador = []
	for (let i = 0; i < numero.length; i++) {
		acumulador.push(numero[i]*2)
 	}
 	return acumulador
}
doble ( 23, 23, 23, 24252, 52, 5252, 5)



// escrito de una mejor manera

function doble (...numeros) {
// usaremos ahora map recibe una funcion que se ejecuta para cada elemento
	const result = numeros.map(function (numero) {
		return numero * 2
	})
// map no modifica el array en si, sino que devulve un valor cambiado
// que debemos guardar 
	return result 	
}

suma ( 23, 23, 23, 24252, 52, 5252, 5)
// ahora en una arrow function

function doble (...numeros) {
	// podemos hacer que solo retorne el valor cambiado en vez de hacer otra var
	return numeros.map(numero => numero * 2)

suma ( 23, 23, 23, 24252, 52, 5252, 5)

// otro metodos que existe sobre los arrays
// filter

function par (...numeros) {
	numeros.filter(function (numero) => numero % 2 == 0 )
}


// metodos en un array

reduce(callbackfn: Function, initialValue?: any) 
-> acumula un valor sobre un elemento

map(callbackfn: Function, thisArg?: any)
-> aplica una funcion a cada elemento

filter(callbackfn: Function, thisArg?: any)
-> aplica una funcion sobre toda la lista 











