let signup = document.getElementById("signup-btn");
let btndata = localStorage.getItem("signup");
hide();

function hide() {
    if (btndata === "true") {
        signup.style.display = "none";
    }
}




let username = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

let Messagestore = JSON.parse(localStorage.getItem("Messages")) || [];

let time = new Date();
let day = time.getDate();
let month = time.getMonth()+1;
let year = time.getFullYear();
let timemessage = `Time : ${day} / ${month} / ${year}`




// button submit form
let submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
        
    let card = {
        "Username": username.value,
        "Email": email.value.trim(),
        "Subject": subject.value,
        "Message": message.value,
        "Time": timemessage,
    }

    if (username.value.trim() === "" || email.value.trim() === "" || subject.value.trim() === "" || message.value.trim() === "") {
        e.preventDefault();
        alert("Please fill all fields");
        return
    }

    Messagestore.push(card);
    localStorage.setItem("Messages", JSON.stringify(Messagestore));
});

