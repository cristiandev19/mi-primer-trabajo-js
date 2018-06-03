http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// como es que javascript ejecuta el codigo


// JAVASCRIPT ES UN JENGUAJE QUE SOLO EJECUTA UNA TAREA A LA VEZ 


function saludo (n) {
	console.log(`Hola ${n}`)
}

function init () {
// llamamos a la funcion saludo
	saludo("Cristian")
}

// luego llamamos a init 
init()}

// la forma que tiene js para ejecutar esto y ejecutar cualquier codigo es
// mediante una pila de compilacion (callstack) 

// algo que requiere mucho tiempo en js es por ejemplo hacer un pedido AJAX
 
==============================================================
			C  A  L  L  S  T  A  C  K
==============================================================

function multiply (a, b) {
	return a*b ;
}

function square (n) {
	return multiply(n, n);
}

function printSquare (n) {
	var squared = square (n);
	console.log(squared)
}

printSquare(4);
// vamos como en las tres funciones se llaman entre si desde abajo a arriba


OTHER_EXAMPLE => {}


function foo () {
	throw new Error("Opps");
}

function bar () {
	foo(); 
}

function baz () {
	bar(); 
}

baz();





