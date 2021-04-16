

/*
setTimeout(function callback() {

},tiempo el milisegundos que esperara)
*/
setTimeout(function callback() {
	console.log("ya paso un segundo B")
},1000);

console.log("soy A")



/*
OLVIDA TODO ESTO Y VE 
|
|
|-> https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be
|
|


un cuello de botella es lo siguiente 

si hay varios procesos concatenados por decir

codigo1 llama a codigo2
codigo2 llama a codigo3
codigo3 llama a codigo4
codigo4 llama a codigo5

-> codigo1 --> "compilador"
-> codigo2 --> "compilador"
-> codigo3 --> "compilador"
-> codigo4 --> "compilador"
-> codigo5 --> "compilador"


COMPILADOR

-> ejecuta --> codigo5
-> ejecuta --> codigo3
-> ejecuta --> codigo2
-> ejecuta --> codigo1
-> ejecuta --> codigo4


Y si entre ellos no se llaman

Mandas a ejecutar a :

codigo1, codigo2, codigo3, codigo4, codigo5 


codigo1 --> compilador -->  procesa_condigo1 --> desechado_codigo1

codigo2 --> compilador -->  procesa_condigo1 --> desechado_codigo2

codigo3 --> compilador -->  procesa_condigo1 --> desechado_codigo3

codigo4 --> compilador -->  procesa_condigo1 --> desechado_codigo4

codigo5 --> compilador -->  procesa_condigo1 --> desechado_codigo5


*/
																																							


