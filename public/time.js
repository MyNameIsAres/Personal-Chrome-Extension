function updateTimer() {
    const timeDisplay = document.getElementById('currentTime');
    const date = new Date();

    const currentTime = [
        padWithZeroes(date.getHours()),
        padWithZeroes(date.getMinutes()),
    ].join(":");

    timeDisplay.innerHTML = currentTime;
    console.log(currentTime);

    setInterval(updateTimer, 30000);

}

function padWithZeroes (unpadded) {
    return ("00" + unpadded).slice(-2);
}

updateTimer();
setInterval(updateTimer, 30000);
