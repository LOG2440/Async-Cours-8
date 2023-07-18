function getRequest(id) {
  const getTextElement = document.getElementById("get-text");

  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      if (response.status === 404) {
        return Promise.reject(id);
      }
      return response.json();
    })
    .then((json) => {
      getTextElement.textContent = JSON.stringify(json);
    })
    .catch(invalid_id => {
      getTextElement.textContent = `Erreur, l'item ${invalid_id} n'existe pas`;
    });
}

// Alternative utilisant async/await
async function getRequestAsync(id) {
  const getTextElement = document.getElementById("get-text");

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (response.status === 404) {
    getTextElement.textContent = `Erreur, l'item ${id} n'existe pas`;
    return;
  }
  const json = await response.json();
  getTextElement.textContent = JSON.stringify(json);
}


function postRequest() {
  const postTextElement = document.getElementById("post-text");
  const content = document.getElementById('server-message').value;
  const data = { titre: "Message de Fetch", contenu: `${content}` };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      postTextElement.textContent = JSON.stringify(json);
    });
}

// TODO : Alternative utilisant async/await
function postRequestAsync() {
  const postTextElement = document.getElementById("post-text");
  const content = document.getElementById('server-message').value;
  const data = { titre: "Message de Fetch", contenu: `${content}` };
}
