

const Punto1 = {
	x : 0,
	y : 4,
	// this es como self de python que diferencia las variables del entorno
	// externo de las que esten dentro del metodo
	moverEnX : function(x) { this.x += x },
	moverEnY : function(y) { this.y += y }
}

const Punto2 = {
	x : 3,
	y : 0
	moverEnX : function(x) { this.x += x },
	moverEnY : function(y) { this.y += y }
}

function distancia (Punto1, Punto2) {
	const x = Punto1.x - Punto2.x
	const y = Punto1.y - Punto2.y
	return Math.sqrt(x*x + y*y)
}

