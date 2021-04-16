
// asi se "crea un objeto de javascript"

// ahora x = 0 no se hace sino x : 0
// x : 0  -> esto es asignar atributos   

const Punto1 = {
	x : 0,
	y : 4
}

const Punto2 = {
	x : 3,
	y : 0
}

// pasamos por parametros los objetos 
function distancia (Punto1, Punto2) {
	const x = Punto1.x - Punto2.x
	const y = Punto1.y - Punto2.y
	return Math.sqrt(x*x + y*y)
}

console.log(distancia(Punto1, Punto2))
// tambien podemos poner otro objeto para que halle la distancia 
console.log(distancia(Punto1, {x:4 , y:9}))
// {x: 4, y: 9} es una objeto tecnicamente 
// y si le pasamos {num1: 4 ,num2: 9} nos devolvera NaN porque no tiene
// los parametros que pide con los metodos X: Y: