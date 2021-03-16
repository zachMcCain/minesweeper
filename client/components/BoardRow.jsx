import React from 'react';
import Cell from './Cell.jsx';

const BoardRow = ({ row, select, y }) => {
  let cell = row.map((val, i) => {
    return <Cell val={val} key={i} x={i} y={y} select={select} />
  })
  return <tr>{cell}</tr>
}

export default BoardRow;
