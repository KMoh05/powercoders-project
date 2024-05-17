// Get the form element
const form = document.querySelector("form");

// Get the task list element
const taskList = document.querySelector(".task-list ul");

// Add event listener to the form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the task name, due date, and priority from the form
  const taskName = document.getElementById("task-name").value;
  const taskDate = document.getElementById("task-date").value;
  const taskPriority = document.getElementById("task-priority").value;

  // Validate inputs
  if (!taskName || !taskDate || !taskPriority) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new task item
  const taskItem = document.createElement("li");
  taskItem.className = taskPriority; // Set the class name to the task priority
  const taskText = document.createTextNode(
    `${taskName} - ${taskDate} - ${taskPriority}`
  );
  taskItem.appendChild(taskText);

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  taskItem.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  // Create the edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  taskItem.appendChild(editButton);
  editButton.addEventListener("click", function () {
    const newTaskName = prompt(
      "Enter new task name, date, and priority",
      taskText.textContent
    );
    if (newTaskName !== null) {
      taskText.textContent = newTaskName;
    }
  });

  // Create the status checkbox
  const statusCheckbox = document.createElement("input");
  statusCheckbox.type = "checkbox";
  statusCheckbox.addEventListener("change", function () {
    if (statusCheckbox.checked) {
      taskItem.style.textDecoration = "line-through";
    } else {
      taskItem.style.textDecoration = "none";
    }
  });
  taskItem.appendChild(statusCheckbox);

  // Append the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the form inputs
  document.getElementById("task-name").value = "";
  document.getElementById("task-date").value = "";
  document.getElementById("task-priority").value = "";
});

// Save tasks to local storage
window.addEventListener("unload", function () {
  localStorage.setItem("tasks", taskList.innerHTML);
});

// Load tasks from local storage
window.addEventListener("load", function () {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    taskList.innerHTML = savedTasks;
  }
});
