let view = document.getElementById("manHinh");
function inputValue (abc) {
    view.value += abc ;
}
function result() {
    // let result = eval(view.value);
    // view.value = result ;
    view.value = eval(view.value);
}