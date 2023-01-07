let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

console.log(cards);

function startGame() {
    renderGame();
}

function getRandomCard() {
    let randNum = Math.floor(Math.random() * 13) + 1;
    if (randNum > 10) {
        return 10;
    } else if (randNum === 1) {
        return 11;
    } else {
        return randNum;
    }

}

function startGame() {

    isAlive = true
        //generate 2 random numbers
        // Re-assign the cards and the sum variables so that the game can start
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;




    renderGame();

}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
        sumEl.textContent = "Sum: " + sum;
    }

    if (sum <= 20) {
        message = "Do you want to Draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBalackJack = true;

    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {

    if ((isAlive === true) && (hasBlackJack === false)) {
        console.log("Drawing a new card from the deck!");

        let card = getRandomCard();

        sum += card;
        cards.push(card)

        renderGame();
    }


}