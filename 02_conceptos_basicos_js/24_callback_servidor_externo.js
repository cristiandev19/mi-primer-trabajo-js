																																																																																																																																																																																																																																																																																																											function get(URL, callback){
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE){
			if (this.status === OK){
				// todo ok
				callback(null, this.responseText)
			} else {
				// hubo un error
				callback(new Error('Se produjo un error al realizar el request:${this.status}'))
			}
		}
	}

	xhr.open ('GET',URL);
	xhr.send(null);
}

function_handleError(err){
  console.log(`Request failed: ${err}`)
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke){
	// if(err) return console.log('Request failed: ${err}')
	if (err) return _handleError(err)
	
	get(luke.homeworld, functiononHomeWorldResponse(err, homeworld){
		if (err) return _handleError(err)
		
		luke.homeworld = homeworld
		console.log('${luke.name} nació en ${luke.homeworld.name}')	
	
	// console.log('Request succeded')
	// console.log('luke', luke)
})






