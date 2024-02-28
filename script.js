const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // append also works
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // make it empty
    saveData();  // saves the data
});

// to read ->> 
// The target property returns the element where the event occured.

// The target property is read-only.

// The target property returns the element on which the event occurred, opposed to the currentTarget property, which returns the element whose event listener triggered the event.

listContainer.addEventListener("click", (e)=> {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// upon reloading all tasks disppear to store them ->>

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

// displaying saved data ->>
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();