const app = document.querySelector('.app'); 
const todoHeading = document.querySelector('.todo__heading'); 
const todoHeadingInput = document.querySelector('.todo__heading__input'); 
const todoHeadingAdd = document.querySelector('.todo__heading__add'); 
todoHeadingInput.focus(); 
var todo = document.querySelector('.todo'); 
function add(input) 
{
    let todoList = document.createElement('li'); 
    todoList.classList.add('todo__list'); 
    todoList.innerHTML = 
        `
            <div class="todo__info__wrap">
                    <span class="todo__list__info">
                        ${input}
                    </span>
                </div>
                <div class="todo__list__icon">
                    <i class="fa-solid fa-circle icon__status icon--red" style = "color: #B82132;"></i>
                    <i class="fa-solid fa-circle icon__status icon--yellow" style = "color: #FFB22C;"></i>
                    <i class="fa-solid fa-circle icon__status icon--green" style = "color: #5CB338"></i>
                    <i class="fa-regular fa-trash-can todo__list__rubbish"></i>
                </div>
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
        var todoList = document.querySelector('.todo__list:last-of-type'); 
        var spanWrap = todoList.querySelector('.todo__info__wrap');  
        var iconWrap = todoList.querySelector('.todo__list__icon'); 
        const iconWrapItem = iconWrap.querySelectorAll('i'); 
        //Module Uncomlete Modifier 
        {
            spanWrap.addEventListener('click' , () => {
                
                spanWrap.classList.toggle('uncomplete'); 
                if (!spanWrap.classList.contains('uncomplete')) {
                    todoList.classList.remove('icon--red', 'icon--yellow' , 'icon--green');
                }
                for (let i of iconWrapItem) {
                    if (spanWrap.classList.contains('uncomplete')) i.classList.add('lost--color'); 
                    else i.classList.remove('lost--color'); 
                }
            })
             var removeButton = todoList.querySelector('.todo__list__rubbish'); 
            removeButton.addEventListener('click' ,() => {
                todo.removeChild(todoList); 
            })
        }
        //Module Color classify 
        {
            /**Task1 */
            const subItem = [] 
            const subColor = [] 
            for (let i = 0; i < iconWrapItem.length - 1; ++i)
            {
                const item = iconWrapItem[i]; 
                const classifyName = item.className.split(' ').pop(); 
                subItem.push(item); 
                subColor.push(classifyName); 
            }
            /**Task2 */
            for (let i = 0; i < subItem.length; ++i) 
            {
                const removeSubClass = () => {
                    todoList.classList.remove('icon--red', 'icon--yellow' , 'icon--green');
                }     
                subItem[i].addEventListener('click' , () => {  
                    for (let j = 0; j < subColor.length; ++j) 
                    {
                        if (j == i) subItem[j].classList.toggle('lost--color'); 
                        else subItem[j].classList.remove('lost--color'); 
                    }
                    removeSubClass(); 
                    if (i == 0) {
                        if (subItem[i].classList.contains('lost--color')) todoList.classList.add('icon--red');
                        else todo.classList.remove('icon--red'); 
                    }
                    else if (i == 1) {
                        if (subItem[i].classList.contains('lost--color')) todoList.classList.add('icon--yellow');
                        else todo.classList.remove('icon--yellow'); 
                    }
                    else {
                        if (subItem[i].classList.contains('lost--color')) todoList.classList.add('icon--green');
                        else todo.classList.remove('icon--green'); 
                    }
                })
            }
        }
    }
    else alert('Task trống, không thể thêm'); 
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