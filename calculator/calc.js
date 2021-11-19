document.getElementById('0').onclick = function() {
    document.getElementById('infield').value += '0';
}
document.getElementById('1').onclick = function() {
    document.getElementById('infield').value += '1';
}
document.getElementById('2').onclick = function() {
    document.getElementById('infield').value += '2';
}
document.getElementById('3').onclick = function() {
    document.getElementById('infield').value += '3';
}
document.getElementById('4').onclick = function() {
    document.getElementById('infield').value += '4';
}
document.getElementById('5').onclick = function() {
    document.getElementById('infield').value += '5';
}
document.getElementById('6').onclick = function() {
    document.getElementById('infield').value += '6';
}
document.getElementById('7').onclick = function() {
    document.getElementById('infield').value += '7';
}
document.getElementById('8').onclick = function() {
    document.getElementById('infield').value += '8';
}
document.getElementById('9').onclick = function() {
    document.getElementById('infield').value += '9';
}
document.getElementById('.').onclick = function() {
    document.getElementById('infield').value += '.';
}
document.getElementById('clear').onclick = function() {
    document.getElementById('infield').value = '';
}
document.getElementById('bksp').onclick = function() {
    document.getElementById('infield').value = document.getElementById('infield').value.slice(0, -1);
}

var flag, num1, num2;
document.getElementById('+').onclick = function() {
    num1 = Number(document.getElementById('infield').value);
    flag = 0;
    document.getElementById('infield').value = '';
}
document.getElementById('-').onclick = function() {
    num1 = Number(document.getElementById('infield').value);
    flag = 1;
    document.getElementById('infield').value = '';
}
document.getElementById('*').onclick = function() {
    num1 = Number(document.getElementById('infield').value);
    flag = 3;
    document.getElementById('infield').value = '';
}
document.getElementById('/').onclick = function() {
    num1 = Number(document.getElementById('infield').value);
    flag = 4;
    document.getElementById('infield').value = '';
}

document.getElementById('=').onclick = function() {
    if(flag == 0) {
        num2 = Number(document.getElementById('infield').value);
        document.getElementById('infield').value = String(num1 + num2);
    }
    if(flag == 1) {
        num2 = Number(document.getElementById('infield').value);
        document.getElementById('infield').value = String(num1 - num2);
    }
    if(flag == 3) {
        num2 = Number(document.getElementById('infield').value);
        document.getElementById('infield').value = String(num1 * num2);
    }
    if(flag == 4) {
        num2 = Number(document.getElementById('infield').value);
        if(num2 != 0) {
            document.getElementById('infield').value = String(num1 / num2);
        }
        else {
            document.getElementById('infield').value = "Division by 0 not possible!";
        }
    }
}