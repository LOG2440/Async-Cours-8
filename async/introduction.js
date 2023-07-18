// setTimeout(cb,t) exécute une fonction cb après un temps t
// Cette fonction est placée dans la file d'attente et l'exécution du code continue

setTimeout(() => {
    console.log("Attente de 0 secondes!");
}, 0);
console.log("Affichage après attente!");