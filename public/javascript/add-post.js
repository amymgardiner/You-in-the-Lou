// function listens to buttons on dashboard page and creates a post linked the the backend database
async function newFormHandler(event) {
  event.preventDefault();
  
//Locates current document to use POST method
  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;
  const post_description = document.querySelector(
    'textarea[name="post-description"]'
  ).value;
  const post_address = document.querySelector(
    'input[name="post_address"]'
  ).value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url,
      post_description,
      post_address,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}
// Executes event on user submiting post
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);
