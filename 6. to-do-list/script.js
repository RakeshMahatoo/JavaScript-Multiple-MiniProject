let taskInput = document.getElementById('taskInput');
let button = document.getElementById('taskButton');
let taskList = document.getElementById('taskList');

button.addEventListener('click', addTask);

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please enter a task.");
        return;
    }
    tasks.push(taskText);
    taskInput.value = "";
    renderTask();
}

function renderTask() {
    taskList.innerHTML = "";
   for(let element of tasks){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    li.textContent = element;
    deleteButton.addEventListener('click', function(){
        const index = tasks.indexOf(element);
            tasks.splice(index, 1);
            renderTask();
    })

    let updateButton = document.createElement('button');
    updateButton.classList.add('update-button');
    updateButton.textContent = 'Update';

    updateButton.addEventListener('click', function(){
        const index = tasks.indexOf(element);
        const newTask = prompt("update your task", element).trim();
        tasks[index] = newTask;
        
        if(newTask === ""){
            alert("please enter a task for update");
            return;
        }
        renderTask();

    })



    taskList.appendChild(li);
    li.appendChild(deleteButton);
    li.appendChild(updateButton);

   }


    }







