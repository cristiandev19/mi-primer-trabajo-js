
// veamos que pasa cuando llamamos al metodo bind sobre una funcion
// para esto tenemos un ejemplo con un archivo html -> index.html

<html>
<head>
	<style>
		*{
			font-size: 24px;
		}
	</style>
</head>
<body>
	<button id="boton">Off</button>
	<script src="index.js"></script>
</body>
</html>

// lo que haremos sera un botton que iga On/Off cada vez que sea presionado

// y en el index.js

// oara esto definiremos una clase llamada Toggable

class Toggable{
//el constructor recibe el element button los nombres comun son el element button
	constructor (el){
// inicializar el estado interno 
		this.el = el
// para hacer que el elemento diga algo se usa innerHtml
		this.el.innerHTML = "Off"
// y creamos otro atributo para ver si esta prendido o apagado 
		this.activated = false
// tambien debemos saber cuando pasa este evento 
// pero saldra un error porque no sabe a que this se refiere
		this.el.addEventListener("click", this.onClick.bind(this))
	}
// tambien definimos un metodo para cuando este sea apretado
// lo que hara es cambiar el texto en el boton
	onClick (){
// vamos a llamar a toggleText
// debe cambiar el estado interno 
		this.activated = !this.activated
// luego llamados a toggeText
		this.toggleText()		
	}
	toggleText (){
		this.el.innerHtml = this.activated ? "On" : "Off"
	}
}

// para enlazarlo con la etiqueta ...
const button = document.getElementById("boton")

const myBoton = new Toggable (button) 




