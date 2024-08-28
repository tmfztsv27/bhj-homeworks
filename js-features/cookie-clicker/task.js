let counter = 0;
const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

cookie.onclick = function () {
    cookie.width = ++counterElement.textContent % 2 ? 250 : 200;
}
