+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++  JSON(JavaScript Object Notation)  +++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

- Es un formato para intercambio de datos, derivado de la notacion literal de 
de objetos de JavaScript

- Se usa habitualmente para serializar objetos  o estructuras de datos

- Se ha popularizado mucho principalmente como alternativa a XML, por ser 
mas ligero que este 


===============================================================================

					CONVIRTIENDO UN OBJETO A JSON

===============================================================================


var empleado = {
	nombre : 'cristian',
	profesion : 'developer'
};

JSON.stringify(empleado);

// produce ...
'{"nombre":"cristian", "profesion":"developer"}'




===============================================================================

					CONVIRTIENDO UN JSON A OBJETO

===============================================================================


var textoJSON = '{"nombre":"cristian", "profesion":"developer"}';

JSON.parse(textoJSON);

// produce ...
Object {
	nombre: 'cristian',
	profesion : 'developer'
}









