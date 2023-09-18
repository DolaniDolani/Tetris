import { move, spawn, autoFall, stopFall, gameLoop, setBackgroundColor, startMusic1, disablePlayButton } from "./utilities.js";
import { Cell } from "./cell.js";
import { Tetromino } from "./tetromino.js";



function simulateKeyEvent(keyCode, key, code) {
    const event = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        keyCode: keyCode,
        key: key,
        code: code
    });
    document.dispatchEvent(event);
}


function setupTouchControls() {
    document.getElementById('left-btn').addEventListener('click', () => {
        simulateKeyEvent(37, 'ArrowLeft', 'ArrowLeft');
    });
    
    document.getElementById('right-btn').addEventListener('click', () => {
        simulateKeyEvent(39, 'ArrowRight', 'ArrowRight');
    });
    
    document.getElementById('down-btn').addEventListener('click', () => {
        simulateKeyEvent(40, 'ArrowDown', 'ArrowDown');
    });
    
    document.getElementById('rotate-left-btn').addEventListener('click', () => {
        simulateKeyEvent(81, 'Q', 'KeyQ');
    });
    
    document.getElementById('rotate-right-btn').addEventListener('click', () => {
        simulateKeyEvent(69, 'E', 'KeyE');
    });
    
}



export function startGame(){
    disablePlayButton();
    setBackgroundColor();
    startMusic1();
    setupTouchControls();
    gameLoop();
}



window.startGame = startGame;