# Fonctions asynchrones et AJAX

## Fonctions asynchrones

Le langage JavaScript est un langage synchrone et tout le code s'exécute sur le même fil d'exécution. Il est cependant parfois intéressant d'avoir des fonctionnalités supplémentaires qui ne bloquent pas le fil d'exécution et sont traités en parallèle. Par exemple : la détection d'événements dans la page, les minuteries, les appels réseau, etc.

Ce type de fonctionnalités est offert par le navigateur grace à des fonctions asynchrones : des fonctions qui sont exécutés hors du contexte JS principal et dont la réponse est traitée après l'exécution du code JS principal dans la boucle d'événements.

Un exemple concret est la fonction `setTimeout(handler,timeout)` qui débute une minuterie et, après `timeout` millisecondes, place un appel vers la fonction `handler` sur la file d'attente pour la boucle d'événements. Les scripts dans le répertoire [async](./async/) sont des exemples d'utilisation de cette fonction asynchrone ainsi que les enjeux possibles dans le cas où les fonctions de rappel des fonctions asynchrones ne s'exécutent pas dans le même ordre que leurs déclarations.

### Promesses

Une alternative aux fonctions asynchrones est l'utilisation des objets `Promise`. L'objet représente le résultat ou l’échec éventuel d’un traitement asynchrone.

Le `Promise` est crée avec une fonction d'exécution ayant 2 paramètres qui sont aussi des fonctions. La fonction d'exécution fait appel à des fonctions asynchrones et passe les 2 paramètres comme des fonctions de rappel à ces fonctions asynchrones.

```js
const promise = new Promise((resolve,reject) => { ... });
```

Les 2 fonctions se comportent comme un `return` et prennent en paramètre la valeur à retour. La différence est le traitement d'une promesse résolue ou rejetée par la suite. 

Chaque `Promise` a 2 méthodes qui prennent en paramètre la valeur de `resolve` ou `reject` : `then` et `catch`. Les 2 méthodes sont garanties d'être exécutées après la logique dans la promesse. La méthode `then` retourne une promesse, donc il est possible de faire une chaîne de fonctions asynchrones sans bloquer la boucle d'événements.

Voici un exemple du fichier [wait_promise.js](./promise/wait_promise.js) : 

```js
const waitMessage = (message, ms) => {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(message);
            resolve(ms * 2);
        }, ms)
    );
};

waitMessage("Message 1", 500)
  .then((newTime) => waitMessage("Message 2", newTime))
  .then((newTime) => waitMessage("Message 3", newTime));
```

### Syntaxe `async`/`await`

Une alternative introduite avec ES2017 est l'utilisation de la syntaxe `async`/`await` pour alléger l'utilisation des `Promise` (qui sont quand même toujours utilisés).

Une fonction déclarée avec le mot clé `async` retourne implicitement un objet de type `Promise`. À noter que ceci ne rend pas la fonction "asynchrone" en soit.

Ceci permet également d'appeler d'autres fonctions `async` avec le mot clé `await` : l'exécution dans la fonction s'arrête jusqu'à ce que la fonction attendue avec `await` retourne une valeur. L'exécution du reste du code n'est cependant pas bloquée.

Contrairement à `Promise`, la gestion des erreurs/exceptions se fait avec `try/catch` comme le code JS normal.

Voici un exemple du fichier [async_await.js](./promise/async_await.js). Où la dernière ligne sera exécutée avant la fin de `messageWithTimer` qui va attendre un certain temps (`time`) entre chaque appel de `console.log` : 
```js
async function messagesWithTimer(time){
  await wait(time);
  console.log("Message 1");
  await wait(time);
  console.log("Message 2");
  await wait(time);
  console.log("Message 3");
}
messagesWithTimer(1000);
console.log("Message final");
```

### Exemple avec les différentes syntaxes

L'exemple de [Géolocalisation](./geolocation/README.MD) présente l'utilisation d'une fonction asynchrone avec les 3 syntaxes: fonctions de rappel, `Promise` et `async`/`await`.

## AJAX

Les requêtes réseau dans un navigateur sont faites par des méthodes asynchrones pour éviter de bloquer la page en attente d'une réponse du serveur contacté. Par exemple, l'API `Fetch` se base sur des promesses pour retourner les résultats d'une requête HTTP. Consultez le fichier [fetch.js](./promise/fetch.js) pour un exemple.

Cette communiciation utilise des techniques comme AJAX (_Asynchronous JavaScript and XML_). Consultez le fichier [README](./ajax/README.MD) pour une explication et des explications plus complètes sur l'utilisation d'AJAX dans le navigateur.