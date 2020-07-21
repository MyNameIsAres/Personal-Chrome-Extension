/*
    newtab.js is responsible for general activities such as displaying
    "good morning/afternoon/evening" depending on the time

    more specific functionalities shoudl be delicated to the appropriate
    files.

*/


function greeting() {
    const greeting = document.getElementById('welcomeMessage');
    const time = new Date().getHours();
    const name = "Ares";

    greeting.innerHTML = `${(hour >= 18) ? `Good evening` : 
    (hour <18 && hour >= 12) ? `Good afternoon` :
    (hour < 12) ? `Good Morning` : '' }, `;

    greeting.prepend(name);

    

}

// Rename eventually
// function reminderToStepAway() {
//     console.log("Take a 20 second break!");

//     setInterval(reminderToStepAway, 5000);
// }

// 
