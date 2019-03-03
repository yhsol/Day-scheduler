const todoForm = document.querySelector('.js-todoForm'),
	todoTitle = todoForm.querySelector('.js-todoTitle'),
	todoList = document.querySelector('.js-todoList');

const TODO_LS = 'currentTodo';

let todos = [];

function deleteTodo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	todoList.removeChild(li);
	const cleanTodo = todos.filter(function(todo) {
		return todo.id !== parseInt(li.id);
	});
	todos = cleanTodo;
	saveTodo();
}

// editBtn.addEventListener("click", function edittingTodo(){
//     // console.log(span.innerText);
//     const edittingText = span.innerText;
//     edittingText = text;
//     // const editTodo = todos.forEach(function(todo){
//     //     return todo.innerText !== edittingText.innerText;
//     // });
//     // todos = edittingText;

// });

function saveTodo(text) {
	localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function editText(text) {
	const edittingBtn = event.target;
	const li = edittingBtn.parentNode;
	span.innerText = '';
	const editInput = document.createElement('input');
	li.appendChild(editInput);
}

function paintTodo(text) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const deleteBtn = document.createElement('button');
	const editBtn = document.createElement('button');
	const form = document.createElement('form');
	const newId = todos.length + 1;
	deleteBtn.innerText = 'X';
	deleteBtn.addEventListener('click', deleteTodo);
	editBtn.addEventListener('click', editText);
	editBtn.innerText = 'EDIT';
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(deleteBtn);
	li.appendChild(editBtn);
	li.id = newId;
	li.className = 'todoList';
	span.className = 'ListTitle';
	todoList.appendChild(li);
	const todoObj = {
		text: text,
		id: newId
	};
	todos.push(todoObj);
}

function todoSubmitHandler(event) {
	event.preventDefault();
	const currentTodoValue = todoTitle.value;
	paintTodo(currentTodoValue);
	saveTodo(currentTodoValue);
	todoTitle.value = '';
}

function loadTodo() {
	const currentTodo = localStorage.getItem(TODO_LS);
	if (currentTodo !== null) {
		const parsedTodo = JSON.parse(currentTodo);
		parsedTodo.forEach(function(todo) {
			paintTodo(todo.text);
		});
	}
}

function init() {
	loadTodo();
	todoForm.addEventListener('submit', todoSubmitHandler);
}

init();
