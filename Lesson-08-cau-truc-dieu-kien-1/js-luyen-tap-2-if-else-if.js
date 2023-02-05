let userName = prompt("Enter your user name: ");
if (userName == "Admin") {
    let password = prompt("Enter your password: ");
    if (password == "TheMaster") {
        alert("Welcome");
    } else if (password == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (userName == null) {
    alert("Canceled");
} else {
    alert("I don’t know you");
}