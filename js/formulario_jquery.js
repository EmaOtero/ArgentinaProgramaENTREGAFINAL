

$.validator.addMethod("terminarPor", function(value, element, parametro){


    if(value.endsWith(parametro)){
        return true;
    }

    return false;

}, "Debe terminar por {0}")




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


$("#guardar").click(function)(); {
    if($("#formulario_contacto").valid() == false) {
        return;
    }
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let correo = $("#correo").val()
    let telefono = $("#telefono").val()
    
}