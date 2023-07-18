// L'ordre d'appel n'est pas nécessairement le même que 
// l'ordre d'exécution final avec des fonctions asynchrones

setTimeout(() => {
  console.log("Message 1");
}, 5000);
setTimeout(() => {
  console.log("Message 2");
}, 1000);
setTimeout(() => {
  console.log("Message 3");
}, 3000);
