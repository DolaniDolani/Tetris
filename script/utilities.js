import { Tetromino } from "./tetromino.js";
import { Cell } from "./cell.js";

export function move(tetromino){
    document.addEventListener('keydown', (event) => {
        var code = event.code;
        if(code == 'ArrowDown' || code == 'KeyS') tetromino.moveDown();
        if(code == 'ArrowLeft' || code == 'KeyA') tetromino.moveLeft();
        if(code == 'ArrowRight' || code == 'KeyD') tetromino .moveRight();

    })
}

export function autoFall(tetromino){
    setInterval(function(){
        tetromino.moveDown()
    }, 1000)
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
    const cell1 = new Cell(4,0);
    const cell2 = new Cell(5,0);
    const cell3 = new Cell(5,2);
    const cell4 = new Cell(5,1);
    return new Tetromino('purple', 'T', cell1,cell2,cell3,cell4 )
}

function spawnI(){
    const cell1 = new Cell(3,0);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(5,0);
    const cell4 = new Cell(6,0);
    return new Tetromino('blue', 'I', cell1,cell2,cell3,cell4 )
}

function spawnL(){
    const cell1 = new Cell(4,1);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(5,0);
    const cell4 = new Cell(6,0);
    return new Tetromino('orange', 'L', cell1,cell2,cell3,cell4 )
}

function spawnJ(){
    const cell1 = new Cell(6,1);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(5,0);
    const cell4 = new Cell(6,0);
    return new Tetromino('pink', 'J', cell1,cell2,cell3,cell4 )
}

function spawnS(){
    const cell1 = new Cell(4,1);
    const cell2 = new Cell(5,1);
    const cell3 = new Cell(5,0);
    const cell4 = new Cell(6,0);
    return new Tetromino('red', 'S', cell1,cell2,cell3,cell4 )
}

function spawnZ(){
    const cell1 = new Cell(5,1);
    const cell2 = new Cell(4,0);
    const cell3 = new Cell(5,0);
    const cell4 = new Cell(6,1);
    return new Tetromino('green', 'Z', cell1,cell2,cell3,cell4 )
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}