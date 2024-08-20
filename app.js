
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Get the task from the input
    const task = taskInput.value.trim();

    // Ensure the input is not empty
    if (task !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = task;

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
}