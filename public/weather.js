/*

    File designated for everything weather related.

*/

const weather = document.getElementById('weather');

// Obviously hidden, duh..
const api = '';

function convertKelvinToCelcius(kelvinTemp) {
    return Math.floor(kelvinTemp - 273.15);
}



let getPosition = function () {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getPosition()
    .then((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + ' ' + longitude);
        getWeatherData(latitude, longitude);
    })
    .catch((error) => {
        console.log("Error has occured " + error);
    });


function getWeatherData(latitude, longitude) {
    console.log(latitude);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}`;
    fetch(url)
        .then(data => data.json())
        .then((data) => {
            console.log(data);
            let celcius = convertKelvinToCelcius(data.main.temp);
            let testIcon = data.weather.icon;
            document.getElementById("weather").innerHTML = icon;
            console.log(celcius);
          
        })
                .catch((error) => console.log(error));
}


// Will fix tomorrow
// getPosition()
//     .then((position) => {
//         const {latitude, longitude} = position.coords
//         console.log(latitude + ' ' + longitude);
//         getWeatherData(latitude, longitude);
//     })
//     .catch((error) => {
//         console.log("Error has occured " + error);
//     });