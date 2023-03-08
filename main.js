const todoList = document.querySelector('ul')

//Create
const newtodoList = document.createElement('li');
newtodoList.textContent = "BUY GROCERIES"
todoList.appendChild(newtodoList);

//Insert
const intodoList = document.createElement("li");
intodoList.textContent = 'INSERT';
todoList.insertBefore(intodoList,todoList.firstElementChild);

//Replace
const retodoList = document.createElement('li');
retodoList.textContent = "FEED THE CAT";
retodoList.replaceChild(retodoList,todoList.children[2]);

//Remove
todoList.children[1].remove()