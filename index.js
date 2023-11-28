const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {

  listContainer.innerText = '';
    if (inputBox.value === '') {
        alert("Text can't be empty");
    } else {
        let task = document.createElement("Li");
        task.innerText = inputBox.value;
        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        task.appendChild(span);
        listContainer.appendChild(task);


    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("ToDoData", listContainer.innerHTML);
}
function getData() {
    listContainer.innerHTML = localStorage.getItem("ToDoData");
    console.log("getData "+listContainer.innerHTML);
}
function clearAll() {
    if(window.confirm("Delete all tasks permanently?")) {
        listContainer.innerHTML = localStorage.removeItem("ToDoData");
        listContainer.innerHTML = 'All tasks deleted from Local Storage';
} else {
  listContainer.innerText = '';
}

    
}
getData();
