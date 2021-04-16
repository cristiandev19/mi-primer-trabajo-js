// En javascript no existen las clases como tal 

function Punto (x, y) {
	this.x = x
	this.y = y 
// y ahora ya no tenemos que poner return this.x porque es automatico

}
// tenemos que agregar los metodos a este prototipo
// podemos ponerle el mismo nombre o podriamos hacerla anonima 
// pero mejor ponerle nombre para el debuging
Punto.prototype.desplazamientoX = function desplazamientoX(argument){
	this.x += x
};
Punto.prototype.desplazamientoY = function desplazamientoY(argument){
	this.y += y
};

Punto.prototype.distancia = function distancia(p) {
	const x = this.x - p.x
	const y = this.y - p.y

	return Math.sqrt(x*x + y*y)

};



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