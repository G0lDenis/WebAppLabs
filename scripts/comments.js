const preloader = document.getElementById('preloader');
const commentsContainer = document.getElementById('comments-container');
const errorMessage = document.getElementById('error-message');

function getRandomFilter() {
  return Math.random() > 0.5 ? { min: 10 } : { max: 20 };
}

async function fetchComments(filter) {
  try {
    preloader.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    
    let url = 'https://jsonplaceholder.typicode.com/comments';
    if (filter.min) {
      url += `?id_gte=${filter.min}`;
    } else if (filter.max) {
      url += `?id_lte=${filter.max}`;
    }
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Статус ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

function renderComments(comments) {
  commentsContainer.innerHTML = '';
  comments.forEach(({ name, email, body }) => {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p>${body}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
}

window.addEventListener('load', async () => {
  const filter = getRandomFilter();
  try {
    const comments = await fetchComments(filter);
    renderComments(comments);
    preloader.classList.add('hidden');
  } catch {
    errorMessage.classList.remove('hidden');
    preloader.classList.add('hidden');
  }
});
