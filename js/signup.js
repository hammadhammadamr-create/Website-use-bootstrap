let signbtn = document.getElementById("btn-signup");
let logbtn = document.getElementById("btn-login");

let signform = document.getElementById("signup-form");
let logform = document.getElementById("login-form");

signbtn.addEventListener("click",() => {
    signform.style.display = "none";
    logform.style.display = "block";
});

logbtn.addEventListener("click",() => {
    signform.style.display = "block";
    logform.style.display = "none";
});

// signup form

let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirm-password");
let firstname = document.getElementById("first-name");
let lastname = document.getElementById("last-name");
let country = document.getElementById("country");
let birthdate = document.getElementById("birthdate");
// button submit form
let signup = document.getElementById("signup");

signup.addEventListener("click", function (e) {

    if (email.value.trim() === "" || password.value.trim() === "" || firstname.value.trim() === "" || lastname.value.trim() === "" || country.value === "Choose your country" || birthdate.value.trim() === "") {
        e.preventDefault();
        alert("Please fill all fields");
    }

    if (password.value !== confirmpassword.value) {
    e.preventDefault();
    alert("Passwords do not match");
    }

    localStorage.setItem("username", firstname.value.trim());
    localStorage.setItem("email", email.value.trim());
    localStorage.setItem("password", password.value);
});



// login form


let username = document.getElementById("username");
let loginEmail = document.getElementById("login-email");
let loginPassword = document.getElementById("login-password");
// button submit form
let login = document.getElementById("login");

login.addEventListener("click", function (e) {

    if (username.value.trim() === "" || loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
        e.preventDefault();
        alert("Please fill all fields");
    }

    let savedUsername = localStorage.getItem("username");
    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (
        username.value.trim() !== savedUsername ||
        loginEmail.value.trim() !== savedEmail ||
        loginPassword.value !== savedPassword
    ) {
        e.preventDefault();
        alert("Incorrect username, email, or password");
        return;
    }
});

