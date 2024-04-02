// const inputBox = document.getElementById('input-box');
// const listContainer = document.getElementById('list-container');

// function addItem() {
//     if (inputBox.value === '') {
//         Toastify({
//             text: "Please add an item",
//             duration: 3000,
//             gravity: "top",
//             backgroundColor: "linear-gradient(to right, #FF9800, #FF5722)"
//         }).showToast();
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span=document.createElement("span");
//         span.innerHTML='\u00D7';
//         inputBox.value = ''; 

//     }
// }

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addItem() {
    if (inputBox.value === '') {
        Toastify({
            text: "Please add an item",
            duration: 3000,
            gravity: "top",
            backgroundColor: "linear-gradient(to right, #FF9800, #FF5722)"
        }).showToast();
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = '\u00D7';
        span.onclick = function() {
            li.remove();
        };
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = ''; 
        saveData();
    }
}

// listContainer.addEventListener('click', function(e) {
//     if(e.target.tagName==='LI'){
// e.target.classList.toggle("checked");
//     }else if(e.target.tagName==='SPAN'){
//         e.target.parentElement.remove();
//     }
// },false)

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data" .listContainer.innerHTML)
}

function showItem(){
    listContainer.innerHTML=localStorage.getItem("data")||""
}

showItem();