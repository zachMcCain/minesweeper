import React from 'react';

const Cell = ({ val }) => {
  if (val === false) {
    val = <span>&#128163;</span>
  }
  // Cell {val}
  return <td className="covered">{val}</td>
}

export default Cell;
