let todos = [];
const showTodo = document.getElementById("show-todo");

class Todo {
  constructor(id, description, explainDesc, isDone) {
    this.id = id;
    this.description = description;
    this.explainDesc = explainDesc;
    this.isDone = isDone;
  }
  renderTodoElements() {
    let btnDone = `<button class="btn-done" onclick="doneTodo(${this.id})"><i class="fa fa-check"></i></button>`;

    let textSuccess = "";

    if (this.isDone) {
      btnDone = "";
      textSuccess = "text-success";
    }
    return `
          <div class="todo">
              <p class="todo-name ${textSuccess}">${this.description}</p>
              <p class="todo-desc ${textSuccess}">${this.explainDesc}</p>
              <div class="todo-isdone">
                  ${btnDone}
                  <button class="btn-delete" onclick="deleteTodo(${this.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
              </div>
          </div>
          `;
  }
}

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
    const id = elem.id;
    const description = elem.description;
    const explainDesc = elem.explainDesc;
    const isDone = elem.isDone;

    todoElements += elem.renderTodoElements();
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

  const todo = new Todo(Date.now(), todoInput.value, descInput.value, false);

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
