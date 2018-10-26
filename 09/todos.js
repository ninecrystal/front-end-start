//start...

var input = document.getElementById('memo');
var list = document.getElementById('list');
var form = document.querySelector('.new-task');

function addTodo(event){
    //if(event.keyCode === 13) {
    //    var todo = input.Value;
    //    console.log(todo);
   // }

  // console.log(event);

   var todo = input.value;
   console.log(todo);
   insertTodo(todo);

   input.value = ' ';
   event.preventDefault();
}

//input.addEventListener('keydown',addTodo);


function insertTodo(todo){

    var html = `
        <li id="todolist">
            <button class="delete">×</button>
            <input type="checkbox" class="toggle-checked">
            <span class="text">${todo}</span>
        </li>
    `

  list.innerHTML+=html;
}

function deleteTodo(event){
    console.log(event.target.classList.value);
    if(event.target.classList.value == 'delete'){
        event.target.parentNode.remove();
    }
}

form.addEventListener('submit', addTodo);
addEventListener('click',deleteTodo)
