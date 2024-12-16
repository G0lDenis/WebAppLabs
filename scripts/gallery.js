const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const newTaskInput = document.getElementById('newTask');

// Init
Sortable.create(taskList, {
  animation: 150, // Скорость, мс
});

addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value;
  if (!taskText) return;

  const li = document.createElement('li');
  li.classList.add('animate__animated', 'animate__fadeInDown'); // Для animate.css, просто прописываем элементу стиль
  li.textContent = taskText;

  tippy(li, {
    content: `Задача: ${taskText}`, // Текст
    animation: 'scale', // Анимация появления
    theme: 'dark', // Тема)
    placement: 'right', // Расположение подсказочки
  });

  taskList.appendChild(li);
  newTaskInput.value = '';

  li.addEventListener('dblclick', () => {
    li.classList.replace('animate__fadeInDown', 'animate__fadeOutUp'); // Для animate.css, просто прописываем элементу стиль
    setTimeout(() => li.remove(), 500);
  });
});
