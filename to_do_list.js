window.addEventListener('load', ()=>{
    const form = document.querySelector("#form-add");
    const input = document.querySelector("#addTask");
    const allTasks = document.querySelector("#task-list");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please add a task");
            return;
        }

        const conTask = document.createElement("div");
        conTask.classList.add("container-task");

        const contentTask = document.createElement("div");
        contentTask.classList.add("content-task");

        conTask.appendChild(contentTask);

        const inputTask = document.createElement("input");
        inputTask.classList.add("text");
        inputTask.type = "text";
        inputTask.value = task;
        inputTask.setAttribute("readonly","readonly");

        contentTask.appendChild(inputTask);

        

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions");

        const btnEdit = document.createElement("button");
        btnEdit.classList.add("btn-edit");
        btnEdit.innerHTML = "Edit";

        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn-delete");
        btnDelete.innerHTML = "Delete";

        const btnDone = document.createElement("button");
        btnDone.classList.add("btn-Done");
        btnDone.innerHTML = "Done";

        taskActions.appendChild(btnEdit);
        taskActions.appendChild(btnDelete);
        taskActions.appendChild(btnDone);

        conTask.appendChild(taskActions);
        allTasks.appendChild(conTask);
        

        input.value = "";

        btnEdit.addEventListener("click", ()=>{

            if(btnEdit.innerText.toLowerCase() == "edit"){
                inputTask.removeAttribute("readonly");
                inputTask.focus();
                btnEdit.innerText = "Save";
            }
            else{
                inputTask.setAttribute("readonly", "readonly");
                btnEdit.innerText = "Edit";
            }
        });

        btnDelete.addEventListener("click", () => {
            allTasks.removeChild(conTask);
        });

    });
});