function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const timerElement = document.getElementById('timer');

    const countdownInterval = setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = `${hours}:${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
}

// Стартовое значение в секундах
const countdownTime = 10;
startCountdown(countdownTime);