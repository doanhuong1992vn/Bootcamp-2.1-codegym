function kiemTra() {
    let numberMonth = parseInt(document.getElementById("inputMonth").value) ;
    switch (numberMonth) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            document.getElementById("inKetQua").innerText =
                'Tháng ' +numberMonth+ ' có 31 ngày.' ;
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            document.getElementById("inKetQua").innerText =
                'Tháng ' +numberMonth+ ' có 30 ngày.' ;
            break;
        case 2 :
            document.getElementById("inKetQua").innerText =
                'Tháng ' +numberMonth+ ' có 28 hoặc 29 ngày.' ;
            break;
        default :
            document.getElementById("inKetQua").innerText =
                "Đừng giỡn mặt với tôi. Làm gì có tháng " +numberMonth+ " tồn tại!" ;
    }
}