/*  
  message imprimé dans la console après un délai ms.
  Retourne ms*2
*/
const waitMessage = (message, ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(message);
      resolve(ms * 2);
    }, ms)
  );
};

// Les 3 message sont affichés après un délai qui double à chaque fois :
// 500ms -> 1000ms -> 2000ms
waitMessage("Message 1", 500)
  .then((newTime) => waitMessage("Message 2", newTime))
  .then((newTime) => waitMessage("Message 3", newTime));