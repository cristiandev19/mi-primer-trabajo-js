+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++  O  B  J  E  C  T  ++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Su representacion es como un diccionario que contiene otras variables.
Tienen propiedades y metodos.

var object = {
	numero : 1 ,
	texto : "hola",
	esCero : function (c) {
		return c == 0;
	};
}

object.esCero(0); // True
object.texto; // "hola"
object["texto"]; // "hola"
		  |-> Esto sirve para llamar al metodo solo con el nombre

Nota 1: 
	--> Porque se usa " : " envez de " = "  ???



Como podemos ITERAR las propiedades de un objeto 

for (var mName in objet){
	if (objet.hasOwnProperty(mName)){
		console.log("La propiedad " + mName + " existe con el valor "
			+ object[mName]);
	}
}


// 		A  R  R  A  Y  S 

var array = [
	1, // number
	"hola", // string
	function esCero(c) { return	c == 0; } , // function
	{valor : "hola"} // objeto 
]; 

array[1]; // "hola"
array[2](0); // true


=============================================================================

						OPERACIONES CON ARRAYS

=============================================================================

//declaramos un array
var testArray = [1,2]

-> push    >>>> añade al final / devuelve length 
	|
	|-> testArray.push('al final');
	// testArray = [1,2,'al final']

-> unshift >>>> añade al incio / devuelve length
	|
	|-> testArray.unshift('al inicio')
	// testArray = ['al inicio',1,2,'al final']

-> pop     >>>> elimina ultimo elemento y lo devuelve
	|
	|-> var lastElement = ""  
	|-> lastElement = testArray.pop() 
	// testArray = ['al inicio',1,2] 
	// lastElement = 'al final'

-> shift   >>>> elimina primer elemento y lo devuelve
	|
	|-> var firstElement = ""  
	|-> lastElement = testArray.shift()
	// testArray = [1,2] 
	// firstElement = 'al final'

-> join    >>>> devuelve string con los elementos unidos por lo que se de como parametro
	|
	|-> var joinElements = ""
	|-> joinElements= testArray.join("")
	// testArray = [1,2]
	// joinElements = '12'


===============================================================================

							ITERANDO ARRAYS

===============================================================================


--->>> FOR NORMAL

for (var i = 0 ; i<testArray.length ; i++){
	var elemento = array[i];
	console.log(elemento);
}
	// 1
	// 2



--->>> FOR EACH 

rows.forEach(function(row)){
	console.log(row);
}






+++++++++++++++++++
++++++++++++++++++
+++++++++++++++++
++++++++++++++++
+++++++++++++++
++++++++++++++
+++++++++++++
++++++++++++
+++++++++++
++++++++++
+++++++++
++++++++
+++++++		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
++++++++
+++++++++
+++++++++++
++++++++++++
+++++++++++++
++++++++++++++
+++++++++++++++
++++++++++++++++
+++++++++++++++++
++++++++++++++++++
+++++++++++++++++++





