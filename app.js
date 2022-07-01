const Gameboard = (() => {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];
    const players = [];
    let pointer = "X";
    let turn = 'Player One'
    function switchPointer() {
        if (Gameboard.pointer === "X") {
            return Gameboard.pointer = "O";
        } else if (Gameboard.pointer === "O") {
            return Gameboard.pointer = "X";
        }
    }
    function switchTurn() {
        if (Gameboard.turn === "Player One") {
            return Gameboard.turn = 'Player Two'
        } else if (Gameboard.turn === "Player Two") {
            return Gameboard.turn = "Player One"
        }
    }
    function gameWin() {
        if ((gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") ||
            (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") ||
            (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") ||
            (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") ||
            (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") ||
            (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") ||
            (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") ||
            (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        } else if ((gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") ||
            (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] == "O")) {
            winner.textContent = `${Gameboard.turn} WON!`;
            disableBoard();
        }
    }
    function reset() {
        Gameboard.turn = 'Player One'
        Gameboard.gameBoard = ["", "", "", "", "", "", "", "", ""];
        Gameboard.pointer = "X"
        winner.textContent = ''
        disableBoard();
    }
    return {
        gameBoard,
        players,
        pointer,
        turn,
        switchPointer,
        switchTurn,
        gameWin,
        reset
    }
})();

function disableBoard() {
    position.forEach(div => {
        div.classList.toggle("disable");
    })
}


// Player constructor
const Player = (name, assignXO) => {
    // const chooseSide = () => {
    //     assignXO = prompt('Choose X or O');
    // }
    return { name, assignXO };
}

const btnP1 = document.querySelector("#p1");
const btnP2 = document.querySelector("#p2");
const playerOne = document.querySelector(".playerOne")
const playerTwo = document.querySelector(".playerTwo")
const display = document.querySelector(".display")
const winner = document.querySelector(".winner")
const holderXO = document.querySelectorAll("p")
const reset = document.querySelector("#reset")

// CREATING PLAYER ONE
btnP1.addEventListener('click', () => {
    // CHECKING IF P1 ALREADY CREATED
    if (Gameboard.players[0] === undefined) {
        const _playerOne = Player(prompt('Enter P1 name'), "X")
        playerOne.textContent = `Player 1: ${_playerOne.name}`
        console.log(Gameboard.players)
        return Gameboard.players.push(_playerOne);
    } else {
        alert("Player One already selected")
    }
})

// CREATING PLAYER TWO
btnP2.addEventListener('click', () => {
    // CHECKING IF P2 ALREADY CREATED
    if (Gameboard.players[1] === undefined) {
        const _playerTwo = Player(prompt('Enter P2 name'), "0")
        playerTwo.textContent = `Player 2: ${_playerTwo.name}`
        console.log(Gameboard.players)
        return Gameboard.players.push(_playerTwo);
    } else {
        alert("Player Two already selected")
    }
})

// RESET GAME
reset.addEventListener("click", () => {
    Gameboard.reset();
    position.forEach(div => {
        div.textContent = ""
    })

})

// CREATING DISPLAY "X" "O"
const position = document.querySelectorAll(".position")
position.forEach((div) => {
    div.addEventListener('click', () => {
        if (div.textContent == "") {
            div.textContent = Gameboard.pointer
            Gameboard.gameBoard[div.id] = Gameboard.pointer
            Gameboard.gameWin();
            Gameboard.switchPointer();
            Gameboard.switchTurn();
            display.textContent = `${Gameboard.turn} turn`
            console.log(Gameboard.gameBoard)
        } else {
            alert("Already selected")
        }

    })
})



// TODO - RESET BUTTON (NOT WORKING WELL)
// CHECK WIN CONDITION

