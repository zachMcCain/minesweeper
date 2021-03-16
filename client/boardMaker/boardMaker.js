class SweeperBoard {
  constructor (width, height) {
    this.height = height;
    this.width = width;
    this.board = this.makeBoard();
    this.makeBoard = this.makeBoard.bind(this);
    this.placeMines = this.placeMines.bind(this);
    this.incrementSpace = this.incrementSpace.bind(this);
    this.uncoverSpace = this.uncoverSpace.bind(this);
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
    let coords = {}
    let i = 0;
    while (i < num) {
      let x = Math.floor(Math.random() * Math.floor(this.width));
      let y = Math.floor(Math.random() * Math.floor(this.height));
      if (!coords[x + ',' + y]) {
        coords[x + ',' + y] = true;
        i++;
      }
    }
    Object.keys(coords).forEach((key) => {
      let coordsArray = key.split(',');
      let x = Number(coordsArray[0]);
      let y = Number(coordsArray[1]);
      this.board[y][x] = false;
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
  }

  uncoverSpace (x, y) {
    console.log('running', this.board)
    if (this.board[y][x] === false) {
      window.alert('You\'ve lost the game')
    }
  }
}

const sweeper = new SweeperBoard(8, 8);
sweeper.placeMines(10);
console.table(sweeper.board);

export default SweeperBoard;
