// Otra forma de crear objetos con Object.create(): En la clase anterior usábamos
//  una función para crear objetos. Hay otra forma diferente que usa un objeto 
//  literal para la creación de otros objetos que heredan su características.:

const objetoPadre = {
  init: function init (x,y){ // Método para asignación de atributos
    this.name = x;
    this.age  = y;
  },
  metodoA: function metodoA(newX) { // Método declarado dentro del objeto padre
    this.name = x
  },
}
let objetoHijo = Object.create(objetoPadre) // Creación del objeto
objetoHijo.init("Cristian", 18)  // Asignación de los atributos del objeto hijo

// Es importante darnos cuenta de dos cosas:

//     Métodos: Los métodos, a diferencia de la forma anterior, si pueden 
//     ser declarados dentro del objeto padre
//     Init: Luego de crear el objeto Hijo es necesario “inicializarlo” 
//     haciendo uso del método init para asignar correctamente el valor de 
//     los atributos al nuevo objeto. El método init resulta ser el 
//     constructor de nuesto objeto.


// original del curso
const Punto = {
	init     : function init(x,y) {
		this.x = x;
		this.y = y;
	},
	moverEnX : function moverEnX(x) {
		this.x +=x;
	},
	moverEnY : function moverEnY(y) {
		this.y += y;
	},
	distancia: function distancia(p) {
		const x = this.x - p.x,
			    y = this.y - p.y;

		returnMath.round( Math.sqrt( (x * x) + (y * y)  ).toFixed(2) );
	}
}

const p1 = Object.create(Punto),
		  p2 = Object.create(Punto);

			p1.init(0, 4);
			p2.init(3, 0);

console.log( p1.distancia(p2) );
p1.moverEnX(10);
console.log( p1.distancia(p2) );
p2.moverEnY(-4);
console.log( p1.distancia(p2) );
