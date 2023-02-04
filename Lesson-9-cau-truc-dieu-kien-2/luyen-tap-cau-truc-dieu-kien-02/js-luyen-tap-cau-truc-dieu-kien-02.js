//Bài 1: Chuyển từ độ C sang độ F.
function convertC () {
    let a1 = document.querySelector("#input1").value;
    let p1 = document.querySelector("#p1");
    if (a1 === "") {
        p1.style.color = "red";
        p1.innerHTML = "Vui lòng nhập số <sup>o</sup>C muốn chuyển đổi!";
    } else {
        let b1 = a1 * 9/5 + 32;
        p1.style.color = "green";
        p1.innerHTML = `Kết quả: ${a1}<sup>o</sup>C = ${b1}<sup>o</sup>F`;
    }
}
document.querySelector("#button1").addEventListener("click", convertC);
//Kết thúc bài 1


//Bài 2: Chuyển từ mét sang feet:
function convertFeet () {
    let a2 = document.querySelector("#input2").value;
    let p2 = document.querySelector("#p2");
    if (a2 === "") {
        p2.style.color = "red";
        p2.innerHTML = "Vui lòng nhập số mét muốn chuyển đổi!";
    } else {
        let b2 = a2 * 3.2808;
        p2.style.color = "green";
        p2.innerHTML = `Kết quả: ${a2}m = ${b2}feet`;
    }
}
document.querySelector("#button2").addEventListener("click", convertFeet);
//Kết thúc bài 2



//Bài 3: Tính diện tích hình vuông khi biết cạnh a.
function getResult3 () {
    let a3 = document.querySelector("#input3").value;
    let p3 = document.querySelector("#p3");
    if (a3 === "" || a3 <= 0) {
        p3.style.color = "red";
        p3.innerText = "Vui lòng nhập chiều dài cạnh hình vuông > 0"
    } else {
        let area3 = Math.pow(a3, 2);
        p3.style.color = "green";
        p3.innerHTML = `Diện tích hình vuông = ${area3} m<sup>2</sup>`;
    }
}
document.querySelector("#button3").addEventListener("click", getResult3);
//Kết thúc bài 3


//Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
function getArea4 () {
    let a4 = document.querySelector("#input4a").value;
    let b4 = document.querySelector("#input4b").value;
    let p4 = document.querySelector("#p4");
    if (a4 === "" || b4 === "") {
        p4.style.color = "red";
        p4.innerText = "Vui lòng nhập đầy đủ 2 cạnh a và b";
    } else if (a4 <= 0 || b4 <= 0) {
        p4.style.color = "red";
        p4.innerText = "Các cạnh của hình chữ nhật phải lớn hơn 0. Vui lòng nhập lại";
    } else {
        let area4 = a4 * b4;
        p4.style.color = "green";
        p4.innerHTML = `Diện tích hình chữ nhật = ${area4} m<sup>2</sup>`;
    }
}
document.querySelector("#button4").addEventListener("click", getArea4);
//Kết thúc bài 4


//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
function getArea5 () {
    let a5 = document.querySelector("#canhA").value;
    let b5 = document.querySelector("#canhB").value;
    let p5 = document.querySelector("#p5");
    let area5 = (a5*b5)/2;
    if (a5 === "" || b5 === "") {
        p5.style.color = "red";
        p5.innerText = "Vui lòng nhập đầy đủ 2 cạnh a và b!";
    } else if (a5 <= 0 || b5 <= 0) {
        p5.style.color = "red";
        p5.innerText = "Vui lòng nhập giá trị a và b lớn hơn 0";
    } else {
        p5.style.color = "green";
        p5.innerHTML =
            `Diện tích tam giác vuông = ${area5} m<sup>2</sup>`;
    }
}
document.querySelector("#button5").addEventListener("click", getArea5);
//Kết thúc bài 5


//Bài 6: Giải phương trình bậc 1.
function getX6 () {
    let a6 = document.querySelector("#input6a").value;
    let b6 = document.querySelector("#input6b").value;
    let p6 = document.querySelector("#p6");
    if (a6 === "" || b6 === "") {
        p6.style.color = "red";
        p6.innerText = "Vui lòng nhập đầy đủ 2 số a và b";
    } else if (a6 == 0) {
        if (b6 == 0) {
            p6.style.color = "green";
            p6.innerText = `Phương trình ${a6}x + ${b6} = 0 có vô số nghiệm`;
        } else if (b6 != 0) {
            p6.style.color = "green";
            p6.innerText = `Phương trình ${a6}x + ${b6} = 0 vô nghiệm`;
        }
    } else {
        let x = -b6/a6;
        p6.style.color = "green";
        p6.innerHTML = `Phương trình ${a6}x + ${b6} = 0 có 1 nghiệm là: x = ${x}`;
    }
}
document.querySelector("#button6").addEventListener("click", getX6);
//Kết thúc bài 6


//Bài 7: Giải phương trình bậc 2
function getX7 () {
    let a7 = document.querySelector("#input7a").value;
    let b7 = document.querySelector("#input7b").value;
    let c7 = document.querySelector("#input7c").value;
    let p7 = document.querySelector("#p7");
    let delta7 = eval(Math.pow(b7, 2) - 4 * a7 * c7);
    if (a7 === "" || b7 === "" || c7 === "") {
        p7.style.color = "red";
        p7.innerText = "Vui lòng nhập đầy đủ 3 số a, b và c";
    } else if (a7 == 0) {
        p7.style.color = "red";
        p7.innerText = "Vui lòng nhập số a # 0";
    } else if (delta7 < 0) {
        p7.style.color = "green";
        p7.innerText = "Phương trình vô nghiệm";
    } else if (delta7 == 0) {
        let x0 = -b7 / 2 * a7;
        p7.style.color = "green";
        p7.innerHTML = `Phương trình có nghiệm kép: x<sub>1</sub> = x<sub>2</sub> = ${x0}`;
    } else if (delta7 > 0) {
        let x1 = (-b7 + Math.sqrt(delta7)) / (2 * a7);
        let x2 = (-b7 - Math.sqrt(delta7)) / (2 * a7);
        p7.style.color = "green";
        p7.innerHTML =
            `Phương trình có 2 nghiệm phân biệt là : x<sub>1</sub> = ${x1} và x<sub>2</sub> = ${x2}`
    }
}
document.querySelector("#button7").addEventListener("click", getX7);
//Kết thúc bài 7



/*
Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
 */
function checkAge () {
    let a8 = Number(document.querySelector("#input8").value);
    let p8 = document.querySelector("#p8");
    if (Number.isInteger(a8) && a8 > 0 && a8 < 120) {
        p8.style.color = "green";
        p8.innerText = "Đúng rồi! Đây là tuổi của một người nào đó";
    } else {
        p8.style.color = "red";
        p8.innerText =
            "Đây không phải tuổi của một người nào đó rồi bạn ơi. Nó là cái thứ gì á ???";
    }
}
document.querySelector("#button8").addEventListener("click", checkAge);
//Kết thúc bài 8



/*
Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác.
Điều kiện để a,b,c là cạnh của một tam giác là:
    a,b,c > 0
    a + b > c
    b + c > a
    a + c > b
 */
function checkTriangle() {
    let a9 = document.querySelector("#input9a").value;
    let b9 = document.querySelector("#input9b").value;
    let c9 = document.querySelector("#input9c").value;
    let p9 = document.querySelector("#p9");
    let numberA9 = Number(a9);
    let numberB9 = Number(b9);
    let numberC9 = Number(c9);
    if (a9 === "" || b9 === "" || c9 === "") {
        p9.style.color = "red";
        p9.innerText = "Vui lòng nhập đầy đủ các giá trị a, b và c";
    } else if (a9 <= 0 || b9 <= 0 || c9 <= 0) {
        p9.style.color = "red";
        p9.innerText = "Giá trị của a, b và c phải lớn hơn 0. Vui lòng nhập lại";
    } else if ((numberA9 + numberB9 > numberC9)
                && (numberB9 + numberC9 > numberA9)
                && (numberA9 + numberC9 > numberB9)) {
        p9.style.color = "green";
        p9.innerText = "Đúng! Đây là 3 cạnh của 1 tam giác.";
    } else {
        p9.style.color = "green";
        p9.innerText = "Sai! Đây không phải 3 cạnh của 1 tam giác.";
    }
}
document.querySelector("#button9").addEventListener("click", checkTriangle);
//Kết thúc bài 9



/*
Bài 10: Viết chương trình tính tiền điện với chỉ số mới và chỉ số cũ Được nhập vào từ bàn phím.
In ra màn hình chỉ số cũ, chỉ số mới và số tiền phải trả.
Biết rằng 100 kWh đầu giá 1000,
từ kWh 101 – 150 giá 1200,
từ kWh 151 – 200 giá 2000,
từ 201 trở lên giá 2500.
 */
function getMoney () {
    let a10 = document.querySelector("#input10a").value;
    let b10 = document.querySelector("#input10b").value;
    let numberA10 = Number(a10);
    let numberB10 = Number(b10);
    let c10 = numberB10 - numberA10;
    let money;
    let pErro = document.querySelector("#pErro");
    let p10a = document.querySelector("#p10a");
    let p10b = document.querySelector("#p10b");
    let p10Money = document.querySelector("#p10Money");
    if (a10 === "" || b10 === "") {
        pErro.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
    } else if (numberA10 < 0 || numberA10 > numberB10) {
        pErro.innerText =
            "Vui lòng nhập thông tin hợp lệ! Chỉ số cũ phải > 0 và chỉ số mới không được nhỏ hơn chỉ số cũ.";
    } else if (c10 <= 100) {
        money = c10 * 1000;
        p10a.innerHTML = "Số điện cũ: " + numberA10 + "kWh";
        p10b.innerHTML = "Số điện mới: " + numberB10 + "kWh";
        p10Money.innerHTML = `Số tiền cần thanh toán = ${money} đồng`;
    } else if (c10 <= 150) {
        money = 100 * 1000 + (c10 - 100) * 1200;
        p10a.innerHTML = "Số điện cũ: " + numberA10 + "kWh";
        p10b.innerHTML = "Số điện mới: " + numberB10 + "kWh";
        p10Money.innerHTML = `Số tiền cần thanh toán = ${money} đồng`;
    } else if (c10 <= 200) {
        money = 100 * 1000 + 50 * 1200 + (c10 - 150) * 2000;
        p10a.innerHTML = "Số điện cũ: " + numberA10 + "kWh";
        p10b.innerHTML = "Số điện mới: " + numberB10 + "kWh";
        p10Money.innerHTML = `Số tiền cần thanh toán = ${money} đồng`;
    } else {
        money = 100 * 1000 + 50 * 1200 + 50 * 2000 + (c10 - 200) * 2500;
        p10a.innerHTML = "Số điện cũ: " + numberA10 + "kWh";
        p10b.innerHTML = "Số điện mới: " + numberB10 + "kWh";
        p10Money.innerHTML = `Số tiền cần thanh toán = ${money} đồng`;
    }
}
document.querySelector("#button10").addEventListener("click", getMoney);