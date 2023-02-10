let a = parseInt(prompt("Enter number a: ", 0));
while (isNaN(a)) {
    a = parseInt(prompt("Enter number a: ", 0));
}
let b = parseInt(prompt("Enter number b: ", 0));
while (isNaN(b)) {
    b = parseInt(prompt("Enter number b: ", 0));
}
let c = a + b;
alert((c<4) ? "Below" : "Over");
