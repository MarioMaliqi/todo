let todoList = document.getElementById("todo-list");
let todo = document.getElementById("todo");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  if (!todo.value) return;
  let li = document.createElement("li");
  let div = document.createElement("div");
  let removeButton = document.createElement("button");

  removeButton.innerHTML = "X";
  div.innerHTML = todo.value + "&nbsp";
  removeButton.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  div.appendChild(removeButton);
  li.appendChild(div);
  todoList.appendChild(li);
});
