function showTasks() {
    tasks.forEach(function(title){
        addNewTask(title);
    });
}

//zmiana koloru przycisku
function toggleTaskComplete(task) {
    task.classList.toggle('btn-success');
}

// Usunięcie produktu z listy
function deleteTaskComplete(task){
    //rodzic.removeChild
    let liToDelete = task.closest('li');
    task.closest('ul').removeChild(liToDelete);
    let text = liToDelete.querySelector(".input-group input").value;
//    console.log(text);
    deleteFromList(text);

}