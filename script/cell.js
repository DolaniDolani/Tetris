var defaultBackground = 'rgb(66, 63, 125)'; 
var defaultBorder = "1px solid rgba(0, 0, 0, 0.5)"

export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.getElementById('grid').getElementsByClassName('row')[y].getElementsByClassName('cell')[x];
    }

    setColor(colorString){
        this.element.style.backgroundColor = colorString;
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
        else {
            return true};
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
    
    //returns true if cell below is empty, false if not
    checkBelowEmpty(){
        return this.checkEmpty(this.x, this.y + 1);
    }

    checkLeftEmpty(){
        return this.checkEmpty(this.x - 1, this.y);
    }

    checkRightEmpty(){
        return this.checkEmpty(this.x + 1, this.y);
    }

    calculateRelativeDistance(cell){
        let relativeDistance = new Array();
        relativeDistance[0] = cell.x - this.x;
        relativeDistance[1] = cell.y - this.y;
        return relativeDistance;
    }

    //rotates the argument cells around the current one
    rotateRightAroundThis(cell){
        let relativeDistance = this.calculateRelativeDistance(cell);
        let rotatedX = this.x - relativeDistance[1];
        let rotatedY = this.y + relativeDistance[0];
        
        return new Cell(rotatedX, rotatedY);
    }

    checkEmpty(x,y){
        if(y>19) return false;
        if(x<0 || x>9) return false;
        var cell =  document.getElementById('grid').getElementsByClassName('row')[y].getElementsByClassName('cell')[x];
        if(cell.style.backgroundColor == defaultBackground){
            return true;
        }
        else return false;
    }
   
}