// import key from "/private.js";

const key = "BMJwXow-9pmAjpJ7ha72VBVCT_34oitGkoClSBBt9gk"

function updateTimer() {
    let date = new Date();

    let currentTime = date.getHours() + " : " +date.getMinutes();
    console.log(currentTime);

}

// setTimeout(updateTimer(), 3000);

let timeDisplay = document.getElementById('time-display');
// timeDisplay.appendChild(timeDisplay)

// console.log(date.getHours() + date.getMinutes());

let container  = document.getElementById('container');


fetch('https://api.unsplash.com/photos/random?query=nature&client_id=' + key )
.then(data => data.json())
.then((data) => {
    console.log(data.urls.full);

    container.style.background = 'https://images.unsplash.com/photo-1568323993151-e465adfa30f6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0OTI0MH0';

console.log(container);
console.log(container.style.background);

})
.catch((error) => {
    console.log(error + " This is an error!")
});

