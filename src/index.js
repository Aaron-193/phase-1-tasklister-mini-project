document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  let formInput = document.querySelector('#new-task-description');
  let taskList = document.querySelector('#tasks');

  const taskText = formInput.value.trim();

  formInput.addEventListener("click", (event) =>
  event.preventDefault())

  const newLi = document.createElement("li");
  newLi.className = "task";

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.disabled = true;

  taskInput.value = taskText;

  newLi.appendChild(taskInput);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "deleteBtn";

  newLi.appendChild(deleteBtn)
  taskList.appendChild(newLi);
  // your code here
});
