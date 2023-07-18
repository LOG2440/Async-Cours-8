# AJAX

AJAX ou _Asynchronous JavaScript and XML_ est un ensemble de techniques utilisées pour avoir un comportement asynchrone dans une page web. De manière plus concrète, ceci est fait à travers des requêtes HTTP vers un serveur pour récupérer ou envoyer des données. La page web est par la suite mise à jour avec les données du serveur sans avoir à la recharger au complet.

Notez que la partie _XML_ est là pour des raisons historiques : on peut récupérer des données de formats différents et le format JSON est le plus populaire de nos jours.

## Protocole HTTP dans le navigateur

Les navigateurs modernes supportent 2 manières d'envoyer des requêtes HTTP : [XMLHttpRequest(XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) et l'api [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). 
 
Au niveau réseautique, les 2 approches sont les mêmes, mais leur utilisation dans le JS est légérement différent.

## XHR

XMLHttpRequest ou XHR est une approche basée sur les événements (un objet `XMLHttpRequest` implémente l'interface `EventTarget` du DOM). Par exemple, l'événement [`readystatechange`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event) est lancé à chaque changement de l'état de la requête (propriété `readyState`). Un état de `XMLHttpRequest.DONE` (égal à `4`) indique que la requête a été envoyée et une réponse HTTP a été reçue.

À noter que les attributs de la réponse HTTP sont sur le même objet `XMLHttpRequest` que la requête.
 
Chaque requête HTTP est faite avec la méthode `open(method,url)` et envoyée avec la méthode `send(body)` (`body` est optionnel). Tel que défini dans le protocole HTTP, chaque requête peut se faire assigner des en-têtes avec `setRequestHeader(name,value)` et chaque réponse contient un code de retour dans l'attribut `status`.

Le projet dans le répertoire [xhr](./xhr/) contient un exemple de requêtes HTTP utilisant XHR. 

Le code dans [xhr.js](./xhr/xhr.js) contient des exemples de requêtes `GET` et `POST` ainsi qu'une gestion de différents codes de retour, notamment `404`.

## Fetch

L'API Fetch est une approche basée sur les `Promise` et est, généralement, plus concise que XHR. L'API utilise la fonction globale `fetch(resource, options)` qui retourne un objet `Promise<Response>` qui contient la réponse à la requête.

À noter que contrairement à XHR, les objets [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) et [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) sont différents.

Chaque requête HTTP est faite avec la méthode `fetch` et la méthode utilisée par défaut est `GET`. Il est possible d'utiliser une autre méthode en la spécifiant dans l'objet `options`. Cet objet contient également les en-têtes et le corps (si nécessaire) de la requête.

Le projet dans le répertoire [fetch](./fetch/) contient un exemple de requêtes HTTP utilisant Fetch. Cet exemple a le même visuel et comportement que l'exemple de [XHR](#xhr).

Le code dans [fetch.js](./fetch/fetch.js) contient des exemples de requêtes `GET` et `POST` ainsi qu'une gestion de différents codes de retour, notamment `404`. 

Comme Fetch utilise les `Promise`, il est possible d'utiliser la syntaxe `async`/`await` également. La fonction `getRequestAsync` implèmente le même comportement que `getRequest` en utilisant que `async`/`await`.

### Exercice

Implémentez la fonction `postRequestAsync` qui devrait avoir le même comportement que `postRequest`, mais en utilisant la syntaxe `async`/`await`. 