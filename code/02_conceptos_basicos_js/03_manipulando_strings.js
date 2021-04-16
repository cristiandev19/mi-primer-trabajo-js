// inventado un idioma segun una regla

// si acaba con ar ->> se eliminara
// si empieza con z ->> se reemplaza las dos ultimas letras por pe  
// si tiene 10 >= letras ->> se parte por la mitad con un - 
// si la palabra es un palindromo ->> se ignora todo y se reemplaza
//									 intercalando Mayusuculas y minusculas

function newLanguage (str) {
	let translation = str

	
	const reverse = (str) =>	str.split("").reverse().join("")
// split () el argumento separa cada letra por el argumento pasado
// y se transforma en un array y un array si tiene metodo de reverse
// y con join() lo unimos el argumento nos dice segun que unir  

// si es palindromo
	
	function minMay (str) {
		const len = str.length()
		let translation = ""
		let capitalize = true 
		for (let i = 0; i < len; i++) {
			const char = str.charAt(i) 
	// condicion en una sola linea -> el primero si es verdad y el segundo else
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize

		}
		return translation
	}

	if (str == reverse(str)){
// con este return no se ejecutaria el de abajo pues solo se ejecuta un return 
// por funcion
		return minMay(str)
	}


// primero implementaremos en "ar"
// toLowerCase() no modifica el string,sino crea una copia de este y lo cambia
	if (str.toLowerCase().endsWith("ar")) {
		translation = str.slice (0, -2); 
	} 

// agregar pe
	if (str.toLowerCase().startsWith("z")) {
		translation += "pe";
	}

// 10 letras
const len = translation.length
	if (len >= 10){
		const firstHalf = translation.slice(0, Math.round(len / 2))
		// si no le mandamos parametro esto va hasta el final
		const secondHalf = translation.slice(Math.round(len / 2))
		// transformamos el string pasandole `` como valor que es otro string
		translation = `${firstHalf}-${secondHalf}`
	}



	return translation;
}


console.log(newLanguage("programar"))
console.log(newLanguage("zarpar"))
console.log(newLanguage("abecedarios"))
console.log(newLanguage("anitalavalatin"))