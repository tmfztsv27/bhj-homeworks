let counter = 0;
let lastClickTime = 0;

const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
const speedElement = document.getElementById('clicker__speed');

cookie.onclick = function() {
    // Увеличиваем счётчик кликов
    counter++;
    counterElement.textContent = counter;

    // Рассчитываем скорость клика
    const currentTime = new Date().getTime();
    if (lastClickTime !== 0) {
        const clickSpeed = 1 / ((currentTime - lastClickTime) / 1000);
        speedElement.textContent = clickSpeed.toFixed(2);
    }
    lastClickTime = currentTime;
};