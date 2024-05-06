const input = document.querySelector("input");
const AddTodo = document.querySelector("#AddTodo");
const output = document.querySelector("#output");

AddTodo.addEventListener('click', () => {
    const todo = input.value;
    if(todo === ""){
        alert ("Please enter todo");
        return;
    }else{
        const li = document.createElement('li');
        li.innerHTML = `<span>${todo}</span>
        <button id="listbtn" onclick = "removeTodo(this)"> Remove </button>`
        output.appendChild(li);
        input.value = "";
    }
});

function removeTodo(element){
element.parentNode.remove();
}