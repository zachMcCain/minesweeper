import React, { useState } from 'react';

const Cell = ({ val, select, x, y }) => {
  const [covered, uncover] = useState(true)
  if (val === false) {
    val = <span className="covered" onClick={select}>&#128163;</span>
  }

  if (covered) {
    return <td onClick={() => {
      select(x, y);
      uncover(false);
    }} className="covered" id={`${x}${y}`}></td>
  }
  // Cell {val}
  return <td onClick={() => {
    console.log('The x and y in onclick: ', x, ' ', y)
    select(x, y)
  }} className="covered" id={`${x}${y}`}>{val}</td>
}

export default Cell;
