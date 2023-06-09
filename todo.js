document.querySelector('#add').onclick = function(){
    if(document.querySelector('#new input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <p id="taskname">
                    ${document.querySelector('#new input').value}
                </p>
                <input type="checkbox" id="completed">
                <button class="delete">
                    <i class="trash">X</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}