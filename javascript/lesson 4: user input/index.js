// How to accept user input



// 1. EASY WAY = window prompt

// let username = window.prompt("What's Your Username");
// console.log(username)




// 2. PROFESSIONAL WAY = HTML textbox

let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
};