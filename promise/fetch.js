// Avec Promise
fetch("https://jsonplaceholder.typicode.com/todos/1") // envoyer une requête GET
    .then((response) => response.json()) // extraire le body de la réponse
    .then((json) => console.log(json)); // traiter l'objet obtenu

// Avec async/await
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await response.json();
console.log(json);