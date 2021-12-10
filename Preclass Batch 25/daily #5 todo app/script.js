let todos = [];

const showTodo = document.getElementById("show-todo");

function addTodo() {
  //tangkap inputan
  const todoInput = document.getElementById("input-todo");
  const descInput = document.getElementById("desc-todo");

  //jika ditekan submit tapi input kosong
  if (!todoInput.value) {
    alert("Input your todo!");
    return;
  }

  //buat variabel dengan data inputan
  const todo = {
    id: Date.now(),
    description: todoInput.value,
    ExplainDesc: descInput.value,
    isDone: false,
  };

  //masukkan ke array
  todos.unshift(todo);

  //kosongkan kembali input
  todoInput.value = "";
  descInput.value = "";

  //kirimkan data ke render
  renderTodo();
}
function renderTodo() {
  //buat variabel elemen kosong
  let todoElements = "";

  //jika elemen saat ini kosong, tampilkan
  if (todos.length < 1) {
    todoElements += `
        <div class="text-center">
            <img src="img/todo.svg" alt="img todo" class="img-not-found">
        </div>
        `;
  }

  //ambil data dari array
  for (elem of todos) {
    const id = elem.id;
    const description = elem.description;
    const ExplainDesc = elem.ExplainDesc;
    const isDone = elem.isDone;

    let btnDone = `<button class="btn-done" onclick="doneTodo(${id})"><i class="fa fa-check" aria-hidden="true"></i>
    </button>`;

    let textSuccess = "";

    if (isDone == true) {
      btnDone = "";
      textSuccess = "text-success";
    }

    todoElements += `
        <div class="todo">
            <p class="todo-name ${textSuccess}">${description}</p>
            <p class="todo-desc ${textSuccess}">${ExplainDesc}</p>
            <div class="todo-isdone">
                ${btnDone}
                <button class="btn-delete" onclick="deleteTodo(${id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
        `;
  }

  showTodo.innerHTML = todoElements;
}
function deleteTodo(id) {
  for (let index = 0; index < todos.length; index++) {
    console.log("id", id);
    console.log("index", index);
    if (id === todos[index].id) {
      todos.splice(index, 1);
    }
  }
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

renderTodo();
