


function updateTimer() {
    let timeDisplay = document.getElementById('currentTime');
    let date = new Date();

    let getCorrectMinutes =  date.getMinutes() < 10 ? '0' : '' + date.getMinutes();
    

    let currentTime = date.getHours() + ":" + getCorrectMinutes;

    timeDisplay.innerHTML = currentTime;  
}

updateTimer();



