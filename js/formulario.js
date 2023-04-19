
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-Z]{1,20}$/, // Letras
	apellido: /^[a-zA-Z]{1,40}$/, // Letras y espacios pueden llevar acentos
	consulta: /^[a-zA-Z0-9_.+-]{1,500}$/, // 4 a 500 caracteres con espacios, numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[0-9]{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nombre: true,
	apellido: true,
	correo: true,
	telefono: true,
	consulta: true,
}

// -------------------Valida el formulario------------------- //
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "consulta":
			validarCampo(expresiones.consulta, e.target, 'consulta');
		break;
	}
}
// --------------- Valida campos del grupo Correcto e Incorrecto junto con estilo.css-----------------//
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function validarSiNumero(telefono){
	if(!/^([0-9])*$/.test(telefono))
	  alert("El valor "+telefono+" no es un número");
  }
// ---------------Envio de correo electronico-------------- //
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const consulta = document.getElementById('consulta');
    const telefono = document.getElementById('telefono');

// ---------------------Valida Campos en rojo-----------------------------------
	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.consulta && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


// Script Api mapa estatico

function findMe(){
	var output = document.getElementById('mapa');

	// Verificar si soporta geolocalizacion
	if (navigator.geolocation) {
	  output.innerHTML = "<p>Tu navegador soporta Geolocalizacion</p>";
	}else{
	  output.innerHTML = "<p>Tu navegador no soporta Geolocalizacion</p>";
	}

	//Aquí ponemos coordeandas deseadas, (así esta en la ubicación actual)
	function localizacion(posicion){

	  var latitude = posicion.coords.latitude;
	  var longitude = posicion.coords.longitude;

	  var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyAkJ6n1fHArQ30JX9Bq7dGVCgg3YGndtCw";

	  output.innerHTML ="<img src='"+imgURL+"'>";

	}

	function error(){
	  output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";

	}

	navigator.geolocation.getCurrentPosition(localizacion,error);

  }

  
  $(document).ready(function () {

	$('#send').click(function () {

	  if ($('#telefono').val().length != 9 || isNaN($('#telefono').val())) {

		$('#telefono').css('border-color', '#FF0000');

		alert('El número de teléfono debe tener al menos 9 números.');

		return false;

	  } else {

		alert('OK');

	  }

	});
  })