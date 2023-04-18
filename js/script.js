const form = document.querySelector('form');
const errorsContainer = document.getElementById('errors');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    errorsContainer.innerHTML = ''; // Limpia los mensajes de error anteriores

    // Validación de nombre
    if (nombre.value.trim() === '') {
        errorsContainer.innerHTML += '<p>El nombre es obligatorio.</p>';
        
    }

    // Validación de correo electrónico
    if (email.value.trim() === '') {
        errorsContainer.innerHTML += '<p>El correo electrónico es obligatorio.</p>';
    } else if (!isValidEmail(email.value)) {
        errorsContainer.innerHTML += '<p>El correo electrónico no es válido.</p>';
    }

    // Validación de mensaje
    if (mensaje.value.trim() === '') {
        errorsContainer.innerHTML += '<p>El mensaje es obligatorio.</p>';
    }

    // Si hay errores, detener el proceso
    if (errorsContainer.innerHTML !== '') {
        return;
    }

    // Envío de datos
    const data = new FormData(form);
    const response = await fetch('send_email.php', {
        method: 'POST',
        body: data
    });

    if (response.ok) {
        alert('Mensaje enviado correctamente');
        form.reset();
    } else {
        alert('Ocurrió un error al enviar el mensaje');
    }
});

function isValidEmail(email) {
    // Expresión regular para validar correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    if (/^\d+$/.test(nombre)) {
      alert("No se permiten números en el campo de nombre.");
      return false;
    }
    return true;
  }


$("#formulario_contacto").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlenght: 30
        },
        correo: {
            required: true,
            email: true,
            terminaPor: "duoc.cl",
        }



    }
})



$("#guardar").click(functiont)(); {
    if ($("#formulario_contacto").valid() == false) {
        alert("Formulario enviado"); 
        return;
       
    }

    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let correo = $("#correo").val()
    let telefono = $("#telefono").val()


}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    if (/^\d+$/.test(nombre)) {
      alert("No se permiten números en el campo de nombre.");
      return false;
    }
    return true;
  }


jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
});



function enviarFormulario() {
  alert("Formulario enviado");
}
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  // Aquí se llama a la función para mostrar el mapa con las coordenadas obtenidas
  mostrarMapa(latitud, longitud);
});
} else {
alert("Tu navegador no soporta la API de Geolocalización.");
}

function mostrarMapa(latitud, longitud) {
var coordenadas = new google.maps.LatLng(latitud, longitud);
var opcionesMapa = {
  zoom: 15,
  center: coordenadas
}
var mapa = new google.maps.Map(document.getElementById("mapa"), opcionesMapa);
var marcador = new google.maps.Marker({
  position: coordenadas,
  map: mapa
});
}





