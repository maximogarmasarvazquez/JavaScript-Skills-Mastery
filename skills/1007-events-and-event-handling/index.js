const abrirBtn = document.getElementById('abrirModal');
const modalContainer = document.getElementById('modal-container');
const cerrarBtn = document.getElementById('cerrar');
const modal = document.getElementById('modal');
const clickMe = document.getElementById('clickMe');
const clickMeStop = document.getElementById('clickMeStop');

// Abrir modal
abrirBtn.addEventListener('click', (e) => {
  console.log('Modal abierto con StopPropagation'); 
  modalContainer.style.display = 'flex';
  e.stopPropagation(); // Evita que también se dispare el evento del fondo

});

// Cerrar modal desde botón
cerrarBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que también se dispare el evento del fondo
  modalContainer.style.display = 'none';
  console.log('Modal con StopPropagation cerrado ');
});

// Cerrar modal al hacer clic fuera del modal (en el fondo)
modalContainer.addEventListener('click', () => {
  modalContainer.style.display = 'none';
  console.log('Modal cerrado al hacer clic fuera del modal');
});

// Evitar cerrar modal si se hace clic dentro del contenido del modal
modal.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.body.addEventListener('click', (e) => {
  console.log('click en el body');
})

clickMe.addEventListener('click', (e) => {
  console.log('Click en el botón Click sin stop propagation');
})

clickMeStop.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que también se dispare el evento del body
  console.log('Click en el botón Click con stop propagation');
})