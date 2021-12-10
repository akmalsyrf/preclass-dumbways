let todos = [];
const showTodo = document.getElementById("show-todo");

function renderTodo() {
  let todoElements = "";

  if (todos.length < 1) {
    todoElements += `
          <div class="text-center">
              <img src="img/todo.svg" alt="img todo" class="img-not-found">
          </div>
          `;
  }

  for (elem of todos) {
    const { id, description, explainDesc, isDone } = elem;

    let btnDone = `<button class="btn-done" onclick="doneTodo(${id})"><i class="fa fa-check"></i></button>`;

    let textSuccess = "";

    if (isDone) {
      btnDone = "";
      textSuccess = "text-success";
    }

    todoElements += `
          <div class="todo">
              <p class="todo-name ${textSuccess}">${description}</p>
              <p class="todo-desc ${textSuccess}">${explainDesc}</p>
              <div class="todo-isdone">
                  ${btnDone}
                  <button class="btn-delete" onclick="deleteTodo(${id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
          </div>
          `;
  }

  showTodo.innerHTML = todoElements;
}

function addTodo() {
  const todoInput = document.getElementById("input-todo");
  const descInput = document.getElementById("desc-todo");

  if (!todoInput.value || !descInput.value) {
    alert("Input your todo!");
    return;
  }

  const todo = {
    id: Date.now(),
    description: todoInput.value,
    explainDesc: descInput.value,
    isDone: false,
  };

  todos.push(todo);

  todoInput.value = "";
  descInput.value = "";
  renderTodo();
}

function doneTodo(id) {
  for (i = 0; i < todos.length; i++) {
    if (id == todos[i].id) {
      todos[i].isDone = true;
    }
  }
  renderTodo();
}

function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    console.log("id", id);
    console.log("index", i);
    if (id === todos[i].id) {
      todos.splice(i, 1);
    }
  }
  renderTodo();
}

renderTodo();
