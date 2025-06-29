const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const FirstCardBody = document.querySelectorAll(".card-body")[0];
const SecondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

runEvents();

function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoaded); // Loads and displays all todos from Local Storage when the page is opened.
  SecondCardBody.addEventListener("click", removeTodoToUI);
  clearButton.addEventListener("click", clearAllTodos);
  filterInput.addEventListener("keyup", filter);
}

function addTodo(e) {
  const inputText = addInput.value.trim();

  if (inputText == "") {
    showAlert("warning", "Please enter a value");
  } else {
    addTodoToUI(inputText);
    addTodoToStorage(inputText);
    showAlert("success", "Todo Added");
  }
  e.preventDefault();
}

function addTodoToUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.className = " delete-item";
  a.href = "#";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}

function addTodoToStorage(newTodo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
  let div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  FirstCardBody.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2500);
}

function pageLoaded() {
  let todos = JSON.parse(localStorage.getItem("todos"));

  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function removeTodoToUI(e) {
  if (e.target.classList.contains("fa-remove")) {
    const todoItem = e.target.parentElement.parentElement;
    todoItem.remove();

    deleteTodoFromStorage(todoItem.textContent);
    showAlert("success", "Todo deleted succesfully");
  }
}

function deleteTodoFromStorage(deleteTodo) {
  let todos = JSON.parse(localStorage.getItem("todos"));

  todos = todos.filter(function (todo) {
    return todo !== deleteTodo;
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// todos.filter(...) checks each element, keeps it in the array if it returns true, removes it if it returns false.
/* 
    let newArray = array.filter(function(element) {
    return condition;
    });
*/

function clearAllTodos() {
  const todoLists = document.querySelectorAll(".list-group-item");

  todoLists.forEach(function (todo) {
    todo.remove();
  });

  localStorage.removeItem("todos");
  showAlert("success", "All todos have been deleted");
}

function filter(e) {
  const filterValue = e.target.value.toLowerCase().trim();
  const todoLists = document.querySelectorAll(".list-group-item");

  todoLists.forEach(function (todo) {
    const text = todo.textContent.toLowerCase().trim();
    if (text.includes(filterValue)) {
      todo.setAttribute("style", "display : block");
    } else {
      todo.setAttribute("style", "display : none !important");
    }
  });
}
