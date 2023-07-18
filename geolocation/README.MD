# Geolocation API

L'API de [Géolocalisation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) dans le navigateur peur d'obtenir la position d'un appareil dans le mode de manière plus ou moins approximative.

## Exemple de gestion des fonctions asynchrones

La fonction `getCurrentPosition(success,error)` est une fonction asynchrone qui nécessite 2 fonctions de rappel (`success` et `error`) qui traitent le succès ou l'échec de l'opération.

La page [geolocation.html](./geolocation.html) permet de récupérer la position de votre appareil (permission requise par le navigateur) et l'affiche à l'écran.

Cet exemple implémente la même logique avec les 3 manières de gérer les fonctions asynchrones :
- Par fonctions de rappel dans [geolocation.js](./geolocation.js)
- Avec des `Promise` dans [geolocation_promise.js](./geolocation_promise.js)
- Avec la syntaxe `async`/`await` dans [geolocation_async.js](./geolocation_async.js)

Vous pouvez changer le script utilisé en modifiant sa référence dans l'attribut `<script>` du fichier HTML. Notez que pour la verison `async`/`await`, le script doit être chargé comme un ESM pour permettre l'utilisation de `await` sans une fonction `async` englobante.

## Contexte secure

Par défaut, certains APIs comme `Geolocation` sont disponibles seulement dans un contexte sécurisé (page chargée par HTTPS). Le domaine `localhost` est traité de manière différente par des navigateurs comme Chrome, Chromium et ses dérivés et `localhost` est considéré comme un contexte sécurisé et permet l'utilisation de `Geolocation` sur une version locale du site.

Un utilisateur doit quand même manuellement donner la permission au navigateur d'accéder à sa position pour utiliser l'API.