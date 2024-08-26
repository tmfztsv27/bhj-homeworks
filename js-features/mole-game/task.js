let hits = 0;
let misses = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function checkGameStatus() {
    if (hits === 10) {
        alert('Победа! Вы убили всех кротов!');
        resetGame();
    } else if (misses === 5) {
        alert('Поражение! Вы промахнулись 5 раз.');
        resetGame();
    }
}

function resetGame() {
    hits = 0;
    misses = 0;
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            hits++;
        } else {
            misses++;
        }
        checkGameStatus();
    };
}