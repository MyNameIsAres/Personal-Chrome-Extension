// Obviously hidden, duh..
const api = "";

let getPosition =  function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then((position) => {
    const { latitude, longitude } = position.coords;
    getWeatherData(latitude, longitude);
  })
  .catch((error) => {
    console.log("An error has occured " + error);
  });

 function getWeatherData(latitude, longitude) {
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api}`;
     fetch(url)
        .then(data => data.json())
        .then((data) => {
            displayWeatherData(data.main.temp);
        })
          .catch((error) => console.log(error));
}

function displayWeatherData(celcius) {
  document.getElementById("weather").innerHTML = celcius;
}
