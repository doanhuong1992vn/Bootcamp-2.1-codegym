let inputWidth = prompt('Nhập vào chiều rộng hình chữ nhật: ');
while (inputWidth <=0) {
   inputWidth = prompt ('Vui lòng nhập lại giá trị > 0');
}
let width = parseInt(inputWidth);
document.write('Chiều rộng = '+width+'<br>');
let inputHeight = prompt('Nhập vào chiều cao hình chữ nhật: ');
while (inputHeight <=0) {
    inputHeight = prompt ('Vui lòng nhập lại giá trị > 0');
}
let height = parseInt(inputHeight);
document.write('Chiều cao = '+height+ '<br>');
let are = width*height;
document.write('Diện tích hình chữ nhật = '+are);
