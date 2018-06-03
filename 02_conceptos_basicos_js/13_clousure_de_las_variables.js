
// son las funciones que recuerdan el scope del cual fueron creadas y pueden
// acceder a las variables pertenecientes a dicho scope y ademas van a tener
// los valores que tengoan las variables en el momento que fueron llamadas


// es como un decorador en python funcion que devuelve otra funcion
function saludarFamilia (apellido) {
	return function saludarMiembroDeFamilia (nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

// a una variable se le asigna la funcion saludarfamilia con un parametro
const saludarGomez = saludarFamilia("Gomez")
const saludarAlmeda = saludarFamilia("Almeda")
const saludarPerez = saludarFamilia("Perez")
const saludarRomero = saludarFamilia("Romero")

// y a la variable se le vuelve a pasar otro parametro pero ahora este 
// ya estara dentro de la funcion saludarfamilia 
saludarGomez("Cristian")
saludarAlmeda("Cristian")
saludarPerez("Cristian")
saludarRomero("Cristian")

// problema una funcion que permita crear prefijos para las palabras 

const rePref = makePrefixer("re")

// y si
rePref("bueno") // devuelve rebueno

function makePrefixer (prefix) {
	return function addPre (str) {
		console.log(`${prefix}${str}`)
	} 
}






 