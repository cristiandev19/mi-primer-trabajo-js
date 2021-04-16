+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++  OPERADORES Y CONTROLES DE FLUJO  +++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



==========================================================================

						LOS OPERADORES BASICOS 

==========================================================================

+ 	SUMMA
- 	RESTA
* 	MULTIPLICACION
/	DIVISION
%	RESTO O MODULO 
=	ASIGNACION 
== , != , === , !== , > , < , <= , >=   COMPARACION
"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
	DIFERENCIAS

	" == "		 >>> Igualdad 
	" != "		 >>> Desigualdad
	" === "		 >>> Igualdad Estricta
	" !== "		 >>> Desigualdad Estricta


	" && "		 >>> And logico
	" || "	     >>> Or logico 







==========================================================================

						CONTROLES DE FLUJO 

==========================================================================



if / else  STATEMENT


	if (condicion){
		/*
			codigo 
		*/
	}
	else{
		/*
			codigo
		*/
	}


switch STATEMENT

switch(var) {
	case :
		/* codigo */
		break;
	case :
		/* codigo */
		break;

	default:
		/* codigo */
		break;
}


for normal / forEach 


	for (var i = 0; i >= 0; i--) {
		/*
			codigo a repetir
		*/
	}





while STATEMENT


	while (condition) {
		/* codigo */
	}


do while STATEMENT


	do {
		/* codigo */
	} while (condition);




break STATEMENT


for (var i = 0; i < elements.length; i++) {
	/* codigo */
    if (condition) {
    	break ;
    	// rompe la continuidad del codigo 
}


while (condition) {
	expression
    if (condition) {
    	break ;
    	// rompe la continuidad del codigo 
    }

}



continue STATEMENT


for (var i = 0; i < elements.length; i++) {
	/* codigo */
    if (condition) {
    	continue;	 
    	// rompe la continuidad del codigo 
}


while (condition) {
	expression
    if (condition) {
    	continue;	 
    	// rompe la continuidad del codigo 
    }
}


ERRORES

En NodeJS podemos devolver errores de varias maneras. Las mas comunes son :
	|
	|-> Lanzando un excepcion, para que el codigo gestione con try/catch
	|-> Devolviendo en el callback de la llamada

Como regla general usaremos el primero (throw) en codigo sincrono, y el 
segundo (callback) en codigo ASINCRONO.

Ej. throw

openMyFile();
try{
	writeMyFile(theData);
	throw "Error";
	throw (new Error('Perdicion!'));
}
catch(e){
	handleError(e);
}
finally{
	closeMyFile();
}








