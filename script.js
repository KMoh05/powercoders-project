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
    taskItem.textContent = `${taskName} - ${taskDate}`;
    button = document.createElement('button');
    button.textContent = 'Delete';
    taskItem.appendChild(button);
    button.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });


    // Append the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the form inputs
    document.getElementById('task-name').value = '';
    document.getElementById('task-date').value = '';
});
