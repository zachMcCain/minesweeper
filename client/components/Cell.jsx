import React from 'react';

const Cell = ({ val, select, x, y }) => {
  if (val === false) {
    val = <span className="covered" onClick={select}>&#128163;</span>
  }
  // Cell {val}
  return <td onClick={() => {
    console.log('The x and y in onclick: ', x, ' ', y)
    select(x, y)
  }} className="covered">{val}</td>
}

export default Cell;
