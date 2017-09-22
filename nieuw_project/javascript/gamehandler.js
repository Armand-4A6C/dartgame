//--------------------
// set Id variables
//--------------------

var playerMode1 = document.getElementById('playermode1');
var playerMode2 = document.getElementById('playermode2');
var gameLog = document.getElementById('gamelog');
var scoreLogP1 = document.getElementById('score_player1');
var scoreLogP2 = document.getElementById('score_player2');

//--------------------
// set game variables
//--------------------
var scoreP1; //current progression
var scoreP2; //current progression
var cpu = 0;
var activeGame = 0; // 0:inactive, 1:active
var player2 // used to store the name of player2
var Pturn // 0:P1, 1:P2
var gameScores = [];

function setGameScores() {
    var ii = 20
    for (var i = 0; i < 20; i++) {
        gameScores[i] = ii
        ii--
    }
    gameScores[20] = 50
}
setGameScores()

function setGame1() {
    cpu = 1;
    player2 = "Cpu"
    startGame()
}

function setGame2() {
    cpu = 0;
    player2 = "P2"
    startGame()
}

function startGame() {
    var ii = 19
    activeGame = 1;
    pTurn = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    gameLog.innerHTML = "P1 mag beginnen";

    scoreLogP1.innerHTML = "P1:" + gameScores[scoreP1];
    scoreLogP2.innerHTML = player2 + ":" + gameScores[scoreP2];
}

function gameController(throwScore) {
    if (pTurn == 0) {

        gameLog.innerHTML = "P1 Mist <br>";
        if (gameScores[scoreP1] == throwScore) {
            scoreP1++

            if (gameScores[scoreP1] < 21) {
                scoreLogP1.innerHTML = "P1:" + gameScores[scoreP1];
                gameLog.innerHTML = "P1 Raakt " + throwScore +"<br>";

            } else if (gameScores[scoreP1] == 50) {
                scoreLogP1.innerHTML = "P1:Bullseye";
                gameLog.innerHTML = "P1 Raakt " + throwScore +"<br>";

            } else {
                pTurn = 1;
                activeGame = 0;
                gameLog.innerHTML = "P1 has won the game";
            }
        }
        if (activeGame == 1) {
            pTurn = 1;
            gameLog.innerHTML += player2 + " is aan de beurt";
        }
        if (cpu == 1 && activeGame == 1) {
            controleCpu()
        }
    }
    else {
        gameLog.innerHTML = player2 + " Mist <br>";
        if (gameScores[scoreP2] == throwScore) {
            scoreP2++

            if (gameScores[scoreP2] < 21) {
                scoreLogP2.innerHTML = player2 + ":" + gameScores[scoreP2];
                gameLog.innerHTML = player2 + " Raakt " + throwScore +"<br>";

            } else if (gameScores[scoreP2] == 50) {
                scoreLogP2.innerHTML = player2 + ":Bullseye";
                gameLog.innerHTML = player2 + " Raakt " + throwScore +"<br>";

            } else {
                activeGame = 0;
                gameLog.innerHTML = player2 + " has won the game";
            }
        }
        if (activeGame == 1) {
            pTurn = 0;
            gameLog.innerHTML += "P1 is aan de beurt";
        }
    }
}

function controleCpu() {
    var min = gameScores[scoreP2] -1;
    var max = gameScores[scoreP2] +0;
    var cpuThrow = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log("cpu throws:" + cpuThrow);
    gameController(cpuThrow)
}


playerMode1.addEventListener("click", setGame1);
playerMode2.addEventListener("click", setGame2);
