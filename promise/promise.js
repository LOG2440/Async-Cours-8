const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Allo");
  }, 300);
});

promise1.then((value) => {
  console.log(value); // Allo (après 300ms)
});

console.log(promise1); // Promise { <pending> }

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Mon erreur");
  }, 300);
});

promise2.catch((err) => {
  console.log(`L'erreur est : ${err}`); // L'erreur est : Mon erreur
});
