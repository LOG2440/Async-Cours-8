// Nécessite une connection HTTPs

// Englober la fonction asynchrone dans une Promise
function getPosition(options) {
    return new Promise((resolve, reject) => {
        return navigator.geolocation
            .getCurrentPosition(resolve, reject, options);
    });
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

getPosition(options)
    .then((pos) => {
        const coords = pos.coords;

        document.getElementById("location").innerText =
            `Latitude : ${coords.latitude}
             Longitude: ${coords.longitude}
             Plus ou moins ${coords.accuracy} mètres`;
    })
    .catch((err) => {
        console.warn(err.message);
    });