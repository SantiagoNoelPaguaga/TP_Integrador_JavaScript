document.addEventListener('DOMContentLoaded', function() {
  const btnResumen = document.getElementById('btnMostrarTotal');
  btnResumen.addEventListener('click', function(event) {
  event.preventDefault();
  borrarMensajeError();
  validarResumen();
});
});

function borrarMensajeError() {
  const mensajesDeError = document.getElementsByClassName("mensajeError");
  [...mensajesDeError].forEach(mensaje => mensaje.remove());
}

function validarResumen() {
    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const email = document.getElementById("Correo").value;
    const cantidad = document.getElementById("Cantidad").value;
    const categoria = document.getElementById("Categoria").value;

    if (nombre === "") {
      mostrarError("Nombre", "*Por favor, ingresa tu nombre");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      mostrarError("Nombre", "*El nombre solo puede contener letras");
      return false;
    }
  
    if (apellido === "") {
      mostrarError("Apellido", "*Por favor, ingresa tu apellido");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(apellido)) {
      mostrarError("Apellido", "*El apellido solo puede contener letras");
      return false;
    }
  
    if (email === "") {
      mostrarError("Correo","*Por favor, ingresa tu correo electrónico");
      return false;
    }

    if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)
    ) {
      mostrarError("Correo","*Por favor, ingresa un correo electrónico válido");
      return false;
    }
  
    if (isNaN(cantidad) || cantidad <= 0) {
      mostrarError("Cantidad","*Por favor, ingresa una cantidad válida de tickets");
      return false;
    }
  
    if(categoria === "0") {
      mostrarError("Categoria","*Por favor, ingresa una categoría válida");
      return false;
    }

    let total = calcularTotal(cantidad, categoria);

    if (!isNaN(total)) {
        document.getElementById("PagoTotal").value = "Total a Pagar: $" + total.toFixed(2);
        document.getElementById("Nombre").readOnly = true;
        document.getElementById("Apellido").readOnly = true;
        document.getElementById("Correo").readOnly = true;
        document.getElementById("Cantidad").readOnly = true;
        document.getElementById("Categoria").disabled = true;
        ocultarCandadoComprar();
        mostrarCandadoResumen();
        return true;
      } else {
        return false;
      }
  }
  
  function mostrarError(campo, mensaje) {

    const elemento = document.getElementById(campo);
    const mensajeError = document.createElement("span");
    mensajeError.className = "mensajeError";
    mensajeError.textContent = mensaje;
    elemento.parentNode.insertBefore(mensajeError, elemento.nextSibling);
  }

  function calcularTotal(cantidad, categoria) {
    let total;

    if(categoria === "1"){
        total = cantidad * 200 * 0.85;
    }
    if(categoria === "2"){
        total = cantidad * 200 * 0.85;
    }
    if(categoria === "3"){
        total = cantidad * 200 * 0.85;
    }

    return total;
  }


  document.addEventListener('DOMContentLoaded', function() {
    const btnBorrar = document.getElementById('btnBorrar');
    btnBorrar.addEventListener('click', function(event) {
    event.preventDefault();
    limpiarCampos();
  });
  });

  function limpiarCampos() {

    Swal.fire({
        title: '¿Está seguro que desea borrar todos los campos?',
        text: "Esta acción borrará todos los campos del formulario",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
            Swal.fire(
              'Los campos han sido borrados',
              'Presione OK para regresar al formulario',
              'success'
            );
            realizarBorrado();
        } else {
          Swal.fire(
            'No se borraron los campos',
            'Presione OK para regresar al formulario',
            'info'
          );
        }
      });
  }

  function realizarBorrado() {
            document.getElementById("Nombre").value = ""; 
            document.getElementById("Apellido").value = ""; 
            document.getElementById("Correo").value = ""; 
            document.getElementById("Cantidad").value = ""; 
            document.getElementById("Categoria").selectedIndex = "0"; 
            document.getElementById("PagoTotal").value = "Total a Pagar: $";
            document.getElementById("Nombre").readOnly = false;
            document.getElementById("Apellido").readOnly = false;
            document.getElementById("Correo").readOnly = false;
            document.getElementById("Cantidad").readOnly = false;
            document.getElementById("Categoria").disabled = false;
            borrarMensajeError();
            ocultarCandadoResumen();
            mostrarCandadoComprar();
  }
