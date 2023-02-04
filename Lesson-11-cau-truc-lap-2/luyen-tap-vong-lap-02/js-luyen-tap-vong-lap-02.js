//Bài 1: In n số trong dãy Fibonacci.
function printFibonacci(n) {
    let toError = document.querySelector("#toError1");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult1");
    toResult.innerText = "";
    n = Number(document.querySelector("#input1").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Vui lòng nhập số nguyên > 0";
    } else {
//Dưới đây là khối code chính để tính toán:
        let myString = "", n2 = 0, n1 = 1, nNext;
        if (n == 1) {
            myString += 0;
            toResult.innerText = `${n} số đầu tiên trong dãy Fibonacci là: ${myString}`;
        } else if (n == 2) {
            myString += "0, 1";
            toResult.innerText = `${n} số đầu tiên trong dãy Fibonacci là: ${myString}`;
        } else if (n > 2) {
            myString = "0, 1";
            for (let i = 2; i < n; i++) {
                nNext = n1 + n2;
                n2 = n1;
                n1 = nNext;
                myString += ", " + nNext;
            }
            toResult.innerText = `${n} số đầu tiên trong dãy Fibonacci là: ${myString}`;
        }
    }
}

document.querySelector("#button1").addEventListener("click", printFibonacci);
//Kết thúc bài 1



//Bài 2: Tính giai thừa của một số nguyên dương
function factorialCalculation(n) {
    let toError = document.querySelector("#toError2");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult2");
    toResult.innerText = "";
    n = Number(document.querySelector("#input2").value);
    if (n < 0 || !Number.isInteger(n)) {
        toError.innerText = "Số nguyên dương là số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else if (document.querySelector("#input2").value == "") {
        toError.innerText = "Vui lòng nhập dữ liệu!"
    } else if (n == 0) {
        toError.innerText = "Số 0 không phải là số nguyên dương. Tuy nhiên:";
        toResult.innerText = "0! = 1";
    } else if (n == 1) {
        toResult.innerText = "1! = 1";
    } else {
        let result = 1, explain = "1";
        for (let i = 2; i <= n; i++) {
            result *= i;
            explain += " x " + i;
        }
        toResult.innerText = `${n}! = ${explain} = ${result}`;
    }
}
document.querySelector("#button2").addEventListener("click", factorialCalculation)
//Kết thúc bài 2.



//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
//Góc vuông nằm ở bên trái phía dưới
function printTriangleA (n) {
    let toError = document.querySelector("#toError3a");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult3a");
    toResult.innerText = "";
    n = Number(document.querySelector("#input3a").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Chiều cao phải là số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else {
        let result = "";
        for (let i = 0; i<n; i++) {
            // Vòng for ngoài là để tạo độ cao tam giác
            for (let j = 0; j<=i; j++) {
                //Vòng for trong là để tạo các hàng trong tam giác (hàng dài nhất là 1 cạnh vuông)
                result += " * ";
            }
            /*
            Vẽ 1 hàng bằng vòng for trong xong rồi thì ta xuống hàng
            Xuống hàng xong i tăng độ cao thì chạy tiếp vòng for trong để vẽ hàng tiếp theo
             */
            result += "<br>";
        }
        toResult.innerHTML = result;
    }
}
document.querySelector("#button3a").addEventListener("click", printTriangleA);

//Góc vuông nằm ở bên trái phía trên
function printTriangleB (n) {
    let toError = document.querySelector("#toError3b");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult3b");
    toResult.innerText = "";
    n = Number(document.querySelector("#input3b").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Chiều cao phải là số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else {
        let result = "";
        for (let i = n; i>=0; i--) {
            for (let j = 0; j<i; j++) {
                result += " * ";
            }
            result += "<br>";
        }
        toResult.innerHTML = result;
    }
}
document.querySelector("#button3b").addEventListener("click", printTriangleB);

//Góc vuông nằm ở bên phải phía dưới
function printTriangleC (n) {
    let toError = document.querySelector("#toError3c");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult3c");
    toResult.innerText = "";
    n = Number(document.querySelector("#input3c").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Chiều cao phải là số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else {
        let result = "", k = 0;
        for (let i = n; i>=0; i--) {
            for (let j = 0; j<i; j++) {
                result += "&nbsp&nbsp";
            }
            for (k; k < n; k++) {
                for (let h = 0; h<=k; h++) {
                    result += "*";
                }
                break;
            }
            k++;
            result += "<br>";
        }
        toResult.innerHTML = result;
    }
}
document.querySelector("#button3c").addEventListener("click", printTriangleC);

//Góc vuông nằm ở bên phải phía trên
function printTriangleD (n) {
    let toError = document.querySelector("#toError3d");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult3d");
    toResult.innerText = "";
    n = Number(document.querySelector("#input3d").value);
    if (n <= 0 || !Number.isInteger(n)) {
        toError.innerText = "Chiều cao phải là số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else {
        let result = "", k = 0;
        for (let i = n; i>=0; i--) {
            for (let j = 0; j<i; j++) {
                result += "*";
            }
            result += "<br>";
            for (k; k < n; k++) {
                for (let h = 0; h <= k; h++) {
                    result += "&nbsp&nbsp";
                }
                k++;
                break;
            }
        }
        toResult.innerHTML = result;
    }
}
document.querySelector("#button3d").addEventListener("click", printTriangleD);
//Kết thúc bài 3:


//Bài 4: In hình chữ nhật
function printRetangle (d, r) {
    let toError = document.querySelector("#toError4");
    toError.innerText = "";
    let toResult = document.querySelector("#toResult4");
    toResult.innerText = "";
    d = Number(document.querySelector("#input4d").value);
    r = Number(document.querySelector("#input4r").value);
    if (d <= 0 || !Number.isInteger(d) || r <= 0 || !Number.isInteger(r)) {
        toError.innerText = "Chiều dài và rộng phải là số nguyên > 0";
//Dưới đây là khối code chính để tính toán:
    } else {
        let result = "";
        for (let i = 1; i <= d; i++) {
            result += "*";
        }
        for (let j = 1; j <=r; j++) {
            result += "<br>*";
            for (let i = 1; i<=d-2; i++) {
                result += "&nbsp&nbsp";
            }
            result += "*";
        }
        result += "<br>";
        for (let i = 1; i <= d; i++) {
            result += "*";
        }
        toResult.innerHTML = result;
    }
}
document.querySelector("#button4").addEventListener("click", printRetangle);
//Kết thúc bài 4



//Bài 6: In hình trái tim:
function printHeart () {
    let result = "";
    for (let i=1; i<7; i++) {
        for (let j=1; j<=7; j++) {
            if (!((i==1 && (j==1 || j==4 || j==7))
            || (i==4 && (j==1 || j==7))
            || (i==5 && (j==1 || j==2 || j==6 || j==7))
            || (i==6 && (j==1 || j==2 || j==3 || j==5 || j==6 || j==7)))) {
                result += "&nbsp;*&nbsp;";
            } else {
                result += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        result += "<br>";
    }
    document.querySelector("#toResult6").innerHTML = result;
}
document.querySelector("#button6").addEventListener("click", printHeart);



