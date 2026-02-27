window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const usuario = params.get('user') || 'Admin';
    document.getElementById('saludo').textContent = `Bienvenido/a ${usuario}`;
});



const form = document.getElementById('adminForm');
const tabla = document.getElementById('tablaTorneos').querySelector('tbody');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const titulo = document.getElementById('titulo').value;
  const juego = document.getElementById('juego').value;
  const plataforma = document.getElementById('plataforma').value;
  const fecha = document.getElementById('fecha').value;
  const cupos = document.getElementById('cupos').value;
  const objetivo = document.getElementById('objetivo').value;
  const reglas = document.getElementById('reglas').value;
  const premios = document.getElementById('premios').value;
  const pdf = document.getElementById('pdf').value;
  const stream = document.getElementById('stream').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${titulo}</td>
    <td>${juego}</td>
    <td>${plataforma}</td>
    <td>${fecha}</td>
    <td>${cupos}</td>
    <td>${objetivo}</td>
    <td>${reglas}</td>
    <td>${premios}</td>
    <td>${pdf ? `<a href="${pdf}" target="_blank">PDF</a>` : ''}</td>
    <td>${stream ? `<a href="${stream}" target="_blank">Stream</a>` : ''}</td>
    <td>
      <button class="edit-btn">Editar</button>
      <button class="delete-btn">Eliminar</button>
    </td>
  `;
  tabla.appendChild(row);
  form.reset();

  row.querySelector('.edit-btn').addEventListener('click', () => {
    document.getElementById('titulo').value = titulo;
    document.getElementById('juego').value = juego;
    document.getElementById('plataforma').value = plataforma;
    document.getElementById('fecha').value = fecha;
    document.getElementById('cupos').value = cupos;
    document.getElementById('objetivo').value = objetivo;
    document.getElementById('reglas').value = reglas;
    document.getElementById('premios').value = premios;
    document.getElementById('pdf').value = pdf;
    document.getElementById('stream').value = stream;
    row.remove();
  });

  row.querySelector('.delete-btn').addEventListener('click', () => {
    row.remove();
  });
});
