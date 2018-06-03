
const nameMovie = "Start Wars: El despertar de la fuerza";

const pgMovie = 13;

const personName1= "Cristian";
const personAge1 = 19;

const personName2= "Diego";
const personAge2 = 14;



// undefined es cuando un parametro no se pasa y se evalua como false	
function canWatchMovie(personName,personAge,isWithAdult) {

	if (personAge >= pgMovie){
		// console.log() y alert ()  
		alert(`${personName} can see ${nameMovie}`);
	}
	else if(isWithAdult){
		alert(`${personName} cant see ${nameMovie}`);
	}
	else{
		alert(`${personName} cant see ${nameMovie}
			have ${personAge} years old and need have ${pgMovie}`);
	}
}


canWatchMovie(personName1,personAge1);
canWatchMovie(personName2,personAge2,personName1);

