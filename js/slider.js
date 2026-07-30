let signup = document.getElementById("signup-btn");
let btndata = localStorage.getItem("signup");
hide();

function hide() {
    if (btndata === "true") {
        signup.style.display = "none";
    }
}