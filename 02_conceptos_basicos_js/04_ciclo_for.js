const nombre = "Cristian"
const dias = [
	"lunes",
	"martes",
	"miercoles",
	"jueves",
	"viernes",
	"sabado",
	"domingo"
]

function run () {
	const min = 5
	const max = 15 
	return Math.floor(Math.random() * (max - min) + min)
}

let totalKms = 0
const lenDays = dias.length
for (let i = 0 ; i<lenDays ; i++){
	const kms = run()
	totalKms += kms 
	console.log(`El ${dias[i]} ${nombre} corrio ${kms} kilometros `)

}


console.log(`corrio ${totalKms} en ${lenDays} dias `)




