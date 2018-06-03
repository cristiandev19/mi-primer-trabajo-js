

// dice la palabra clase pero funciona como un prototipo
class Punto (x, y) {
// creamos un constructor tipo __ini__
	constructor(x,y){
		this.x = x
		this.y = y
	}

	desplazamientoX(x){
		this.x += x
	}
	desplazamientoY(y){
		this.y += y
	}

	distancia(p) {
	const x = this.x - p.x
	const y = this.y - p.y
	return Math.sqrt(x*x + y*y)
	}
}



const p1 = new Punto (0, 4)
const p2 = new Punto (3, 0)

console.log(p1.distancia(p2))
p1.desplazamientoX(4)
console.log(p1.distancia(p2))
p1.desplazamientoY(-2)
console.log(p1.distancia(p2))
p2.desplazamientoX(2)
console.log(p1.distancia(p2))
p2.desplazamientoY(-3)
console.log(p1.distancia(p2))
