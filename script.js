const form = document.querySelector('form');
const body = document.querySelector('body')
const inputText = document.querySelector('input[type="text"]')
const todos = document.querySelector('.todos');
const completed = document.querySelector('.completed-tasks')
console.log(completed);


form.addEventListener('submit', addTodo);

body.addEventListener('click', lineThrough)
body.addEventListener('click', filter)




function addTodo(event){
    event.preventDefault();
    let divTodo = document.createElement('div');
    let TodoCircle = document.createElement('div')
    let todoTask = document.createElement('p')
        
    
        
        divTodo.classList.add('todo')
        todos.appendChild(divTodo);
    
       
        TodoCircle.classList.add('circle')
        divTodo.appendChild(TodoCircle)
    
    
        todoTask.classList.add('todo-task')
        todoTask.innerText=inputText.value
        divTodo.appendChild(todoTask)
    
        inputText.value = ""
}
function lineThrough(event){
    console.log("ça marche");
    const item = event.target;
    if(item.classList[0] ==="circle"){
        const theTodo = item
        theTodo.classList.toggle('full-circle')
        theTodo.parentElement.classList.toggle('completed');
    }
}
function filter(event){
    let target = event.target
    console.log(target.parentElement.classList.contains('completed'));
    if(target.parentElement.classList.contains('completed')){
        completed.appendChild(target.parentElement)
    }
    if(target.classList[0]==="circle"){
        if(target.parentElement.classList.contains('completed') === false){
            console.log("false");

            // target.parentElement.style.display="none"
            todos.appendChild(target.parentElement)
            // completed.removeChild(theTodoTwo)
        }
    }
    
 
}
// function addComplete(event){

// }