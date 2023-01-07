let hands = ["rock", "paper", "scissor"];

//create a function that return a random  item from the array

f

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}

console.log(getHand());

let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

//create a funtion that puts the apple onto the appleshelf
//and the oirange onto the orangeshelf use the for loop 
//a conditional statement and the tetcontent property

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += "apple";

        } else if (fruit[i] === "orange") {

            orangeShelf.textContent += "apple";


        }
    }
}
sortFruit();