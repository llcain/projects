document.querySelector('#push').onclick = function() {
    if(document.querySelector('input').value.length == 0) {
        alert("Please enter customer name");
    } else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('input').value}
                </span>
                <button class="delete">Delete</button>
            </div>
        `;
        const inputValue = document.getElementById('myInput');
        inputValue.value = '';

        var current_tasks = document.getElementsByClassName('delete');
        for(var i=0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
    }
}