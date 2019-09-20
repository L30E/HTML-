
//Main 
//Tab Title 
document.title="Welcome";

/* Test Hello World 
function runCode(){
    alert ("Hello World");
}
runCode();
*/

//array
let todoItems = [];
let doneItems= [];

//Todo Items 
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now() + Math.random(),
  };

  todoItems.push(todo);
 

  const list = document.querySelector('.js-todo-list');

  list.insertAdjacentHTML('beforeend',
     `<li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo js-delete-todo">
      X
    </li>`);
}

/*
//Done Items 
function addDone(){
const doneList = document.querySelector('.js-done-list');
};
*/

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


function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;

  const item = document.querySelector(`[data-key='${key}']`);
  if (todoItems[index].checked) {
    item.classList.add('done');
    doneItems.push(todoItems[index]);
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

//Done Toggel 
const list = document.querySelector('.js-todo-list');
list.addEventListener('click', e=> {
  if (e.target.classList.contains('js-tick')) {
    const itemKey = e.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  if (e.target.classList.contains('js-delete-todo')) {
    const itemKey = e.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

//Arrow
(function() {
  $('.black-arrow').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 400);
  });
})();
