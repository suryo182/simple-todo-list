// Membuat selector
const todoInputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');
const todoItemEls = document.querySelector('.todo__item');

// Membuat fungsi untuk menambah item
function addListItem() {
  todoInputEl.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
      todoListEl.appendChild(newListItem);
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      todoInputEl.value = '';
    }
  });
}

// Membuat fungsi untuk menandai ketika list sudah dijalankan
function toggleDone() {
  todoListEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo__item')) {
      event.target.classList.toggle('done');
    }
  });
}

// Menjalankan fungsi toggle
toggleDone();

// Fungsi untuk membuat list item
function createListItem(text) {
  let newListElement = document.createElement('li');
  newListElement.setAttribute('class', 'todo__item');
  newListElement.textContent = text;
  return newListElement;
}

// Menjalankan fungsi add list item
addListItem();
