// ********** SELECT ITEMS **********
const form = document.querySelector(".todo-form");
const alertMessage = document.querySelector(".alert");
const todo = document.querySelector("#todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

// ********** Edit ITEMS **********

// ********** EVENT LISTENERS **********
form.addEventListener("submit", addTodo);

// ********** FUNCTIONS **********
function addTodo(e) {
    e.preventDefault();
    let id = new Date().getTime().toString();
    let value = todo.value;

    // Empty value(todo) validation
    if (value === "") {
        console.log("Please enter a value");
        return;
    }

    let element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("todo-item");

    element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    let editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editTodo);
    let deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTodo);

    list.appendChild(element);
    container.classList.add("show-container");
}

function deleteTodo() {
    console.log("delete");
}

function editTodo() {
    console.log("edit");
}

// ********** LOCAL STORAGE **********

// ********** SETUP ITEMS **********
