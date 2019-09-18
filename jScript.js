
//Main 
//Tab Title 
document.title="Welcome";

/* Hello World Test 
function runCode(){
    alert ("Hello World");
}
runCode();
*/


//List 
const listContent = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

//Local Save
const LOCAL_STORAGE_LIST_KEY= "task.lists";

//array
let List = JSON.parse(localstorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [ ];

//listener 
newListForm.addEventListener('submit', event => {
  event.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === "") return 
  const list = createList(listName) 
  newListInput.value=null 
  newListInput.push(list)
  render()
});

function createList(name){
return {id: Date.now() +Math.random(),name:name, tasks:[]}
};

//save 
function save (){

};

//clear list 
function render(){
  clearElement(listContent)
  list.forEach(list => {
    const listElement = document/createElement("li")
    listElement.dataset.ListId=list.id
    listElement.classList.add("list-name")
    listElement.innerText =list.name
    ListContainer.appendChild(listElement) 
  })
  clearElement(listContainer)
}

function clearElement(element){
  while(element.firstChild){
    element.removeChild(element.firstChild) 
}};

render();







//Gorceries 

let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now() + Math.random(),
  };

  todoItems.push(todo);
  console.log(todoItems); 

  const list = document.querySelector('.js-todo-list');
  list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
      ❌
    </li>`);
}

//input 
const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

/*
Test Dup Search
var duplicate = [];

function findDuplicate(arr) {
  for (i = 0; i < todoItems.length - 1; i++) {
    for (j = i + 1; j < todoItems.length; j++) {
      if (todItems[i] == todoItems[j]) {
        duplicate = todoItems[i];
        console.log(duplicate);
        dupicate.push(array[i]);
      }
    }
  }
  return duplicate;
}
*/

var sorted_arr = todoItems.sort(); // You can define the comparing function here. 
                             // JS by default uses a crappy string compare.
var results = [];
for (var i = 0; i < todoItems.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
console.log(results);


function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;

  const item = document.querySelector(`[data-key='${key}']`);
  if (todoItems[index].checked) {
    item.classList.add('done');
  } else {
    item.classList.remove('done');
  }
}

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
  
  const list = document.querySelector('.js-todo-list');
  if (todoItems.length === 0) list.innerHTML = '';
}

//click to check off and delete 
const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

(function() {
  $('.white-arrow').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: $('#content').offset().top}, 400);
  });

  $('.black-arrow').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 400);
  });
})();


  

