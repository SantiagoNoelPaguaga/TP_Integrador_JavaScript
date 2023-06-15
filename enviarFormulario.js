document.addEventListener('DOMContentLoaded', function() {
    const btnComprar = document.getElementById('Comprar');
    btnComprar.addEventListener('click', function(event) {
    event.preventDefault();
    enviarFormulario();
  });
  });

function enviarFormulario() {

    const nombre = document.getElementById("Nombre").value;
    const apellido = document.getElementById("Apellido").value;
    const email = document.getElementById("Correo").value;
    const cantidad = document.getElementById("Cantidad").value;
    const categoria = document.getElementById("Categoria").value;
    const pagoTotal = document.getElementById("PagoTotal").value;

    let categoriaTexto = "";

    switch(categoria){
        case "1":
            categoriaTexto = "Estudiante";
            break;
        case "2":
            categoriaTexto = "Trainee";
            break;
        case "3":
            categoriaTexto = "Junior";
            break;
    }

    const resumen = '<div class="letra">Resumen:</div>' + '<div class="llave">Nombre: ' + '<span>' + nombre + '</span>' + '</div>' + '<div class="llave">Apellido: ' + '<span>' + apellido + '</span>' + '</div>' + '<div class="llave">Email: ' + '<span>' + email + '</span>' + '</div>' + '<div class="llave">Categoría: ' + '<span>' + categoriaTexto + '</span>' + '</div>' + '<div class="llave">Cantidad de Tickets: ' + '<span>' + cantidad + '</span>' + '</div>' + '<div class="letra">' + pagoTotal + '</div>';

    Swal.fire({
        title: '¿Desea confirmar su compra?',
        html: resumen,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: 'Tickets comprados con éxito!!!',
                text: 'Será redirigido a la página principal',
                icon: 'success',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading();
                const timerInterval = setInterval(() => {
                const remainingTime = Swal.getTimerLeft();
                if (remainingTime <= 300) {
                    clearInterval(timerInterval);
                    window.location.href = 'index.html';
                }
            }, 100);
        }
        });
        } else {
            Swal.fire({
                title: 'Compra cancelada',
                text: 'Será redirigido nuevamente al formulario',
                icon: 'error',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading();
                const timerInterval = setInterval(() => {
                const remainingTime = Swal.getTimerLeft();
                if (remainingTime <= 300) {
                    clearInterval(timerInterval);
                }
            }, 100);
        }
        });
        habilitarCampos();
        }
      });
}

function habilitarCampos() {
    document.getElementById("Nombre").readOnly = false;
    document.getElementById("Apellido").readOnly = false;
    document.getElementById("Correo").readOnly = false;
    document.getElementById("Cantidad").readOnly = false;
    document.getElementById("Categoria").disabled = false;
    document.getElementById("PagoTotal").value = "Total a Pagar: $";
    ocultarCandadoResumen();
    mostrarCandadoComprar();
}