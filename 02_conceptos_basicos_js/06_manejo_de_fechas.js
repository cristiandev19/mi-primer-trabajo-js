// 18 de enero de 2018

// 18 01 2018

// En javascript las fechas son asi creamos un objeto de tipo date
// new Date( año , mes - 1 , dia)
const nacimiento = new Date (1998, 11, 19)

// llena hoy con la fecha actual
const hoy =	new Date ()


const tiempoTranscurrido = hoy - nacimiento 
// tiempoTranscurrido sera devuelto en milisegundos
// y para segundos  tiempoTranscurrido / 1000 y asi sucesivamente

// metodos de fechas 
const proximo = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())
// getDay nos dice el indice del dia que pedimos 
// domingo  : 0
// lunes    : 1
// martes   : 2
// miercoles: 3
// 		. . . 

// diferencia entre parametros y argumentos
// cuando los enviamos son argumentos  

