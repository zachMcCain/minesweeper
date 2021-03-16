import React, { useState } from 'react';

const ChangeSize = ({ setSize }) => {
  const [size, changeNumber] = useState(0);
  return (
    <div>
      <input type="number" onChange={(e) => {
        changeNumber(e.target.value)
      }}/>
      <button
        type="submit"
        onClick={(e) => {
          console.log(size)
          setSize(size)
        }} >
        Set Board Size
      </ button>
    </div>
  )
}

export default ChangeSize;
