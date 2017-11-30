function addNewTask(title){
    let taskLi = document.createElement('li');
    
    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareTaskHTML(title);
    
    //Events toggle & delete
        let butToggleLeft = taskLi.querySelector('.toggle-complete-btn');
        let butDeleteRight = taskLi.querySelector('.delete-task-btn');
        
        
    butToggleLeft.addEventListener('click', function(){
        toggleTaskComplete(this);  
    });
    
    
    butDeleteRight.addEventListener('click', function(){
        deleteTaskComplete(this);
    });
    
    //add task to DOM
    tasksContainer.appendChild(taskLi);
}


function prepareTaskHTML(title) {   
    //zapis ES6
    return `<div class="input-group">
                        <span class="input-group-btn">
                            <button id="toggle" class="btn btn-default toggle-complete-btn"  value="false"><i class="fa fa-check"></i></button>
                        </span>
                        <input type="text" class="form-control" id="title" name="title" placeholder="Nazwa produktu" value="${title}">
                        <span class="input-group-btn">
                            <button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i>
                            </button>
                        </span>
                    </div>`;
    
    // stary zapis
   /* return '<div class="input-group">' +
                        '<span class="input-group-btn">' +
                         '<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>' +
                         '</span>' +
                         '<input type="text" class="form-control"placeholder="Nazwa produktu" value="' + title + '">' +
                        '<span class="input-group-btn">' +
                            '<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i>            </button>' +
                        '</span>' +
                    '</div>';*/
}


// Add new Task events
function bindAddTaskEvents() {
    
    // On submit
    newTaskForm.addEventListener('submit', function(event) {
        event.preventDefault(); // zapobiega przeładowaniu strony pryz wysyłaniu formularza; mignięciu oka 
        
        let title = this.querySelector('input');
        
        if(title.value){     
            
        addNewTask(title.value);
            tasks.push(title.value);
            console.log(tasks);
            
        title.value = "";
        }else
            title.placeholder = "Wpisz nazwę produktu";
        title.focus();
    });
}
        
    
