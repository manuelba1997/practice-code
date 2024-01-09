//HTML element

const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startbutton = document.getElementById('start');
const gameOverSignal = document.getElementById('gameOver');


//Game settings 
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};

const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: 1
}

//Game variables
let snake;
let score;
let direction;
let boardSquare;
let emptySquare;
let moveInterval;


const setGame = () => {
snake = ['00','01','02','03'];
score = snake.length;
direction = 'ArrowRight';
boardSquare = Array.from(Array(boardSize), ( ) => new Array(boardSize).fill(squareTypes.emptySquare));  
console.log(boardSquare);
board.innerHTML = '';
}


const startGame =() => {
    setGame();
}

startbutton.addEventListener('click',startGame);
