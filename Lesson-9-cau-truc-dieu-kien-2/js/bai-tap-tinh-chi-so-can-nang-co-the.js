
function kiemTra() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi = weight / (Math.pow(height, 2));
    document.getElementById("chiSoBmi").innerText =
        "Chỉ số BMI của bạn = " +bmi;
    let result;
    if (bmi < 18.5) {
        result = "Thiếu cân";
    } else if (bmi < 25) {
        result = "Bình thường";
    } else if (bmi < 30) {
        result = "Thừa cân";
    } else {
        result = "Béo phì";
    }
    document.getElementById("inKetQua").innerText =
        "Thể trạng: " +result;
}