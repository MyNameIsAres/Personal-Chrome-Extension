
function setBackgroundImage() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = url('../images/nightky.jpg.jpg');
}


function greeting() {
    const greeting = document.getElementById('welcomeMessage');
    const time = new Date().getHours();
    const name = "Ares";

    greeting.innerHTML = `${(time >= 18) ? `Good evening` :
        (time < 18 && time >= 12) ? `Good afternoon` :
            (time < 12) ? `Good Morning` : ''}, `;

    greeting.append(name);
}

function search(e) {
  e.preventDefault();
  let text = document.getElementById("text").value;
  let x = (window.location =
    "https://www.ecosia.org/search?q=" + encodeURIComponent(text));
  console.log(x);
}

document.getElementById('form', addEventListener('submit', search));
setBackgroundImage();
greeting();