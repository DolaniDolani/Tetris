export class Tetromino {
    constructor(colorString, shapeChar, ...cells){
        this.cells = cells;
        this.color = colorString;
        this.shape = shapeChar;
        this.setColor(colorString);
        
    }

    setColor(color){
        this.cells.forEach(cell => {
            cell.setColor(color);
        })
    }

    moveDown(){
        if(this.checkBelow()){
            var newCells = new Array();
            this.cells.forEach(cell => {
                var newCell = cell.moveDown();
                newCells.push(newCell);
            })
            this.cells = newCells;
            this.setColor(this.color);
        }
    }

    moveLeft(){
        if(this.checkLeft()){
            var newCells = new Array();
            this.cells.forEach(cell => {
                var newCell = cell.moveLeft();
                
                newCells.push(newCell);
            })

            this.cells = newCells;
            this.setColor(this.color);
        }
    }

    moveRight(){
        if(this.checkRight()){
            var newCells = new Array();
            this.cells.forEach(cell => {
                var newCell = cell.moveRight();
                newCells.push(newCell);
            })
            this.cells = newCells;
            this.setColor(this.color);
        }
    }

    //returns true if tetromino can move below, false if it can't
    checkBelow(){
        return this.cells.every(cell => cell.checkBelow())
    }

    checkLeft(){
        return this.cells.every(cell => cell.checkLeft())
    }

    checkRight(){
        return this.cells.every(cell => cell.checkRight())
    }

    rotateLeft(){
        switch(this.shape){
            case('O'):
                
            case('T'):
                
            case('I'):
                
            case('L'):
                
            case('J'):
                
            case('Z'):
                
            case('S'):
                
        }
    }

    rotateRight(){
        switch(this.shape){
            case('O'):
                
            case('T'):
                
            case('I'):
                
            case('L'):
                
            case('J'):
                
            case('Z'):
                
            case('S'):
                
        }
    }
}