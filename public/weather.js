/*

    File designated for everything weather related.

*/

const weather = document.getElementById('weather');

// Obviously hidden, duh..
const api = 'lol, you wish';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=52.2628208&lon=4.4589903&appid=' + api;


function getWeatherData() {
    fetch(url)
        .then(data => data.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}

getWeatherData();