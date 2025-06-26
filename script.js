// Array para almacenar las tareas
const tareas = [];

// Elementos del DOM
const form = document.querySelector('.form');
const input = document.querySelector('input[name="task"]');
const lista = document.getElementById('lista-tareas');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita recargar la página

    const tareaTexto = input.value.trim();
    if (tareaTexto) {
        tareas.push(tareaTexto);

        const li = document.createElement('li');

        // Crear un span para el texto de la tarea
        const span = document.createElement('span');
        span.textContent = tareaTexto;
        span.style.flex = "1";

        // Botón de editar
        const btnEditar = document.createElement('button');
        btnEditar.textContent = '🖊️';
        btnEditar.style.marginLeft = "10px";
        btnEditar.style.cursor = "pointer";
        btnEditar.onclick = function () {
            const nuevoTexto = prompt("Edita tu tarea:", span.textContent);
            if (nuevoTexto !== null) {
                span.textContent = nuevoTexto.trim();
            }
        };

        // Botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '❌';
        btnEliminar.style.marginLeft = "5px";
        btnEliminar.style.cursor = "pointer";
        btnEliminar.onclick = function () {
            lista.removeChild(li);
        };

        // Estilos del <li>
        li.style.background = "rgba(255,255,255,0.1)";
        li.style.color = "#fff";
        li.style.padding = "10px";
        li.style.marginBottom = "5px";
        li.style.borderRadius = "10px";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "space-between";

        // Agregar elementos al <li> y luego al <ul>
        li.appendChild(span);
        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        lista.appendChild(li);

        input.value = ''; // Limpia el input
    }
});
