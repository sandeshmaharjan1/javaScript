const addListBtn = document.getElementById("add-list-btn");
const todoListsContainer = document.querySelector("#todo-lists");
const clearAllBtn = document.querySelector("#clear-all-btn");


addListBtn.addEventListener("click", () => {
    const currentItems = document.querySelectorAll("#todo-list input[type='text']");
    
    for (let item of currentItems) {
        if(item.value.trim() === ""){
            alert("please fill all the input fields before adding a new list");
            input.focus();
            return;
        }}

        const newList = document.createElement("li");

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.placeholder = "Enter a task";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        checkBox.addEventListener("change", () => {
            if(checkBox.checked){
                inputField.classList.toggle("completed");
            }
        });

        inputField.addEventListener("input", (e) => {
            if(e.key === "Enter"){
                inputField.setAttribute("readonly", true);
            }
        });

        deleteBtn.addEventListener("click", () => {
            newList.remove();
        });

        newList.append(checkBox, inputField, deleteBtn);
        todoListsContainer.appendChild(newList);

        clearAllBtn.addEventListener("click", () => {
            todoListsContainer.innerHTML = "";
        })
});
