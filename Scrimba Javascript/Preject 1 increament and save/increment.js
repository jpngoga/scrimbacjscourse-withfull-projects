let count = 0;

function increment() {
    var computerScore = document.getElementById('count-el');
    var number = computerScore.innerHTML;
    number++;
    computerScore.textContent = number;
    count++;
}

function save() {

    let countstr = count + " - "
    var SaveEl = document.getElementById('save-el');
    let computerScore = document.getElementById('count-el');


    SaveEl.textContent += countstr;
    computerScore.textContent = 0;
    count = 0




    console.log(count)


}