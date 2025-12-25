const addBtn = document.getElementById("add-btn")
const todoInput = document.getElementById("todo-input")

addBtn.addEventListener('click', ()=>{
    
    const value = todoInput.value

    const li = document.createElement('li')
    li.innerText = value

    const del = document.createElement('button')
    del.innerText = 'Delete'
    li.appendChild(del)

    del.addEventListener('click', () =>{
        li.remove()
    })

    const ul = document.querySelector("ul")    
    ul.appendChild(li)

    todoInput.value = ""
})