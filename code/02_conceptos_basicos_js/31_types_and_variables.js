+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++  TIPOS Y VARIABLES  +++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


================================================================================

							T  I  P  O  S

================================================================================


----->>>> TIPOS PRIMITIVOS

Usa tipado dinamico (como python)

Para ver las variables vamos a usar --> typeof()

JavaScript tiene -->  5 TIPOS PRIMITIVOS 

	boolean   -> True / False
	null      -> No hay valor
	undefined -> No definidas / Que no han tenido ningun valor 
	number    -> Enteros ( 16 decimales )
	string    -> Cadenas de texto ""/''

Nota 1: Despues de los 5 primitivos todos son Objetos ( funciones , arrays , etc )	

Nota 2: Diferencia entre null & undefined

		Todas las variables que no han sido definidas 
							"Ó" 
		Que han sido definidas sin asignarles valor
			  Son de tipo  -->  undefined


		Por el contrario null es un valor que indica 
			  Que la variable esta --> "Vacia" 

		Ejm: 
			var valor = null // ¿De que tipo es valor?
			--> valor es de tipo Object con valor null

----->>>> OBJETOS

Los cuales son : String , Number , etc

Nota 1: Peeeeeeroooo momento >> number y Number / string y String son distintos ???
							  
	---> Pues si y se diferencian en como podemos usarlos
	  --> Porque los primitivos no tienen metodos y 
	  	  y los objetos si 
	  --> Entonces cuando llamamos a un metodo de un primitivo
	  	  el interprete es cambiar el primitivo por su analogo
	  	  en objeto
	  	  -->> "texto de prueba".split(' '); //[texto,de,prueba]  

	EJEMPLO CON String
		--> var objectString = new String("thing"); 
			typeof(objectString); // object
			console.log(objectString);
			/* String {0: "t", 1: "h", 2: "i", 3: "n", 4: "g", length: 6 
			[[PrimitiveValue]]: "thing"	} */

		--> var stringOnly = "This is only a primitive string";
			typeof(stringOnly); // string
			console.log(stringOnly);
			/*This is only a primitive string*/



================================================================================

								VARIABLES 

================================================================================

Las variables se crean con 3 tipos basicos :
	
	var   -> 
	let	  ->
	const ->

Para declarar variables se usa camelCase  


-EJEMPLOS :

Tipado dinamico

	var numero  =  100 
	typeof(numero)	// Retorna number

	numero = "esto es un numero"
	typeof(numero) // Retorna string 









