// Array para almacenar las tareas
        const tareas = [];

        // Selecciona el formulario y el input
        const form = document.querySelector('.form');
        const input = document.querySelector('input[name="task"]');
        const lista = document.getElementById('lista-tareas');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita recargar la página

            const tarea = input.value.trim();
            if (tarea) {
                tareas.push(tarea); // Guarda la tarea en el array

                // Agrega la tarea a la lista en el HTML
                const li = document.createElement('li');
                li.textContent = tarea;
                li.style.background = "rgba(255,255,255,0.1)";
                li.style.color = "#fff";
                li.style.padding = "10px";
                li.style.marginBottom = "5px";
                li.style.borderRadius = "10px";
                lista.appendChild(li);

                input.value = ''; // Limpia el input
            }
        });