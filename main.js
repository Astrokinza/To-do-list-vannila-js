const todoInput = document.querySelector('.todo-input')                         
const todoButton = document.querySelector('.todo-button');
const trashButton = document.querySelectorAll('.trash-btn');
const filterOption = document.querySelector('.select');
console.log(filterOption);
console.log(todoButton);                       
const todoList = document.querySelector('.todo-list')    
console.log(todoList);                     

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)


function addTodo(event){
    event.preventDefault();
    console.log("suuu");

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText=todoInput.value

    todoDiv.appendChild(newTodo)

    const completedButton = document.createElement('button')
    completedButton.innerHTML= '<i class="fas fa-check"> </i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button')
    trashButton.innerHTML= '<i class="fas fa-trash"> </i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv);
    console.log(trashButton);
    todoInput.value=""
}

function deleteCheck(e){
    let item = e.target
    console.log(item);
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend' , ()=>{
            todo.remove()
        })
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex"
                break
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display="flex"
                }
            case "uncompleted":
                if(todo.classList.contains('completed')){
                    todo.style.display="none"
                }
        }
    })
}