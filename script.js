// Get the form element
const form = document.querySelector('form');

// Get the task list element
const taskList = document.querySelector('.task-list ul');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the task name and due date from the form
    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-date').value;

    // Create a new task item
    const taskItem = document.createElement('li');
    const taskText = document.createTextNode(`${taskName} - ${taskDate}`);
    taskItem.appendChild(taskText);

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    taskItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // Create the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    taskItem.appendChild(editButton);
    editButton.addEventListener('click', function() {
        const newTaskName = prompt('Enter new task name and date', taskText.textContent);
        if (newTaskName !== null) {
            taskText.textContent = newTaskName;
        }
    });

    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the form inputs
    document.getElementById('task-name').value = '';
    document.getElementById('task-date').value = '';
});