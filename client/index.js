import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Board from './boardMaker/boardMaker.js';

ReactDOM.render(<App Board={Board}/>, document.getElementById('minesweeper'));
