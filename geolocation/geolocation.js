// Nécessite une connection HTTPs
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function handlePosition(pos) {
  const coords = pos.coords;

  document.getElementById("location").innerText =
    `Latitude : ${coords.latitude}
     Longitude: ${coords.longitude}
     Plus ou moins ${coords.accuracy} mètres`;
}

function error(err) {
  console.warn(err.message);
}
navigator.geolocation.getCurrentPosition(handlePosition, error, options);