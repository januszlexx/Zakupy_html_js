//Variables
let newTaskForm = document.querySelector('.new-task-container form');
let tasksContainer = document.querySelector('.tasks-container ul');
//let singleTask = document.querySelector('single-task');



//On DOM load
document.addEventListener('DOMContentLoaded', function(){
    bindAddTaskEvents();
    showTasks();
});
