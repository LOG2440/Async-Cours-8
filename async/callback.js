/*
    Une manière de garantir un ordre d'exécution est d'appeler
    les fonctions asynchrones en cascade une dans l'autre
*/
setTimeout(() => {
    console.log("Message 1");
    setTimeout(() => {
        console.log("Message 2");
        setTimeout(() => {
            console.log("Message 3");
        }, 1000);
    }, 1000);
}, 1000);