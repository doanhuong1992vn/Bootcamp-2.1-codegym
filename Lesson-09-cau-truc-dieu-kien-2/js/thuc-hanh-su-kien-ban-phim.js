let imgNo = document.getElementById("nobita").style;
function moveRight() {
    let imgNo = document.getElementById("nobita").style ;
    imgNo.left = parseInt(imgNo.left) + 10 + "px";
}
function moveLeft() {
    let imgNo = document.getElementById("nobita").style ;
    imgNo.left = parseInt(imgNo.left) - 10 + "px";
}
function moveUp() {
    let imgNo = document.getElementById("nobita").style ;
    imgNo.top = parseInt(imgNo.top) - 10 + "px" ;
}
function moveDown() {
    let imgNo = document.getElementById("nobita").style ;
    imgNo.top = parseInt(imgNo.top) + 10 + "px" ;
}
function nhanBanPhim(event) {
    switch (event.keyCode) {
        case 37 :
            moveLeft();
            break;
        case 38 :
            moveUp();
            break;
        case 39 :
            moveRight();
            break;
        case 40 :
            moveDown();
            break;
    }
}
function ready() {
    let imgNo = document.getElementById("nobita").style;
    imgNo.position = 'relative';
    //sử dụng absolute hay relative trong trường hợp này đều được
    //nhưng trong bài thực hành sự kiện chuột thì chỉ sử dụng đưc relative
    //vậy tại sao trong sự kiện chuột thì sử dụng absolute không được?
    imgNo.left = '150px';
    imgNo.top = '150px' ;
    window.addEventListener("keydown", nhanBanPhim);
}
window.onload = ready();