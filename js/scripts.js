/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function initMap() {
    var mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }


  function enviarFormulario() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Construir el contenido del correo electrónico
    var cuerpoMensaje = "Nombre: " + nombre + "\r\n" +
                        "Email: " + email + "\r\n" +
                        "Mensaje: " + mensaje;

    // Abrir el cliente de correo predeterminado del usuario con el contenido del correo electrónico
    window.location.href = "mailto:cristianjfarina@gmail.com" + "?subject=Formulario de Contacto" + "&body=" + encodeURIComponent(cuerpoMensaje);
  }

  function validarFormulario() {
    // Obtén los valores de los campos del formulario
    var campo1 = document.getElementById('nombre').value;
    var campo2 = document.getElementById('apellido').value;
    var campo3 = document.getElementById('correo').value;
    var campo4 = document.getElementById('telefono').value;
    var campo5 = document.getElementById('consulta').value;
    // ... continúa con los demás campos del formulario
  
    // Realiza la validación de los campos según tus criterios
    if (campo1 === '') {
      alert('El campo 1 es obligatorio.');
      return false; // devuelve false para prevenir el envío del formulario
    }
    if (campo2 === '') {
      alert('El campo 2 es obligatorio.');
      return false; // devuelve false para prevenir el envío del formulario
    }
    if (campo3 === '') {
      alert('El campo 2 es obligatorio.');
      return false; // devuelve false para prevenir el envío del formulario
    }
    if (campo4 === '') {
      alert('El campo 2 es obligatorio.');
      return false; // devuelve false para prevenir el envío del formulario
    }
    if (campo5 === '') {
      alert('El campo 2 es obligatorio.');
      return false; // devuelve false para prevenir el envío del formulario
    }
    // ... continúa con las validaciones de los demás campos del formulario
  
    // Si todos los campos son válidos, puedes enviar el formulario
    // o realizar cualquier otra acción que desees
    // ...
    return true; // devuelve true para permitir el envío del formulario
  }
  
  