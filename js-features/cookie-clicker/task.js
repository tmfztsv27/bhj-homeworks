let counter = 0;
const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

cookie.onclick = function() {
    counter++;
    counterElement.textContent = counter;
    if (cookie.width === 200) {
        cookie.width = 250;
        cookie.height = 250;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
};
