/*
    La variable a est partagée par les fonctions asynchrones
    Imaginez que chaque setTimeout() est un appel à un serveur
    Math.random() simule le délai de traitement de la requête

    Quelle sera la valeur affichée de a ??
    Et si on exécute le script 10 fois (for i in {1..10}; do node shared.js; done) ?
*/

let a = 0;

setTimeout(() => {
    a++;
}, Math.random() * 300);
setTimeout(() => {
    a--;
}, Math.random() * 300);
setTimeout(() => {
    console.log(a);
}, Math.random() * 300);