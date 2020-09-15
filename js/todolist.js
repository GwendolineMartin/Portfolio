import "./style.css";


const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input =document.querySelector('form > input');


form.addEventListener('submit', (event) => {
event.preventDefault();
const value = input.value; 
input.value = "";
addTodo(value);
});



const todos = [  
  
];

const displayTodo = () => {
  
  const todosNode = todos.map((todo,index) => { 
    if (todo.edit) {
      return createTodoEditElement(todo,index); 
    }
    else {
      return createTodoElement(todo,index);
    }
    
  });
  ul.innerHTML = ''; 
  ul.append(...todosNode )
};

const createTodoElement = (todo,index) => {
  const li = document.createElement('li');
  const buttonDelete = document.createElement('button');
  const buttonEdition = document.createElement('button');
  buttonDelete.innerHTML =`Supprimer`;
  buttonEdition.innerHTML = `Editer`;

  buttonDelete.addEventListener( 'click', (event) => {
    event.stopPropagation();
    deleteTodo(index);
  })

  buttonEdition.addEventListener( 'click', (event ) => {
    event.stopPropagation();
    editMode(index);
  })
  todo.text = todo.text.charAt(0).toUpperCase() + todo.text.substr(1);
  li.innerHTML = `<p class="todo ${ todo.done ? "done" : "" }"><span>${ todo.text }</span></p>`
  li.addEventListener('click', (event) => {
    toggleTodo(index);
  })
  li.append(buttonEdition, buttonDelete);

  return li;
};
const createTodoEditElement = (todo,index ) => {
   const li = document.createElement('li');
   const saveButton = document.createElement('button');
   saveButton.innerHTML = 'Enregistrer';
   const cancelButton = document.createElement('button');
   cancelButton.innerHTML = 'Annuler ';

   cancelButton.addEventListener( 'click', (event) => {
     event.stopPropagation();
     editMode(index);
   })
   saveButton.addEventListener( 'click', (event) => {
    saveMode(index, input);
   })

   const input = document.createElement('input') ;
   input.type = 'text';
   input.placeholder = todo.text;
   
   li.append(input, cancelButton, saveButton);
   return li;
}

const addTodo = (text) => {
  if(text) {
  todos.push({
    text,
    done: false
  })
 }
  displayTodo();
}

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
}

const toggleTodo = (index) => {
  todos[index].done = !todos[index].done; 
  displayTodo();
}

const editMode = (index) => {
  todos[index].edit = !todos[index].edit ;
  displayTodo();
}

const saveMode = (index, input) => {
  if(!input.value){
  const value = input.placeholder;
  todos[index].text = value;
  todos[index].edit = false;
  }
  else {
  const value = input.value;
  todos[index].text = value;
  todos[index].edit = false;
  }
  displayTodo();
}

 
displayTodo(); 