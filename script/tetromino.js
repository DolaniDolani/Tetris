export class Tetromino {
    constructor(colorString, shapeChar, ...cells){
        this.cells = cells;
        this.color = colorString;
        this.shape = shapeChar;
        this.setColor(colorString);
        
    }

    setColor(color){
        console.log(color)
        this.cells.forEach(cell => {
            cell.setColor(color);
        })
    }

    moveDown(){
        var newCells = new Array();
        this.cells.forEach(cell => {
            var newCell = cell.moveDown();
            newCells.push(newCell);
        })
        this.cells = newCells;
        this.setColor(this.color);
    }

    moveLeft(){
        var newCells = new Array();
        this.cells.forEach(cell => {
            var newCell = cell.moveLeft();
            
            newCells.push(newCell);
        })

        this.cells = newCells;
        this.setColor(this.color);
    }

    moveRight(){
        var newCells = new Array();
        this.cells.forEach(cell => {
            var newCell = cell.moveRight();
            newCells.push(newCell);
        })
        this.cells = newCells;
        this.setColor(this.color);
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