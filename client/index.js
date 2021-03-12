import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SweeperBoard from './boardMaker/boardMaker.js';

ReactDOM.render(<App SweeperBoard={SweeperBoard}/>, document.getElementById('minesweeper'));
