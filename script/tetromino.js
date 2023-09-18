export class Tetromino {
    constructor(colorString, shapeChar, ...cells) {
        this.cells = cells;
        this.color = colorString;
        this.shape = shapeChar;
        this.setColor(colorString);

    }

    setColor(color) {
        this.cells.forEach(cell => {
            cell.setColor(color);
        })
    }

    moveDown() {
        if (this.checkBelow()) {
            var newCells = new Array();
            this.cells.forEach(cell => {
                var newCell = cell.moveDown();
                newCells.push(newCell);
            })
            this.cells = newCells;
            this.setColor(this.color);
        }
        
    }

    moveLeft() {
        if (this.checkLeft() ) {
            var newCells = new Array();
            this.cells.forEach(cell => {
                var newCell = cell.moveLeft();

                newCells.push(newCell);
            })

            this.cells = newCells;
            this.setColor(this.color);
        }
    }

    moveRight() {
        if (this.checkRight()) {
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
    checkBelow() {
        return this.cells.every(cell => cell.checkBelow()) && this.checkBelowBlock();
    }

    //returns true if tetromino can move left, false if it can't
    checkLeft() {
        return this.cells.every(cell => cell.checkLeft() && this.checkLeftBlock());
    }

    //returns true if tetromino can move right, false if it can't
    checkRight() {
        return this.cells.every(cell => cell.checkRight() && this.checkRightBlock());
    }

    //returns false is a tetromino is present below this one
    checkBelowBlock() {
        //lowerCells contains the lower cells for every column of the tetromino, the index is the column number
        var lowerCells = new Array();
        this.cells.forEach(cell => {
            if (lowerCells[cell.x] == null || lowerCells[cell.x].y < cell.y) {
                lowerCells[cell.x] = cell;
            }
        })
        return lowerCells.every(cell => cell.checkBelowEmpty());
    }

    checkLeftBlock() {
        var furtherLeftCells = new Array();
        this.cells.forEach(cell => {
            if(furtherLeftCells[cell.y] == null || furtherLeftCells[cell.y].x > cell.x) {
                furtherLeftCells[cell.y] = cell;
            }
        })
        return furtherLeftCells.every(cell => cell.checkLeftEmpty());
    }

    checkRightBlock(){
        var furtherRightCells = new Array();
        this.cells.forEach(cell => {
            if(furtherRightCells[cell.y] == null || furtherRightCells[cell.y].x < cell.x) {
                furtherRightCells[cell.y] = cell;
            }
        })
        return furtherRightCells.every(cell => cell.checkRightEmpty());
    }






    rotateLeft() {

        

        switch (this.shape) {
            case ('O'):
                
            case ('T'):

            case ('I'):

            case ('L'):

            case ('J'):

            case ('Z'):

            case ('S'):

        }
    }

    rotateRight() {

        for(var i=1; i<4; i++) {
            this.cells[i].restoreColor();
        }
        for(var i=1; i<4;i++){
            this.cells[i] = this.cells[0].rotateRightAroundThis(this.cells[i]);
        }
        this.setColor(this.color)

        switch (this.shape) {
            case ('O'):

            case ('T'):

            case ('I'):

            case ('L'):

            case ('J'):

            case ('Z'):

            case ('S'):

        }
    }
}