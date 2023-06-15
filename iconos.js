function mostrarCandadoComprar() { 
  const primerHijo = document.getElementById('Comprar').firstChild;
  const iconoCandadoComprar = document.createElement('i');
  iconoCandadoComprar.className = 'fas fa-lock';
  document.getElementById('Comprar').disabled = true;
  document.getElementById('Comprar').classList.add('disabled');
  document.getElementById('Comprar').insertBefore(iconoCandadoComprar, primerHijo); 
}

function ocultarCandadoComprar() {
  document.getElementById('Comprar').disabled = false;
  document.getElementById('Comprar').classList.remove('disabled');
  document.querySelector('#Comprar > i').remove();
}

function mostrarCandadoResumen() {
    const primerHijo = document.getElementById('btnMostrarTotal').firstChild;
    const iconoCandadoResumen = document.createElement('i');
    iconoCandadoResumen.className = 'fas fa-lock';
    document.getElementById('btnMostrarTotal').disabled = true;
    document.getElementById('btnMostrarTotal').classList.add('disabled');
    document.getElementById('btnMostrarTotal').insertBefore(iconoCandadoResumen, primerHijo);
  }
  
  function ocultarCandadoResumen() {
    document.getElementById('btnMostrarTotal').disabled = false;
    document.getElementById('btnMostrarTotal').classList.remove('disabled');
    document.querySelector('#btnMostrarTotal > i').remove();
  }


document.addEventListener('DOMContentLoaded', function() {
const categoria = document.getElementById('Categoria');
categoria.addEventListener('change', function() {
  const categoriaSeleccionada = document.getElementById('Categoria').value;
  switch(categoriaSeleccionada) {
    case "0":
      if (document.getElementById('Trainee').classList.contains('cardTraineeTrue')) {
        document.getElementById('Trainee').classList.remove('cardTraineeTrue');
      }
      if (document.getElementById('Junior').classList.contains('cardJuniorTrue')) {
        document.getElementById('Junior').classList.remove('cardJuniorTrue');
      }
      if (document.getElementById('Estudiante').classList.contains('cardEstudianteTrue')) {
        document.getElementById('Estudiante').classList.remove('cardEstudianteTrue');
      }
      break;
    case "1":
      if (document.getElementById('Trainee').classList.contains('cardTraineeTrue')) {
        document.getElementById('Trainee').classList.remove('cardTraineeTrue');
      }
      if (document.getElementById('Junior').classList.contains('cardJuniorTrue')) {
        document.getElementById('Junior').classList.remove('cardJuniorTrue');
      }
      document.getElementById('Estudiante').classList.add('cardEstudianteTrue');
      break; 
    case "2":
      if (document.getElementById('Junior').classList.contains('cardJuniorTrue')) {
        document.getElementById('Junior').classList.remove('cardJuniorTrue');
      }
      if (document.getElementById('Estudiante').classList.contains('cardEstudianteTrue')) {
        document.getElementById('Estudiante').classList.remove('cardEstudianteTrue');
      }
      document.getElementById('Trainee').classList.add('cardTraineeTrue');
      break; 
    case "3":
      if (document.getElementById('Estudiante').classList.contains('cardEstudianteTrue')) {
        document.getElementById('Estudiante').classList.remove('cardEstudianteTrue');
      }
      if (document.getElementById('Trainee').classList.contains('cardTraineeTrue')) {
        document.getElementById('Trainee').classList.remove('cardTraineeTrue');
      }
      document.getElementById('Junior').classList.add('cardJuniorTrue');
      break; 
  }
});
});