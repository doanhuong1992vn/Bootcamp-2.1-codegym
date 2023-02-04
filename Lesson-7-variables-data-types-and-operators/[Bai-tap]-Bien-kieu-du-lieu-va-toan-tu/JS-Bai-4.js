let inputBanKinh = prompt('Nhập vào bán kính hình tròn (cm): ');
while (isNaN(inputBanKinh) || inputBanKinh<=0) {
    inputBanKinh = prompt('Vui lòng nhập giá trị số thực > 0 : ')
}
let banKinh = (Math.round(inputBanKinh*100))/100;
document.write('Bán kinh hình tròn (Đã được làm tròn) = '+banKinh+ ' cm<br>');
let chuVi = (Math.round((2*Math.PI*banKinh)*100))/100;
document.write('Chu vi hình tròn = '+chuVi+ ' cm');
alert('Chu vi hình tròn có bán kính '+banKinh+ ' cm = ' +chuVi+ ' cm');