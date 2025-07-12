// script.js

// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Event listener to add task
addBtn.addEventListener("click", addTask);

// Allow "Enter" key to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = createTaskElement(taskText);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskInput.focus();
}

// Function to create a task list item
function createTaskElement(text) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}
