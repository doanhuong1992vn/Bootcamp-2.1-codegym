let year = parseInt(prompt("Enter a year: "));
while (isNaN(year)) {
    year = parseInt(prompt("Please enter the year number, not the letter: "));
}
if ((year%4 == 0 && year%100 !== 0) || (year%100 == 0 && year%400 == 0)) {
    alert(year+ " is a leap year !");
}else alert(year+ " is not a leap year !") ;
