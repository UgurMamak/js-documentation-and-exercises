// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

loadItem();
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteItemAll);

}


function createItem(text) {
    console.log("run createItem");
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);
}


//Data loading
function loadItem() {
    console.log("run loadItem");
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

//get local storage data
function getItemsFromLS() {
    console.log("getItemsFromLS");
    if(localStorage.getItem("items")===null){
        items=[];
    }
    else{
        items=JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

//set local storoge new item
function setItemLS(text){

    items=getItemsFromLS();
    items.push(text);
    localStorage.setItem("items",JSON.stringify(items));
   

}

//insert items
function addNewItem(e){
    console.log("run addNewItem");
    if(input.value===""){
        alert("add new item");
    }

    createItem(input.value);
    setItemLS(input.value);

     input.value = '';

    e.preventDefault();

}


function deleteItemFromLS(text){
    console.log("deleteFromLS");
    items=getItemsFromLS();
    items.forEach(function(item,index){
        if(item===text){
            items.splice(index,1);
        }
    });
    localStorage.setItem("items",JSON.stringify(items));
}

//delete Item
function deleteItem(e){
    console.log("run deleteItem");

    if(e.target.className==="fas fa-times"){
        if(confirm("are you sure?")){
            e.target.parentElement.parentElement.remove();
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }

}


//all delete ıtem
function deleteItemAll(e){
        if (confirm('are you sure ?')) {
        $("#task-list").empty();
        localStorage.clear();
    }
    e.preventDefault();
}
