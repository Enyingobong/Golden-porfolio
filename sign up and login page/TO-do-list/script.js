const todoInput = document.querySelector('#todo_input')
const Addbtn = document.querySelector('.todo_add_btn')
const body = document.body;

todoAddbtn.addEventListener('click',() => {
    const inputValue = todoInput.Value
    const todoListul = document.querySelector(".todo_list")
    const li = document.createElement("li")
    const liInnerHtml = <li class="todo_list_lis">
        <div>$(inputValue)</div>
        <div>
        <button class="done">Done</button>
        <button class="remove">Remove</button>
        </div>
    </li>
    li.innerHtml = liInnerHtml
    if(inputValue ===""){
        alert ("Please Add Your Task")
    }else{
        todoListul.append (li)
    }
})
    body.addEventListener("click",(eventobject)=>{
        if(eventobject.target.classList.contains("done")){
            const todoTask = eventobject.target.parentElement.previousElementsiblings;
            todoTask.style.textDecoration = "line-through"
            todoTask.style.color = "hsla(57, 88%, 86%, 0.600)"
        }
        if(eventobject.target.classList.contains("remove")){
            const removeTodoTask = eventobject.target.parentElement.parentElement
            removeTodoTask.remove()
        }
    })
