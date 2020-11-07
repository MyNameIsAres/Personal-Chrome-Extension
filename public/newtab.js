/*
    newtab.js is responsible for general activities such as displaying
    "good morning/afternoon/evening" depending on the time

    more specific functionalities shoudl be delicated to the appropriate
    files.

*/

// Could be prettier
function fetchdDayPartingImages() {
    const time = new Date().getHours();
    const body = document.getElementsByTagName('body')[0];
    console.log(body);
    //  background-image: url('../images/test1.jpg');


    body.style.backgroundImage = `${(time >= 18) ? "url(../images/nightsky.jpg)" 
    : (time < 18 && time >= 12 ) ? "url(../images/test1.jpg)" : ''}`;

    console.log("beeh");
    
}


function greeting() {
    const greeting = document.getElementById('welcomeMessage');
    const time = new Date().getHours();
    const name = "Ares";

    greeting.innerHTML = `${(time >= 18) ? `Good evening` :
        (time < 18 && time >= 12) ? `Good afternoon` :
            (time < 12) ? `Good Morning` : ''}, `;

    greeting.append(name);

    console.log(12344)


}


document.getElementById('form', addEventListener('submit', search));

function search(e) {
  e.preventDefault();
  let text = document.getElementById("text").value;
  let x = (window.location =
    "https://www.ecosia.org/search?q=" + encodeURIComponent(text));
  console.log(x);
}

fetchdDayPartingImages();
greeting();