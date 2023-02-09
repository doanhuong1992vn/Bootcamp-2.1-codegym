let inputBanKinh = prompt('Nhập vào bán kính hình tròn (cm): ');
while (isNaN(inputBanKinh) || inputBanKinh<=0) {
    inputBanKinh = prompt('Vui lòng nhập giá trị số thực > 0 : ')
}
let banKinh = (Math.round(inputBanKinh*100))/100;
document.write('Bán kinh hình tròn (Đã được làm tròn) = '+banKinh+ ' cm<br>');
let area = (Math.round(Math.pow(banKinh, 2)*Math.PI)*100)/100;
document.write('Diện tích hình tròn = '+area+ ' cm&sup2');
alert('Diện tích hình tròn có bán kính '+banKinh+ ' cm = ' +area+ ' cm²');