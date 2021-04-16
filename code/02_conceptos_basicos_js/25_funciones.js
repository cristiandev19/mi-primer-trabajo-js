+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++  F  U  N  C  I  O  N  E  S  +++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Es lo que usaremos principalmente en JavaScript y con NodeJS usaremos cosas
asincronas

- Se definen con la palabra => function {}

- Opcionalmente tienen un nombre

- Pueden recibir un numero variables de argumentos y retornar cosas con la palabra return	


function accion(num1 , num2) {
	console.log(num1);
	console.log(num2);
	return "cristian";
}

accion(1); // "smith"



- La palabra return no solo devuelve un valor sino que tambien sale de la funcion 
  asi que una vez ejecutada esta el resto del codigo no seguira

  function accion(num1, num2) {
  	console.log(num1);
  	return "cristian"
  	console.log(num2); // no se ejecuta
  }


- Como invocamos una funcion ??? 
	|
	|-> escribiendo su nombre seguido de ()


Nota 1: Javascript no necesita necesariamente que le pases todos los parametros
		que pide la funcion. Entonces esto quiere decir que no saltara error 



===================================================================================

			PRINCIPALES 3 FORMAS DE CREAR UNA FUNCION EN JAVASCRIPT 

===================================================================================

- 	function declaration{}
	|
	|-> Requieren un nombre
	|-> Estan posicionadas "solo" a nivel de programa / cuerpo de la funcion
	|-> Tienen acceso al contexto de quienes las llama
	|-> Se declaran asi:
	
	function suma(num1, num2) {
		return num1+num2;
	}		


- 	function expresion{}
	|
	|-> Tiene acceso al contexto del llamante
	|-> Son expresiones, pueden ser usada donde sea que haya un valor
	|-> Pueden tener un nombre, pero solo es visible dentro de este
	|-> Se declaran asi:

	var suma = function (sum1, sum2) {
		return sum1 + sum2;
	}


- 	function object{}
	|
	|-> No tienen acceso al contexto de quien las crea, pero si al contexto global
	|-> KeyWord new es opcional
	|-> Se declaran asi:

	var muestraVars = new Function('alert(1)';'alert(2)');

	Ej.
		x = 10;
		function foo() {
		 	var y = 30;
		 	var bar = new Function('alert(1)','alert(2)')
		 } 
	








