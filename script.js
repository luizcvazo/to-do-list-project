// 1. Seleção de Elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// 2. Função Principal (Ouvinte de Evento)
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
    const span = document.createElement('span');
    const btnRemover = document.createElement('button');

    span.textContent = texto;
    btnRemover.textContent = "Remover";

    btnRemover.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(btnRemover);

    todoList.appendChild(li);
}