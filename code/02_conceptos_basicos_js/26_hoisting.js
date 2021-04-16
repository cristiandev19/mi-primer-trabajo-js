+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++  HOISTING  +++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Es una caracteristica especial en JAVASCRIPT


A que llamamos hacer HOISTING o que las declaraciones de JS son HOISTED
|
|--> Esto significa que el interprete va a mover al principio del contexto(scope)
	 la declaracion, manteniendo la inicializacion donde estaba


QUE SIGNIFICA ESTO ???



Ej.

var pinto = 'my value';

function pinta() {
	console.log('pinto',pinto); // my value
	// var pinto = 'local value'; // esto hara hoisting de pinto y sera undefined
}

pinta();





++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++
++++++++++++++++++++++++++
++++++++++++++++++++++++ Esto solo se aplicaba cuando se usaba solo var
++++++++++++++++++++++++++
++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++
