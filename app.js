const playerOne = "X";
const playerTwo = "O";
let turns = 0;
let endGame = false;

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("trhee");
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
    if(uno.textContent === dos.textContent && dos.textContent === tres.textContent  && tres.textContent !== "") {
        if(uno.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (cuatro.textContent === cinco.textContent && seis.textContent === cuatro.textContent && cuatro.textContent !== "") {
        if(cuatro.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (siete.textContent === ocho.textContent && nueve.textContent === siete.textContent  && siete.textContent !== "") {
        if(siete.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (uno.textContent === cuatro.textContent && siete.textContent === uno.textContent  && uno.textContent !== "") {
        if(uno.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (dos.textContent === cinco.textContent && ocho.textContent === dos.textContent  && dos.textContent !== "") {
        if(dos.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (tres.textContent === seis.textContent && nueve.textContent === tres.textContent && tres.textContent !== "") {
        if(tres.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }  else if (uno.textContent === cinco.textContent && cinco.textContent === nueve.textContent && nueve.textContent !== "") {
        if(uno.textContent === "O") {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }  else if (siete.textContent === cinco.textContent && cinco.textContent === tres.textContent && tres.textContent !== "") {
        if(siete.textContent === "O") {
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
                } else {
                    btn.textContent = playerTwo
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
                } else {
                    btn.textContent = playerTwo
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






