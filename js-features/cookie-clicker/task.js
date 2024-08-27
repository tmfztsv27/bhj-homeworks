let counter = 0;
let lastClickTime = 0;

const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

cookie.onclick = function() {
    // Увеличиваем счётчик кликов
    counter++;
    counterElement.textContent = counter;

     // Меняем размер печеньки
     if (cookie.width === 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }