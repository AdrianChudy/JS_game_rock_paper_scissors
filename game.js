// Game: Rock, Paper, Scissors

const gameStats = {
    number: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};

const usersChoice = {
    playerHand: "",
    aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

// pierwsza funkcja - wybór użytkownika (gracza)

function playerChoice() {
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px gold";
    usersChoice.playerHand = this.dataset.option;
}
// druga funkcja - wybór komputera

const aiChoice = () => {
    return usersChoice.aiHand = hands[Math.floor((Math.random() * hands.length))].dataset.option;
}

// rezultat gry i wyświetlenie wyników

function gameResult() {

    if (usersChoice.playerHand === usersChoice.aiHand) {
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "grey";
        document.querySelector('.draws span').textContent = ++gameStats.draws;
        document.querySelector('.draws span').style.color = "grey";
    } else if (usersChoice.playerHand === "papier" && usersChoice.aiHand === "kamień" || usersChoice.playerHand === "kamień" && usersChoice.aiHand === "nożyczki" || usersChoice.playerHand === "nożyczki" && usersChoice.aiHand === "papier") {
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś !!!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
        document.querySelector('.wins span').textContent = ++gameStats.wins;
        document.querySelector('.wins span').style.color = "green";
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
        document.querySelector('.losses span').textContent = ++gameStats.losses;
        document.querySelector('.losses span').style.color = "red";
    }

    document.querySelector('[data-summary="your-choice"]').textContent = usersChoice.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = usersChoice.aiHand;
    document.querySelector('.numbers span').textContent = ++gameStats.number;
}

const endGame = () => {
    hands.forEach(hand => hand.style.boxShadow = "");
    usersChoice.playerHand = "";
    usersChoice.aiHand = "";
}

// funkcja start gry

function startGame() {
    if (!usersChoice.playerHand) {
        return alert("Startujemy! Wybierz dłoń!!!");
    }
    aiChoice();
    gameResult();
    endGame();
}

hands.forEach(hand => hand.addEventListener("click", playerChoice));
document.querySelector(".start").addEventListener("click", startGame);