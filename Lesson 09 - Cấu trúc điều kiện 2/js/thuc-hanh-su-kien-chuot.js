let imgObj = document.getElementById("myBall");
function startFile() {
    imgObj = document.getElementById("myBall");
    imgObj.style.position = 'relative';
    imgObj.style.left = '50px';
}
function moveBallRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
function moveBallLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}
function changeBall() {
    imgObj.src = "https://media.istockphoto.com/id/115049569/sv/foto/deflated-soccer-ball-isolated.jpg?s=1024x1024&w=is&k=20&c=S-A-BkGGjFQibTSx62PECDInOS8yvIwW9DOlZiXDKjo=";
}
imgObj.addEventListener("click", changeBall);
document.onload = startFile();