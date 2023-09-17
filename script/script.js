import { move, spawn, autoFall } from "./utilities.js";
import { Cell } from "./cell.js";
import { Tetromino } from "./tetromino.js";





var tetromino = spawn();

move(tetromino);
autoFall(tetromino);