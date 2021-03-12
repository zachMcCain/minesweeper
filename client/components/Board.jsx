import React from 'react';
import BoardRow from './BoardRow.jsx'

const Board = ({board}) => {
  let boardRows = board.map((row, i) => {
    return <BoardRow row={row} key={i} />
  })
  return <table><tbody>{boardRows}</tbody></table>
}

export default Board;
