let counter = 0;
const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

cookie.onclick = function() {
    counter++;
    counterElement.textContent = counter;
    
    if (cookie.style.transform === 'scale(1)') {
        cookie.style.transform = 'scale(1.25)';
    } else {
        cookie.style.transform = 'scale(1)';
    }
};
