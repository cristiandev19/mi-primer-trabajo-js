// que es la palabra this y como funciona 

class Persona {
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
// tambien se puede hacer esto en vez de predefinir el argumento amigos = []
// podemos  poner 	this.amigos = amigos || []
	}

	listarAmigos(){
		// una solucion elegante seria 
		const _this = this // le mandamos todos los parametros del constructor
		// const name = this.nombre
		this.amigos.forEach( function(amigo) {
		console.log(`Hola mi nombre es ${_this.nombre} y mis amigos son ${amigo}`)
		});
	}
}

const cristian = new Persona("Cristian",["niuton","packgelo","yesenia"])

// otra solucion que existe es la siguiente 

class Persona {
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos(){
	// dejar la palabra this -> pero como sabemos this ahora es undefined 
	// en js existe un metodo llamada bind que tienen todas la funciones 
	// que sirve setear el valor de this para esa funcion (get y set)
	// nos sirve para definir el contexto de esa funcion
		this.amigos.forEach( function(amigo) {
		console.log(`Hola mi nombre es ${_this.nombre} y mis amigos son ${amigo}`)
		}.bind(this));

// a esta funcion la podemos tomar como un objeto y poner un .bind 
// al metodo bind le podemos decir a quien queremos que le haga referencia 
// lo que tenemos que pasar como parametro (aunque sea raro) no es _this
// sino que defrente podemos pasarle this 
	}
}

const cristian = new Persona("Cristian",["niuton","packgelo","yesenia"])


//  ahora en el caso de una arrow function

	listarAmigos(){
// js cuado definimos una arrow function dentro del cuerpo de esta funcion
// this va a tomar el valor que tiene this fuera del contexto en el cual fue
// declarada la funcion
		this.amigos.forEach( (amigo) => {
		console.log(`Hola mi nombre es ${this.nombre} y mis amigos son ${amigo}`)
		});
	}
}

const cristian = new Persona("Cristian",["niuton","packgelo","yesenia"])


// entonces como podemos ver en estos casos lo mejor que podemos hacer es 
// usar las arrow functions s

