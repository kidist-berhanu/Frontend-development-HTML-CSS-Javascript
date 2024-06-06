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
    
        const favoriteSpan = document.createElement('span');
        favoriteSpan.textContent = '★';
        favoriteSpan.className = 'favorite';
        favoriteSpan.onclick = function () {
            if (li.classList.contains('favorite-task')) {
                li.classList.remove('favorite-task');
                taskList.appendChild(li); // Move to the bottom of the list
            } else {
                li.classList.add('favorite-task');
                taskList.insertBefore(li, taskList.firstChild); // Move to the top of the list
            }
        };
      const closeSpan = document.createElement('span');
        closeSpan.textContent = '×';
        closeSpan.className = 'close';
        closeSpan.onclick = function () {
            taskList.removeChild(li);
        };
    
        const iconContainer = document.createElement('div');
        iconContainer.style.display = 'flex';
        iconContainer.style.gap = '10px';
        iconContainer.appendChild(favoriteSpan);
        iconContainer.appendChild(closeSpan);
    
        li.appendChild(iconContainer);
    
        taskList.appendChild(li);
        taskInput.value = '';
}
