let inputNumber = document.querySelector("#input4");
let inputArray = [];
let toError = document.querySelector("#toError");
let toPrintArr = document.querySelector("#toPrintArr");
let toReverseArr = document.querySelector("#toReverseArr");
//Bài 4:
function addElement() {
    if (inputNumber.value == '') {
        toError.innerHTML = "Vui lòng nhập dữ liệu";
    } else if (!Number.isInteger(Number(inputNumber.value))) {
        toError.innerHTML = "Vui lòng nhập số nguyên";
    } else {
        toError.innerHTML = '';
        inputArray.push(Number(inputNumber.value));
        inputNumber.value = '';
        toPrintArr.innerHTML = `Initial Array = [${inputArray}]`;
    }
}

document.querySelector("#addElement")
    .addEventListener("click", addElement);

function printResult() {
    toPrintArr.innerHTML = `Initial Array = [${inputArray}]`;
    toReverseArr.innerHTML = `Reverse Array = [${inputArray.reverse()}]`;
}

document.querySelector("#printResult")
    .addEventListener("click", printResult);
//kết thúc bài 4

//Bài 5:
let countNegativeInt = document.querySelector("#countNegativeInt");
let elementNegativeInt = document.querySelector("#elementNegativeInt");
let count = 0;
let outputElement = '';
function outputNegativeInt () {
    for (let i in inputArray) {
        if (inputArray[i] < 0) {
            count++;
            outputElement+= `Element ${inputArray[i]} : index ${i}<br>`;
        }
    }
    countNegativeInt.innerHTML = count;
    elementNegativeInt.innerHTML = outputElement;
}
document.querySelector("#outputNegativeInt")
    .addEventListener("click", outputNegativeInt);
//kết thúc bài 5

//Bài 6:
function searchElement () {
    let v = Number(document.querySelector("#input6").value);
    let toResult6 = document.querySelector("#toResult6");
    let check = inputArray.some(function(value) {
        return value == v;
    });
    if (check) {
        toResult6.style.color = "blue";
        toResult6.innerHTML = `${v} is in the Reverse Array`;
    } else {
        toResult6.style.color = "red";
        toResult6.innerHTML = `${v} is not in the Reverse Array`;
    }
}
document.querySelector("#button6")
    .addEventListener("click", searchElement);
//kết thúc bài 6

//Bài 7:
function searchAndDeleteElement () {
    let v = Number(document.querySelector("#input7").value);
    let toResult7 = document.querySelector("#toResult7");
    let toNewArray = document.querySelector("#toNewArray");
    let check = inputArray.some(function(value) {
        return value == v;
    });
    if (check) {
        toResult7.style.color = "blue";
        toResult7.innerHTML = `${v} was in the Reverse Array. It was deleted`;
        let indexV = inputArray.indexOf(v);
        inputArray.splice(indexV, 1);
        inputArray.push(0);
        toNewArray.innerHTML = `New Array = [${inputArray}]`;
    } else {
        toResult7.style.color = "red";
        toResult7.innerHTML = `${v} is not in the Reverse Array`;
    }
}
document.querySelector("#button7")
    .addEventListener("click", searchAndDeleteElement);
//Kết thúc bài 7

//Bài 8:
function sortArray () {
    let minToMax = document.querySelector("#minToMax");
    let maxToMin = document.querySelector("#maxToMin");
    minToMax.innerHTML =
        `Giá trị lớn dần: Array = [${inputArray.sort(function(a,b){return a-b;})}]`;
    maxToMin.innerHTML =
        `Giá trị nhỏ dần: Array = [${inputArray.sort(function(a,b){return b-a;})}]`;
}
document.querySelector("#button8").addEventListener("click", sortArray);
//kết thúc bài 8


//bài 9:
let arrayA = [], arrayB = []
let input9a = document.querySelector("#input9a");
let input9b = document.querySelector("#input9b");
let toError9 = document.querySelector("#toError9");
let toArrA = document.querySelector("#toArrA");
let toArrB = document.querySelector("#toArrB");
let toArrC = document.querySelector("#toArrC");
function addElementA() {
    if (input9a.value == '') {
        toError9.innerHTML = "Vui lòng nhập dữ liệu";
    } else if (!Number.isInteger(Number(input9a.value))) {
        toError9.innerHTML = "Vui lòng nhập số nguyên";
    } else {
        toError9.innerHTML = '';
        arrayA.push(Number(input9a.value));
        input9a.value = '';
        toArrA.innerHTML = `Array A = [${arrayA}]`;
    }
}
document.querySelector("#button9a")
    .addEventListener("click", addElementA);
function addElementB() {
    if (input9b.value == '') {
        toError9.innerHTML = "Vui lòng nhập dữ liệu";
    } else if (!Number.isInteger(Number(input9b.value))) {
        toError9.innerHTML = "Vui lòng nhập số nguyên";
    } else {
        toError9.innerHTML = '';
        arrayB.push(Number(input9b.value));
        input9b.value = '';
        toArrB.innerHTML = `Array B = [${arrayB}]`;
    }
}
document.querySelector("#button9b")
    .addEventListener("click", addElementB);

function printArrayABC() {
    toArrA.innerHTML = `Array A = [${arrayA}]`;
    toArrB.innerHTML = `Array B = [${arrayB}]`;
    toArrC.innerHTML = `Array C = [${arrayA.concat(arrayB)}]`;
}

document.querySelector("#button9c")
    .addEventListener("click", printArrayABC);