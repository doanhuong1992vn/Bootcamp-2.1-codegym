function convert() {
    let amount =
        document.getElementById("amount").value;
    let fromCur =
        document.getElementById("fromCur").value;
    let toCur =
        document.getElementById("toCur").value;
    let result;
    if (fromCur == "VND" && toCur == "USD") {
        result = amount / 25000;
        document.getElementById("result").innerText = 'Result: ' +result +' $';
    } else if (fromCur == 'USD' && toCur == 'VND') {
        result = amount * 25000;
        document.getElementById("result").innerText = 'Result: ' +result +' VND';
    } else if (fromCur == 'VND' && toCur == 'VND') {
        result = amount;
        document.getElementById("result").innerText = 'Result: ' +result +' VND';
    } else if (fromCur == 'USD' && toCur == 'USD') {
        result = amount;
        document.getElementById("result").innerText = 'Result: ' +result +' $';
    }

}