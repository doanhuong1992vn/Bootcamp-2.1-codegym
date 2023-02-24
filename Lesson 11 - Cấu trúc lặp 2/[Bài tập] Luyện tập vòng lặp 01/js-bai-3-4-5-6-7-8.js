//Bài 3: Hiển thị ra n số trong dãy fibonacci đầu tiên.
function printFibonacci(n) {
    let toError = document.querySelector("#toError3");
    toError.innerText = ""
    let toString = document.querySelector("#toString3");
    n = Number(document.querySelector("#input3").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Vui lòng nhập số nguyên > 0";
        toString.innerText = ""
    } else {
//Dưới đây là khối code chính để tính toán:
        let arr = [0, 1];
        if (n === 1) {
            toString.innerText = `${n} số đầu tiên trong dãy Fibonacci là: ${arr[0]}`;
        } else if (n === 2) {
            toString.innerText = `${n} số đầu tiên trong dãy Fibonacci là: ${arr}`;
        } else if (n > 2) {
            for (let i = 2; i < n; i++) {
                arr[i] = arr[i-1]+arr[i-2];
            }
            toString.innerText = `${n} số đầu tiên trong dãy Fibonacci là: ${arr}`;
        }
    }
}

document.querySelector("#button3").addEventListener("click", printFibonacci);
//Kết thúc bài 3


//Bài 4: Tìm số thứ n đầu tiên trong dãy fibonacci chia hết cho 5 (Không tính số 0 đầu tiên)
function printNumber(n) {
    let toError = document.querySelector("#toError4");
    toError.innerText = "";
    let toString = document.querySelector("#toString4");
    let toResult = document.querySelector("#toResult");
    n = Number(document.querySelector("#input4").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Vui lòng nhập số nguyên > 0";
        toString.innerText = "";
        toResult.innerText = "";
    } else {
//Dưới đây là khối code chính để tính toán:
        let arr = [0, 1], i = 2, count = 0;
        while (arr[i] % 5 !== 0) {
            arr[i] = arr[i - 1] + arr[i - 2];
            if (arr[i] % 5 == 0) {
                ++count;
                if (count == n) {
                    toString.innerHTML = `Dãy Fibonacci để đối chiếu :${arr}`;
                    toResult.innerText = `Số thứ ${n} trong dãy chia hết cho 5 là: ${arr[i]}`;
                    break;
                } else {
                    i++;
                    continue;
                }
            } else {
                i++;
            }
        }
    }
}

document.querySelector("#button4").addEventListener("click", printNumber);
//Kết thúc bài 4


//Bài 5: Tính tổng của n số đầu tiên trong dãy fibonacci.
function printSum(n) {
    let toError = document.querySelector("#toError5");
    toError.innerText = "";
    let toString = document.querySelector("#toString5");
    toString.innerText = "";
    let toResult = document.querySelector("#toResult5");
    toResult.innerText = "";
    n = Number(document.querySelector("#input5").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Vui lòng nhập số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else if (n == 1) {
        toString.innerHTML = `Số đầu tiên trong dãy Fibonacci là: 0`;
        toResult.innerText = "Result = 0";
    } else if (n == 2) {
        toString.innerHTML = "2 số đầu tiên trong dãy Fibonacci là: 0,1";
        toResult.innerText = "Result = 1";
    } else {
        let arr = [0, 1], sum = 1;
        for (let i = 2; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
            sum += arr[i];
        }
        toString.innerHTML = `${n} số đầu tiên trong dãy Fibonacci là: ${arr}`;
        toResult.innerText = "Result = " + sum;
    }
}

document.querySelector("#button5").addEventListener("click", printSum);
//Kết thúc bài 5


//Bài 6: Tính tổng của n số chia hết cho 7 đầu tiên trong các số tự nhiên.
function printLesson6(n) {
    let toError = document.querySelector("#toError6");
    toError.innerText = "";
    let toString = document.querySelector("#toString6");
    toString.innerText = "";
    let toResult = document.querySelector("#toResult6");
    toResult.innerText = "";
    n = Number(document.querySelector("#input6").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Vui lòng nhập số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else if (n == 1) {
        toString.innerHTML = `${n} số tự nhiên đầu tiên là : 0`;
        toResult.innerText = "Result = 0";
    } else {
        let arr = [0], sum = 0;
        for (let i = 1; i < n; i++) {
            arr[i] = arr[i - 1] + 7;
            sum += arr[i];
        }
        toString.innerHTML = `${n} số tự nhiên đầu tiên là : ${arr}`;
        toResult.innerText = `Tổng của ${n} số tự nhiên đầu tiên là: ${sum}`;
    }
}

document.querySelector("#button6").addEventListener("click", printLesson6);
//Kết thúc bài 6


/*
Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
 */
function printLess7() {
    let myString = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            myString += "<span style='color: orange'>FizzBuzz</span>, ";
        } else if (i % 3 == 0) {
            myString += "<span style='color: black'>Fizz</span>, ";
        } else if (i % 5 == 0) {
            myString += "<span style='color: red'>Buzz</span>, ";
        } else {
            myString += i + ", ";
        }
    }
    document.querySelector("#p7").innerHTML = myString;
}

document.querySelector("#button7").addEventListener("click", printLess7);
//Kết thúc bài 7


//Bài 8: Game đoán số
function playGame() {
    let max = Number(prompt("Số bạn muốn đoán trong khoảng từ 0 tới bao nhiêu?"));
    while (isNaN(max) || max <= 0) {
        if (isNaN(max)) {
            max = Number(prompt("Lỗi!!! Dữ liệu nhập vào không hợp lệ."));
        } else if (max <= 0) {
            max = Number(prompt("Bạn phải nhập số lớn hơn 0. Vui lòng nhập lại."))
        }
    }
    let isNumber = Number(prompt("Nhập số bí ẩn bạn muốn đoán: "));
    let randomNum = Math.round(Math.random() * max);
    let i = 2;
    while (i <= 3) {
        if (isNaN(isNumber)) {
            isNumber = Number(prompt("Lỗi!!! Dữ liệu nhập vào không hợp lệ."));
            i++;
            continue;
        } else if (isNumber == randomNum) {
            alert("Xin chúc mừng!!! Bạn đã đoán đúng.");
            break;
        } else if (isNumber < randomNum) {
            isNumber = Number(prompt("Sai mất rồi! Số bạn đoán nhỏ hơn con số bí ẩn của chúng tôi"));
            i++;
            continue;
        } else if (isNumber > randomNum) {
            isNumber = Number(prompt("Sai mất rồi! Số bạn đoán lớn hơn con số bí ẩn của chúng tôi"));
            i++;
            continue;
        }
    }
    if (i == 4) {
        if (isNumber == randomNum) {
            alert("Xin chúc mừng!!! Bạn đã đoán đúng.");
        } else {
            alert("Bạn đã đoán hết 3 lần rồi. Tạm biệt!");
        }
    }
}

document.querySelector("#button8").addEventListener("click", playGame);
//Kết thúc bài 8


