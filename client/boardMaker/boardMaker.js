class SweeperBoard {
  constructor (width, height) {
    this.height = height;
    this.width = width;
    this.board = this.makeBoard();
    this.makeBoard = this.makeBoard.bind(this);
    this.placeMines = this.placeMines.bind(this);
    this.incrementSpace = this.incrementSpace.bind(this);
  }

  makeBoard () {
    let board = [];
    for (let i = 0; i < this.height; i++) {
      board.push([]);
      for (let j = 0; j < this.width; j++) {
        board[i].push(0);
      }
    }
    return board;
  }

  placeMines (num) {
    if (num > this.height + this.width) {
      return null;
    }
    // set x value to key, y to value stored in coords to ensure no duplicates
    // nope, this overwrites the x key.
    let coords = {}
    let i = 0;
    // select unique coords based on num
    while (i < num) {
      // Choose random coordinates for each mine
      let x = Math.floor(Math.random() * Math.floor(this.width));
      let y = Math.floor(Math.random() * Math.floor(this.height));
      // if coordinates don't already contain a mine, set coordinates and increment incrementer
      if (!coords[x + ',' + y]) {
        coords[x + ',' + y] = true;
        i++;
      }
    }
    // NOW, we need to place the mines on the board, and increment the surrounding spaces counters
    Object.keys(coords).forEach((key) => {
      // console.log('Coordinates: ', coords)
      let coordsArray = key.split(',');
      // console.log(coordsArray);
      let x = Number(coordsArray[0]);
      let y = Number(coordsArray[1]);
      // // Set mines to false
      this.board[y][x] = false;
      // // console.log('x coord: ', x, ' y coord: ', y, ' board: ', this.board)
      // // Increment left, right, up, and down, if exist
      // right
      this.incrementSpace(x + 1, y);
      // right-top
      this.incrementSpace(x + 1, y + 1);
      // right-bottom
      this.incrementSpace(x + 1, y - 1);
      // left
      this.incrementSpace(x - 1, y);
      // left top
      this.incrementSpace(x - 1, y + 1);
      // left bottom
      this.incrementSpace(x - 1, y - 1);
      // middle bottom
      this.incrementSpace(x, y - 1);
      // middle top
      this.incrementSpace(x, y + 1);
    })
  }

  incrementSpace (x, y) {
    if (typeof this.board[y] === 'object' && typeof this.board[y][x] === 'number') {
      this.board[y][x] += 1;
    }
    // console.log('board in increment: ', this.board /*, ' x and y coords: ', x, y */)
  }
}

const sweeper = new SweeperBoard(8, 8);
sweeper.placeMines(10);
console.table(sweeper.board);

export default SweeperBoard;
