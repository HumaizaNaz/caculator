function press(e) {
    var inputElement = document.getElementById('inp');
    if (inputElement) {
        inputElement.value += e;
    }
}
function eq() {
    var inputElement = document.getElementById('inp');
    if (inputElement) {
        inputElement.value = eval(inputElement.value);
    }
}
function clr() {
    var inputElement = document.getElementById('inp');
    if (inputElement) {
        inputElement.value = '';
    }
}
function clr1() {
    var inputElement = document.getElementById('inp');
    if (inputElement) {
        inputElement.value = inputElement.value.slice(0, -1);
    }
}
