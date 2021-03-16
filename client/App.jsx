import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Board from './components/Board.jsx';
import ChangeSize from './components/ChangeSize.jsx';
import ChangeMines from './components/ChangeMines.jsx'

const App = ({ SweeperBoard }) => {
  const [boardSize, setBoardSize] = useState(30);
  const [mines, setMines] = useState(20);
  const [board, makeBoard] = useState(new SweeperBoard(boardSize, boardSize))
  board.placeMines(mines);
  console.table('created board: ', board.board)
  return (
    <div>
      <ChangeSize setSize={setBoardSize}/>
      <ChangeMines setMines={setMines}/>
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
