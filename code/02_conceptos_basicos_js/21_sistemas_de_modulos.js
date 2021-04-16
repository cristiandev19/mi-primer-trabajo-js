
Que es un modulo en javascript?

Básicamente un modulo es un paquete de codigo. Un modulo es un pedazo de 
código encapsulado que se encarga de resolver alguna cosa en particular.

Las razones por las cuales nosotros vamos a querer escribir un modulo son 
dos, la primera es encapsulamiento, todo lo que pasa en un pedazo de codigo 
tiene que ser local a ese pedazo de codigo, de esa manera cada parte del 
codigo se hace responsable de cumplir una tarea. NO es que hacemos un modulo 
que hace un monton de cosas , sino que cada modulo debe ser pequeño y 
encargarse de una sola responsabilidad.
La segunda razon por la cual nosotros queremos escribir un modulo son las 
dependencias.

Como crear un modulo

Existen varias manera de escribir un modulo, como por ejemplo con commonjs, 
amd, y el nuevo metodo de ecmascript 2015.
La manera de crear modulos usando el metodo de ecmascript 2015 es la manera 
mas utilizada y mas facil de implementar. Basicamente hacemos import y export 
en cada modulo. Por ejemplo si tenemos un modulo que se llama cuadrado que 
sirve para calcular cosas de un cuadrado podemos utiliar este modulo en otro 
modulo importandolo


// distintas fomras de escribir modulos 


razones por las cuales vamos a querer escribir un modulo son 2:

1. El encapsulamiento , basicamente todo lo que pasa en un pedazo
	de codigo debe ser local a ese pedazo de codigo, y cada parte de 
	ese codigo se hace responsable de cumplir una tarea y la cumple 
	bien. cada modulo es peuqño y se encarga de una sola responsabilidad

2. Son las dependencia , nosotors como programadores, no vamos a 
	escribir todo el codigo de nuestra aplicacion. De hecho si estamos 
	pensando en hacer una app web no tenemos porque estar pensando en 
	todo el codigo fuente de node , npm ,etc 

NOTA : Que es un modulo ?
	|
	|-> un paquete de codigo que puede tener dependencias de un 
	|	codigo fuente 
	|
	|-> angular es un modulo , react es un modulo , jquery es un modulo
	|  
	|-> hay modulos que son mas bien frameworks como vue.js   

// otro sistemas de modulos es commonJS 

// los mas faciles de usaras son los modulos de ECMAScript 2015

con el 

import triangulo from  "triangulo"

export function area (x) {
	return x * x
}








