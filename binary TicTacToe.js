function boardView(board) {                 //Main Board
    console.log("**************");
    console.log(`${board[0]}|${board[1]}|${board[2]}`);
    console.log("----|----|----");
    console.log(`${board[3]}|${board[4]}|${board[5]}`);
    console.log("----|----|----");
    console.log(`${board[6]}|${board[7]}|${board[8]}`);
    console.log("**************");
}//Main Board

function playerIni() {              //Player Registration
    alert("First Player!");
    aPlayer = prompt("Please insert your name:");
    alert("Second Player!");
    bPlayer = prompt("Please insert your name:");
    aPCounter = 0;
    bPCounter = 0;
}//Player Registration

//function gameIni() {        //Game Initialization
//    game = gameInit;
//    console.clear();
//}//Game Initialization

function welcome() {                               //Initialize Game
    alert("Welcome to the binary Tic-Tac-Toe!");
    alert("Each number corresponds to a spot, choose wisely as you test your opponent!");
    boardView(gameBoard);
    alert("Click ok when ready!");
}//Initialize Game

function gameSequencer() {                          //Main Game Routine
    for (let turn = 0; turn < 9; turn++) {
        console.clear();
        turn == 0 || turn % 2 == 0 ? currPlayer = playerA : currPlayer = playerB;
        boardView(gameBoard);
        boardView(game);
        plays(gameBoard);
        if (winCondition(game)) {
            currPlayer === playerA ? aPCounter++ : bPCounter++;
            currPlayer === playerA ? currPlayer = aPlayer : currPlayer = bPlayer;
            console.log("Congratulations " + currPlayer + " you were victorious");
            boardView(game);
            return
        }
    }
}//Main Game Routine

function plays(array) {             //Play Sequence
    let play;
    let isValid = false;
    do {
        play = stringCheck("Make your choice!");
        for (let i = 0; i < array.length; i++) {
            if (play === array[i]) {
                isValid = true;
                checkSpot(game[i]) ? game[i] = currPlayer : isValid = false;
            }
        }
    } while (!isValid);
}//Play Sequence

function checkSpot(spot) {              //Check Space if occupied
    if (spot != playerA && spot != playerB) {
        return spot;
    }
    else {
        alert("You need to select a free spot");
        return
    }
}//Check Space if occupied

function winCondition(isWin) {                      //Win Condition
    let mywin = false;
    if (isWin[0] != "    " && isWin[0] === isWin[1] && isWin[1] === isWin[2]) {
        return mywin = true;
    }
    if (isWin[3] != "    " && isWin[3] === isWin[4] && isWin[4] === isWin[5]) {
        return mywin = true;
    }
    if (isWin[6] != "    " && isWin[6] === isWin[7] && isWin[7] === isWin[8]) {
        return mywin = true;
    }
    if (isWin[0] != "    " && isWin[0] === isWin[3] && isWin[3] === isWin[6]) {
        return mywin = true;
    }
    if (isWin[1] != "    " && isWin[1] === isWin[4] && isWin[4] === isWin[7]) {
        return mywin = true;
    }
    if (isWin[2] != "    " && isWin[2] === isWin[5] && isWin[5] === isWin[8]) {
        return mywin = true;
    }
    if (isWin[0] != "    " && isWin[0] === isWin[4] && isWin[4] === isWin[8]) {
        return mywin = true;
    }
    if (isWin[2] != "    " && isWin[2] === isWin[4] && isWin[4] === isWin[6]) {
        return mywin = true;
    }
    return mywin;
}//Win Condition

function stringCheck(text) {                                //String Check Function
    let isValid = false;
    let tempString;
    do {
        tempString = prompt(text);
        if (gameBoard.includes(tempString)) {
            isValid = true;
        }
    } while (!isValid);
    return tempString;
}//String Check Function

function endGame() {                //End game Results
    alert("Current Score is:");
    alert(`${aPlayer}   vs   ${bPlayer}   :   ${aPCounter}   -   ${bPCounter}`);
}//End game Results

function replay(text) {                 //Go for another Round???
    let input = prompt(text);
    if (input.toUpperCase() === "YES") {
        return true;
    }
    else {
        console.log(`${aPlayer}   vs   ${bPlayer}   :   ${aPCounter}   -   ${bPCounter}`);
        console.log("Thank you for playing !!!");
        return false;
    }
}//Go for another Round???   

function bossMode() {       //One Ring to rule them ALL
    welcome();
    playerIni();
    gameMain();
}//One Ring to rule them ALL

function gameMain() {           //Main Game  
    let rematch = true;
    while (rematch === true) {
        game = ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "];
        console.clear();
        gameSequencer();
        endGame();
        rematch = replay("Would you like to play again? (YES/NO)");
        console.log(rematch);
    }
}//Main Game

let game;
const playerA = "One1";
const playerB = "Zer0";
const gameBoard = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000"];
//const gameInit = ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "]; 1m Dollar Question-Γιατι δεν παιρνει τιμη η game οταν λεω game=gameInit; ?? 
let aPlayer;
let bPlayer;
let currPlayer;
let aPCounter = 0;
let bPCounter = 0;

bossMode();
