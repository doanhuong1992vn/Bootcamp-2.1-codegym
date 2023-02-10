let inputDiemLy = prompt('Nhập điểm môn Vật Lý theo thang điểm 10: ');
while (isNaN(inputDiemLy) || inputDiemLy<0 || inputDiemLy>10) {
    inputDiemLy = prompt('Nhập lại điểm số trong thang điểm 10: ');
}
let diemLy = (Math.round(inputDiemLy*100))/100;
document.write('Điểm Vật Lý = '+diemLy+'<br>');


let inputDiemHoa = prompt('Nhập điểm môn Hóa học theo thang điểm 10: ');
while (isNaN(inputDiemHoa) || inputDiemHoa<0 || inputDiemHoa>10) {
    inputDiemHoa = prompt('Nhập lại điểm số trong thang điểm 10: ');
}
let diemHoa = (Math.round(inputDiemHoa*100))/100;
document.write('Điểm Hóa Học = ' +diemHoa+'<br>');


let inputDiemSinh = prompt('Nhập điểm môn Sinh học theo thang điểm 10: ');
while (isNaN(inputDiemSinh) ||inputDiemSinh<0 ||inputDiemSinh>10) {
    inputDiemSinh = prompt('Nhập lại điểm số trong thang điểm 10: ');
}
let diemSinh = (Math.round(inputDiemSinh*100))/100;
document.write('Điểm Sinh Học = ' +diemSinh+ '<br>');

let average = (Math.round((diemLy+diemSinh+diemHoa)/3*100))/100;
let sum = diemLy+diemSinh+diemHoa;
document.write('Trung bình cộng của 3 môn là: '+average+ '<br>');
document.write('Tổng điểm của 3 môn là: ' +sum+ "<br>");