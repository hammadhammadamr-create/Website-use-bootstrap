let signup = document.getElementById("signup-btn");
let btndata = localStorage.getItem("signup");
hide();

function hide() {
    if (btndata === "true") {
        signup.style.display = "none";
    }
}

let username = localStorage.getItem("username");

if (username === null) {
    username = prompt("Enter your name:");

    if (username !== null && username.trim() !== "") {

        username = username.charAt(0).toUpperCase() + username.slice(1);

        localStorage.setItem("username", username);

    } else {

        alert("Please enter your name");

    }
}

let title = document.getElementById("title");
title.textContent = `Hi ${username}, Welcome to Learna`;
