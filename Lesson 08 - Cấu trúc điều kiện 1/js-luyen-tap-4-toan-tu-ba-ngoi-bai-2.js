let login = prompt("Enter your message: ", "Employee");
let message = (login == "Employee") ?
    "Hello" :
    (login == "Director") ?
        "Greetings" :
        (login == "") ?
            "No login" :
            "";
alert(message);