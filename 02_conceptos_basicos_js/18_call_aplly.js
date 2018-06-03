
Metodo bind(): Es un método de todas las funciones, el cual nos devuelve una
función para ser invocada en cualquier momento. Se caracteriza por permitirnos 
definir el scope-contexto y por permitir establecer previamente los parametros

const newFunction = fun.bind(contexto, primerParametro)// Establece el scope y 
	// el-los parametros de fun

newFunction(segundoParametro) // Ejecuta fun pero con la caracteristica de que 
	// ya esta establecido el scope y los parametros. Igualmente nos permite 
	// enviarle más parametros a fun si es el caso

-Métodos call() y apply(): A diferencia de bidn(), call() y apply() ejecutan la 
función “padre” instantaneamente. De igual forma nos permiten establecer el scope 
y los parametros con la pequeña diferencia de que apply, recibe los parametros en 
uun array.

fun.call(contexto, primerParametro, segundoParametro)//Ejecuta fun en el scope
 // establecido y con los parametros enviados

fun.apply(contexto, [primerParametro, segundoParametro)//Ejecuta fun en el scope 
// establecido y con los parametros enviados en el array


// hablaremos de las funciones call y apply 

// de paramtero las veces que vamos a saludar
function saludar (veces) {
	for (let i = 0 ; i < veces  i ++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}
saludar(5) //  esto devolvera "Hola undefined undefined "
// poruqe en el contexto de esta funcion no existe this.nombre ni this.apellido

// y si creamos 
objeto.nombre = "cristian"

objeto.apellido = "sotomayor "

// ahora si nos diria que existe y saldria Hola cristian sotomayor

// pero si .. creamos

const cris = {
	nombre : "cristian"
	apellido : "sotomayor"
}

function saludar (veces) {
	for (let i = 0 ; i < veces  i ++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

// pero como le mandariamos ese objeto ? 
// con el metodo call
// lo cual le dice a la funcion que recibira sacha 
saludar.call(sacha, 3) 


// call y apply hacen lo mismo salvo que 



const cris = {
	nombre : "cristian"
	apellido : "sotomayor"
}

function saludar (veces, upperCase) {
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = upperCase ? str.toUpperCase() : str 
	for (let i = 0 ; i < veces  i ++){
		console.log(str)
	}
}

// ahora lo que hacemos es que si la mandamos true como tercer parametro 
// la oracion se pondra en mayusculas 

// con call
saludar.call(sacha, 3, true) 

// con apply
saludar.apply(sacha,[3, true])

// funcionan de la misma manera solo que apply envez de comas una un array






















