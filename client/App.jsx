import React, { useState } from 'react';
import PropTypes from 'prop-types';

const App = ({ Board }) => {
  const [boardSize, setBoardSize] = useState(10);
  return <div>{Board(boardSize, boardSize).board}</div>
}

App.propTypes = {
  Board: PropTypes.object.isRequired
}

export default App;
