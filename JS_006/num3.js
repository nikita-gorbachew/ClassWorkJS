// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”

const newElP = document.createElement('p');
newElP.textContent = 'Новый текстовый элемент';


// Добавьте созданный элемент внутри <div class="content"></div>
const contentEl = document.querySelector('.content');
contentEl.appendChild(newElP)


// Удалите добавленный узел

contentEl.remove();


// const content = document.querySelector('.content');
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Новый текстовый элемент';
// content.appendChild(paragraph);
// paragraph.remove();