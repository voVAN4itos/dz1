function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Случайный исход матча
function getRandomOutcome() {
    const outcomes = ["победа", "ничья", "поражение"];
    return outcomes[getRandomInt(0, 2)];
}

// Случайный  счета и исхода матча
const actualScore = `${getRandomInt(0, 5)}:${getRandomInt(0, 5)}`;
const actualOutcome = getRandomOutcome();

function checkMatch() {
    document.getElementById('actualScore').innerText = actualScore;
    document.getElementById('actualOutcome').innerText = actualOutcome;

    document.getElementById('actualScoreContainer').style.display = 'block';
    document.getElementById('actualOutcomeContainer').style.display = 'block';

    const predictedScore = document.getElementById('predictedScore').value;
    const predictedOutcome = document.getElementById('predictedOutcome').value;

    const result = checkMatchResult(actualScore, predictedScore, actualOutcome, predictedOutcome);
    document.getElementById('result').innerText = result;
}

function reset() {
    location.reload();
}

function checkMatchResult(actualScore, predictedScore, actualOutcome, predictedOutcome) {
    if (actualScore === predictedScore && actualOutcome === predictedOutcome) {
        return "Счёт был угадан верно!";
    } else if (actualScore !== predictedScore && actualOutcome === predictedOutcome) {
        return "Счёт не угадали, но исход угадали";
    } else {
        return "Ни счёт, ни исход вы не угадали"; 
    }
}

