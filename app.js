const playerOne = "X";
const playerTwo = "O";
let turns = 0;
let endGame = false;
const pop = new Audio("pop.mp3")

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const reset = document.getElementById("reset");
let winner = document.getElementById("winner");


one.addEventListener("click", () => { shoot(one) });
two.addEventListener("click", () => { shoot(two) });
three.addEventListener("click", () => { shoot(three) });
four.addEventListener("click", () => { shoot(four) });
five.addEventListener("click", () => { shoot(five) });
six.addEventListener("click", () => { shoot(six) });
seven.addEventListener("click", () => { shoot(seven) });
eight.addEventListener("click", () => { shoot(eight) });
nine.addEventListener("click", () => { shoot(nine) });
reset.addEventListener("click", resetAll)

function win() {
    if(one.textContent === two.textContent && two.textContent === three.textContent  && three.textContent !== "") {
        if(one.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (four.textContent === five.textContent && six.textContent === four.textContent && four.textContent !== "") {
        if(four.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (seven.textContent === eight.textContent && nine.textContent === seven.textContent  && seven.textContent !== "") {
        if(seven.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (one.textContent === four.textContent && seven.textContent === one.textContent  && one.textContent !== "") {
        if(one.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (two.textContent === five.textContent && eight.textContent === two.textContent  && two.textContent !== "") {
        if(two.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (three.textContent === six.textContent && nine.textContent === three.textContent && three.textContent !== "") {
        if(three.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }  else if (one.textContent === five.textContent && five.textContent === nine.textContent && nine.textContent !== "") {
        if(one.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }  else if (seven.textContent === five.textContent && five.textContent === three.textContent && three.textContent !== "") {
        if(seven.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }
}

function shoot(btn) {
    if(!endGame) {
        if(turns > 7) {
            if(btn.textContent === "") {
                if(turns % 2 === 0) {
                    btn.textContent = playerOne
                    pop.play();
                } else {
                    btn.textContent = playerTwo
                    pop.play();
                }
                win()
                if(!endGame) {
                    winner.textContent = "Tie"
                }
            }
        } else {
            if(btn.textContent === "") {
                if(turns % 2 === 0) {
                    btn.textContent = playerOne
                    pop.play();
                } else {
                    btn.textContent = playerTwo
                    pop.play();
                }
                turns += 1
                win()
            }
        }
    }
}

function resetAll (){
    turns = 0;
    one.textContent = "";
    two.textContent = "";
    three.textContent = "";
    four.textContent = "";
    five.textContent = "";
    six.textContent = "";
    seven.textContent = "";
    eight.textContent = "";
    nine.textContent = "";
    winner.textContent = "";
    endGame = false;
}






