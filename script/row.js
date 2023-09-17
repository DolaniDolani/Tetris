import { Cell } from "./cell.js";
export class Row {
    constructor(element) {
        this.element = element;
    }

    get style(){
        return this.element.style;
    }

    getCell(cellIndex) {
        return new Cell(this.element.getElementsByClassName("cell")[cellIndex]);
    }
}