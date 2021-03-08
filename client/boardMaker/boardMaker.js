class Board {
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
        board[i].push(1);
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
      if (!coords[x + y]) {
        coords[x.toString() + y.toString()] = true;
        i++;
      }
    }
    // NOW, we need to place the mines on the board, and increment the surrounding spaces counters
    Object.keys(coords).forEach((key) => {
      console.log('Coordinates: ', coords)
      let x = Number(key.slice(0, Math.floor(key.length / 2)));
      let y = Number(key.slice(Math.floor(key.length / 2)));
      // Set mines to false
      this.board[y][x] = false;
      // console.log('x coord: ', x, ' y coord: ', y, ' board: ', this.board)
      // Increment left, right, up, and down, if exist
      this.incrementSpace(x + 1, y);
      this.incrementSpace(x + 1, y + 1);
      this.incrementSpace(x + 1, y - 1);
      this.incrementSpace(x - 1, y);
      this.incrementSpace(x - 1, y + 1);
      this.incrementSpace(x - 1, y - 1);
      this.incrementSpace(x, y - 1);
      this.incrementSpace(x, y + 1);
    })
  }

  incrementSpace (x, y) {
    // console.log('increment running')
    // console.log('board in increment: ', this.board, ' x and y coords: ', x, y)
    if (this.board[y] && this.board[y][x]) {
      this.board[y][x] += 1;
    }
  }
}

const sweeper = new Board(20, 20);
sweeper.placeMines(40);
console.table(sweeper.board);
