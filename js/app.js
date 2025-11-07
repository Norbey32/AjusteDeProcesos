// Funcionalidad para mostrar/ocultar detalles
document.getElementById('toggle-details').addEventListener('click', function() {
  const details = document.getElementById('details');
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    this.textContent = 'Ocultar Detalles';
  } else {
    details.classList.add('hidden');
    this.textContent = 'Mostrar Detalles';
  }
});
