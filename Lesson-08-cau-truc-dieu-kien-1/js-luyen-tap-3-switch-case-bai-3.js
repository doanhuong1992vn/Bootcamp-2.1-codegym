let inputNumber = parseInt(prompt("Enter a number: ",0));
if (inputNumber > 0) {
    alert("1");
} else if (inputNumber < 0) {
    alert("-1");
} else {
    alert("0");
}

// Dưới đây là thay if else thành switch case:
// let inputNumber = parseInt(prompt("Enter a number: (-5, 0 or 5) ",0));
// switch (inputNumber) {
//     case 5 :
//         alert("1");
//         break;
//     case -5 :
//         alert("-1");
//         break;
//     default :
//         alert("0");
// }

// ôi thật oái oăm khi ko thể thay thế if else thành switch case trong trường hợp này 1 cách
// thỏa đáng vì theo mình hiểu thì switch case là gán giá trị vào biến theo từng case