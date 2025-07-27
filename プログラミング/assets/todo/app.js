const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    add();
});

function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-item");

        // 取り消し線をつけるクラス（保存時に反映）
        if (todo && todo.completed) {
            li.classList.add("text-decoration");
        }

        // クリックで切り替え
        li.addEventListener("click", function () {
            li.classList.toggle("text-decoration");
            saveData();
        });

        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li");
    const todos = [];

    lists.forEach(list => {
        const todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration")
        };
        todos.push(todo);
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

const btn = document.getElementById("clearAll");
btn.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem("todos");
});
