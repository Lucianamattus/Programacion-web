(function(){
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('botonenviar');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa tu nombre");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Completa tu email");
            e.preventDefault();
        }
    };

    var validarMensaje = function(e){
        if (formulario.mensaje.value == 0){
            alert("Completa tu mensaje");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarMensaje(e);
    };
    formulario.addEventListener("submit", validar);
}())
    