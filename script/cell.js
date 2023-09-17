var defaultBackground = 'rgb(66, 63, 125)'; 
var defaultBorder = "1px solid rgba(0, 0, 0, 0.5)"

export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.getElementById('grid').getElementsByClassName('row')[y].getElementsByClassName('cell')[x];
    }

    setColor(colorString){
        this.color = colorString;
        this.element.style.backgroundColor = this.color;
        this.element.style.border = "1px solid rgba(0, 0, 0, 0.5)";
    }

    moveDown(){
        this.restoreColor();
        var newCell = new Cell(this.x, this.y + 1);
        return newCell;
    }

    moveLeft(){
        this.restoreColor();
        var newCell = new Cell(this.x - 1, this.y);
        return newCell;
    }

    moveRight(){
        this.restoreColor();
        var newCell = new Cell(this.x + 1, this.y);
        return newCell;
    }

    restoreColor(){
        this.element.style.backgroundColor = defaultBackground;
        this.element.style.border = defaultBorder;
    }

    checkBelow(){
        if(this.y == 20){
            return false;
        }
        else return true;
    }

    checkLeft(){
        if(this.x == 0){
            return false;
        }
        else return true;
    }

    checkRight(){
        if(this.x == 9){
            return false;
        }
        else return true;
    }
   
}