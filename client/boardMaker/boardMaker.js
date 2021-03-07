class Board {
  constructor (width, height) {
    this.height = height;
    this.width = width;
    this.makeBoard = this.makeBoard.bind(this);
    this.board = this.makeBoard();
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
}

let sweeper = new Board(2, 5);
console.log(sweeper);
