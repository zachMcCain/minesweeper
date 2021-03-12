import React from 'react';
import Cell from './Cell.jsx';

const BoardRow = ({ row }) => {
  let cell = row.map((val, i) => {
    return <Cell val={val} key={i} />
  })
  return <tr>{cell}</tr>
}

export default BoardRow;
