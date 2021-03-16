import React from 'react';
import BoardRow from './BoardRow.jsx'

const Board = ({ board, select }) => {
  let boardRows = board.map((row, i) => {
    return <BoardRow row={row} key={i} y={i} select={select} />
  })
  return <table><tbody>{boardRows}</tbody></table>
}

export default Board;
