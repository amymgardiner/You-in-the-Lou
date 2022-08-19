// logout button and takes away autorization
async function logout() {
  //Locates current document to use POST method
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
// Executes function on user clicking logout
document.querySelector('#logout').addEventListener('click', logout);
