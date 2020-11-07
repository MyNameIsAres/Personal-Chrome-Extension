/*

    File designated for everything weather related.

*/

const weather = document.getElementById("weather");

// Obviously hidden, duh..
const api = "";

// This aint working
function convertKelvinToCelcius(kelvinTemp) {
    console.log(kelvinTemp);
    return (kelvinTemp - 32) * 5/9;
}

let getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then((position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude + " " + longitude);
    getWeatherData(latitude, longitude);
  })
  .catch((error) => {
    console.log("Error has occured " + error);
  });

function getIcon(input) {
  // TODO Create a system to fetch icon from "erikflowers" better icons based on day/night/conditions.
}

function getWeatherData(latitude, longitude) {
    console.log(latitude);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}`;
    fetch(url)
        .then(data => data.json())
        .then((data) => {
            console.log(data.main.temp);
            let celcius = convertKelvinToCelcius(data.main.temp);
            let testIcon = data.weather.icon;
            console.log(celcius + " I am celcius");
            document.getElementById("weather").innerHTML = icon;
           
          
        })
                .catch((error) => console.log(error));
}


// Will fix tomorrow < -- have still not fixed. Forgot what this did.
// getPosition()
//     .then((position) => {
//         const {latitude, longitude} = position.coords
//         console.log(latitude + ' ' + longitude);
//         getWeatherData(latitude, longitude);
//     })
//     .catch((error) => {
//         console.log("Error has occured " + error);
//     });
