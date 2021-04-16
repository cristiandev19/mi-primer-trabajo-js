// minimo que podio atacar 5 y max 12 

let nameGoku ="Goku"
let nameSuperman = "Superman"

let lifeGoku = 100
let lifeSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12 


let winner = ""
turnTohit = true

const keepAlive = () =>	lifeGoku > 0 && lifeSuperman > 0

const calculateHit = () => Math.floor((Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER))


let round = 0
// true goku atack
function afterHit (bool, atack) {
	if (bool){
		lifeSuperman -= atack
		console.log(`${nameSuperman} actually have ${lifeSuperman} points of life`)
	}
	else{
		lifeGoku -= atack
		if(lifeGoku > 0){
			console.log(`${nameGoku} actually have ${lifeGoku} points of life`)
		}else{
			console.log(`${nameGoku} actually have 0 points of life`)		
		}
	}
}

while(keepAlive()){
	round++
	console.log(`Its the round ${round}`)
	const atackGoku = calculateHit()
	const atackSuperman = calculateHit() 
// la variable se crea cada vez por esto cada vez que pasa el bucle
// se reasigna el valor por la funcion 
	if(atackGoku > atackSuperman){
		console.log(`${nameGoku} atack ${nameSuperman} with a punch of ${atackGoku} points`)
		turnTohit = true
		afterHit(turnTohit, atackGoku)
	}
	else if(atackGoku == atackSuperman){
		console.log(`Anyone hit this round`)
		continue;
	}
	else{
		console.log(`${nameSuperman} atack ${nameGoku} with a punch of ${atackSuperman} points`)
		turnTohit = false
		afterHit(turnTohit, atackSuperman)
	}
}

const whoWin = (lifeSuperman) => lifeSuperman>0 ? "Superman" : "Goku"

console.log(`${whoWin()} win`)

