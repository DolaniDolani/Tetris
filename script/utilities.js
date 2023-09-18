import { Tetromino } from "./tetromino.js";
import { Cell } from "./cell.js";

var defaultBackgroundColor = 'rgb(66, 63, 125)'; 

export function gameLoop(){

    var tetromino = spawn();
    autoFall(tetromino, stopFall);

}

export function move(tetromino){
    var moveEvent = (event) => {
        var code = event.code;
        if(code == 'ArrowDown' || code == 'KeyS')  tetromino.moveDown();
        if(code == 'ArrowLeft' || code == 'KeyA') tetromino.moveLeft();
        if(code == 'ArrowRight' || code == 'KeyD') tetromino.moveRight();
        if(code == 'KeyE') tetromino.rotateRight();
    };
    document.addEventListener('keydown', moveEvent);
    return moveEvent;
}

export function stopMove(currentMoveEvent){
    if(currentMoveEvent){
        document.removeEventListener('keydown', currentMoveEvent);
    }
}

export function autoFall(tetromino, onCannotFall){
    var moveEvent = move(tetromino);
    var autoFallInterval = setInterval(function(){
        if(tetromino.checkBelow()) tetromino.moveDown()
        else {
            //exit setInterval if tetromino can't move below
            clearInterval(autoFallInterval);
            onCannotFall(moveEvent);
        }        
    }, 1000)
}

export function stopFall(previousMoveEvent){
    stopMove(previousMoveEvent);
    var tetromino = spawn();
    //recursion on autoFall to keep spawning tetrominoes
    autoFall(tetromino, stopFall)
    
}

export function spawn(){
    var randomNumber = getRandomInt(7);
    switch(randomNumber){
        case(0):
            return spawnO();
        case(1):
            return spawnT();
        case(2):
            return spawnI();
        case(3):
            return spawnL();
        case(4):
            return spawnJ();
        case(5):
            return spawnS();
        case(6):
            return spawnZ();
    }
}

function spawnO(){
    const cell1 = new Cell(4,0);
    const cell2 = new Cell(5,0);
    const cell3 = new Cell(4,1);
    const cell4 = new Cell(5,1);
    return new Tetromino('yellow', 'O', cell1,cell2,cell3,cell4 )
}

function spawnT(){
    const cell1 = new Cell(5,0);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(6,0);
    const cell4 = new Cell(5,1);
    return new Tetromino('purple', 'T', cell1,cell2,cell3,cell4 )
}

function spawnI(){
    const cell1 = new Cell(5,0);
    const cell2 = new Cell(3,0);
    const cell3 = new Cell(4,0);
    const cell4 = new Cell(6,0);
    return new Tetromino('blue', 'I', cell1,cell2,cell3,cell4 )
}

function spawnL(){
    const cell1 = new Cell(5,0);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(4,1);
    const cell4 = new Cell(6,0);
    return new Tetromino('orange', 'L', cell1,cell2,cell3,cell4 )
}

function spawnJ(){
    const cell1 = new Cell(5,0);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(6,0);
    const cell4 = new Cell(6,1);
    return new Tetromino('pink', 'J', cell1,cell2,cell3,cell4 )
}

function spawnS(){
    const cell1 = new Cell(5,0);
    const cell2 = new Cell(5,1);
    const cell3 = new Cell(4,1);
    const cell4 = new Cell(6,0);
    return new Tetromino('red', 'S', cell1,cell2,cell3,cell4 )
}

function spawnZ(){
    const cell1 = new Cell(5,0);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(5,1);
    const cell4 = new Cell(6,1);
    return new Tetromino('green', 'Z', cell1,cell2,cell3,cell4 )
}

export function setBackgroundColor(){
    const grid = document.getElementById('grid');
    for(let y = 0; y < 20; y++){
        for(let x = 0; x<10; x++){
            const cell = document.getElementsByClassName('row')[y].getElementsByClassName('cell')[x];
            cell.style.backgroundColor = defaultBackgroundColor;
        }
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}