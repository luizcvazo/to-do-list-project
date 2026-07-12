const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = todoInput.value;

    if (taskText !== "") {
        adicionarTarefa(taskText);
        todoInput.value = "";
        todoInput.focus();
    }
});

function adicionarTarefa(texto) {

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const btnRemover = document.createElement('button');

    checkbox.type = 'checkbox';

    span.textContent = texto;
    btnRemover.textContent = "Remover";
    checkbox.addEventListener('change', () => {
        span.classList.toggle('concluida', checkbox.checked);
        li.classList.toggle('concluida', checkbox.checked);
    });

    btnRemover.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnRemover);

    todoList.appendChild(li);
}
