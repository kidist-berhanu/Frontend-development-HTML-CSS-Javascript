function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.textContent = taskValue;

    const span = document.createElement('span');
    span.textContent = '×';
    span.className = 'close';
    span.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    taskList.appendChild(li);
    taskInput.value = '';
}

