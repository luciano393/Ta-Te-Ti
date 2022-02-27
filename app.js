const playerOne = "X";
const playerTwo = "O";
let turns = 0;
let endGame = false;

const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");

const reset = document.getElementById("reset");
let winner = document.getElementById("winner");


uno.addEventListener("click", () => { shoot(uno) });
dos.addEventListener("click", () => { shoot(dos) });
tres.addEventListener("click", () => { shoot(tres) });
cuatro.addEventListener("click", () => { shoot(cuatro) });
cinco.addEventListener("click", () => { shoot(cinco) });
seis.addEventListener("click", () => { shoot(seis) });
siete.addEventListener("click", () => { shoot(siete) });
ocho.addEventListener("click", () => { shoot(ocho) });
nueve.addEventListener("click", () => { shoot(nueve) });
reset.addEventListener("click", resetAll)

function win() {
    if(uno.textContent === dos.textContent && dos.textContent === tres.textContent  && tres.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (cuatro.textContent === cinco.textContent && seis.textContent === cuatro.textContent && cuatro.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (siete.textContent === ocho.textContent && nueve.textContent === siete.textContent  && siete.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (uno.textContent === cuatro.textContent && siete.textContent === uno.textContent  && uno.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (dos.textContent === cinco.textContent && ocho.textContent === dos.textContent  && dos.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    } else if (tres.textContent === seis.textContent && nueve.textContent === tres.textContent && tres.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }  else if (uno.textContent === cinco.textContent && cinco.textContent === nueve.textContent && nueve.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }  else if (siete.textContent === cinco.textContent && cinco.textContent === tres.textContent && tres.textContent !== "") {
        if(turns % 2 === 0) {
            winner.textContent = "Player two win"
            endGame = true;
        } else {
            winner.textContent = "Player one win"
            endGame = true;
        }
    }
    endGame ? setTimeout(() => {
        resetAll()
    }, 3000) : null;
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
                    winner.textContent = "Empate"
                    setTimeout(() => {
                        resetAll()
                    }, 3000)
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
    uno.textContent = "";
    dos.textContent = "";
    tres.textContent = "";
    cuatro.textContent = "";
    cinco.textContent = "";
    seis.textContent = "";
    siete.textContent = "";
    ocho.textContent = "";
    nueve.textContent = "";
    winner.textContent = "";
    endGame = false;
}






