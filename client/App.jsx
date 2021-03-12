import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Board from './components/Board.jsx';

const App = ({ SweeperBoard }) => {
  const [boardSize, setBoardSize] = useState(10);
  const [mines, setMines] = useState(7);
  let board = new SweeperBoard(boardSize, boardSize);
  board.placeMines(mines);
  console.table('created board: ', board.board)
  return (
    <div>
      <div>
        <Board board={board.board}/>
      </div>
    </div>
  )
}

App.propTypes = {
  SweeperBoard: PropTypes.func.isRequired
}

export default App;
