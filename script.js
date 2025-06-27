// Array para almacenar las tareas
const tareas = [];

// Elementos del DOM
const form = document.querySelector('.form');
const input = document.querySelector('input[name="task"]');
const lista = document.getElementById('lista-tareas');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const tareaTexto = input.value.trim();
    if (tareaTexto) {
        tareas.push(tareaTexto);

        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.flexDirection = "column";
        li.style.alignItems = "center";
        li.style.background = "rgba(255, 255, 255, 0.1)";
        li.style.color = "#fff";
        li.style.padding = "10px";
        li.style.marginBottom = "5px";
        li.style.borderRadius = "10px";

        // Texto de la tarea
        const span = document.createElement('span');
        span.textContent = tareaTexto;
        span.style.marginBottom = "10px";
        span.style.fontSize = "35px";

        // Contenedor de botones
        const contenedorBotones = document.createElement('div');
        contenedorBotones.style.display = "flex";
        contenedorBotones.style.gap = "10px";

        const btnEditar = document.createElement('button');
        btnEditar.textContent = '🖊️';
        btnEditar.onclick = () => {
            const nuevoTexto = prompt("Edita tu tarea:", span.textContent);
            if (nuevoTexto !== null) {
                span.textContent = nuevoTexto.trim();
            }
        };

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '❌';
        btnEliminar.onclick = () => lista.removeChild(li);

        contenedorBotones.appendChild(btnEditar);
        contenedorBotones.appendChild(btnEliminar);

        li.appendChild(span);
        li.appendChild(contenedorBotones);
        lista.appendChild(li);

        input.value = '';
    }
});

