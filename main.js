const app = document.querySelector('.app'); 
const todoHeading = document.querySelector('.todo__heading'); 
const todoHeadingInput = document.querySelector('.todo__heading__input'); 
const todoHeadingAdd = document.querySelector('.todo__heading__add'); 
     
var todo = document.querySelector('.todo'); 
function add(input) 
{
    let todoList = document.createElement('li'); 
    todoList.classList.add('todo__list'); 
    todoList.innerHTML = 
        `
            <span class="todo__list__info">
                    ${input}
            </span>
            <i class="fa-regular fa-trash-can"></i>
        `
    todo.appendChild(todoList); 
}
function handleTask() 
{
    let task = todoHeadingInput.value.trim(); 
    if (task != '') {
        add(task); 
        todoHeadingInput.value = ''; 
        todoHeadingInput.focus(); 
        var todoList = document.querySelectorAll('.todo__list');
        for (let i of todoList) 
        {
            i.addEventListener('click' , () => {
                if (i.classList.contains('uncomplete')) {
                    i.classList.remove('uncomplete'); 
                } 
                else i.classList.add('uncomplete'); 
            })
            var removeButton = i.querySelector('i'); 
            removeButton.addEventListener('click' ,() => {
                todo.removeChild(i); 
            })
        }
    }
    else alert('Task trong, khong the them'); 
}
function mainUI() 
{
    todoHeadingAdd.addEventListener('click' , () => {
        handleTask(); 
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleTask();
    })
}
mainUI(); 