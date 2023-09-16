export class Row {
    constructor(element) {
        this.element = element;
    }

    getCell(cellIndex) {
        return this.element.getElementByClassName("cell")[cellIndex];
    }
}