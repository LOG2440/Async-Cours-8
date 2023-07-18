
function getRequest(id) {
  const getTextElement = document.getElementById("get-text");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`);
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 404) {
        getTextElement.textContent = `Erreur, l'item ${id} n'existe pas`;
        return;
      }
      const response = JSON.parse(xhr.responseText);
      getTextElement.textContent = xhr.responseText;
      console.log(response);
    }
  });
  xhr.send();
}

function postRequest() {
  const postTextElement = document.getElementById("post-text");
  const content = document.getElementById('server-message').value;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(xhr.responseText);
      postTextElement.textContent = xhr.responseText;
      console.log(response);
    }
  });

  const data = { titre: "Message de XHR", contenu: `${content}` };
  xhr.send(JSON.stringify(data));
}
