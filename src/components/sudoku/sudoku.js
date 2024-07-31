import React, { useState, useEffect } from 'react';
import './sudoku.css';

const SudokuBoard = ({ newGame }) => {
  const getInitialBoard = () => [
    [5, 3, '', '', 7, '', '', '', ''],
    [6, '', '', 1, 9, 5, '', '', ''],
    ['', 9, 8, '', '', '', '', 6, ''],
    [8, '', '', '', 6, '', '', '', 3],
    [4, '', '', 8, '', 3, '', '', 1],
    [7, '', '', '', 2, '', '', '', 6],
    ['', 6, '', '', '', '', 2, 8, ''],
    ['', '', '', 4, 1, 9, '', '', 5],
    ['', '', '', '', 8, '', '', 7, 9]
  ];

  const [board, setBoard] = useState(getInitialBoard());

  useEffect(() => {
    setBoard(getInitialBoard());
  }, [newGame]);

  const handleChange = (e, row, col) => {
    const value = e.target.value;
    if (isNaN(value) || value < 1 || value > 9) {
      return; 
    }
    
    const newBoard = board.map((r, rIndex) =>
      r.map((cell, cIndex) => (rIndex === row && cIndex === col ? value : cell))
    );
    setBoard(newBoard);
  };

  return (
    <div className="sudoku-board-container">
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={cell}
                onChange={(e) => handleChange(e, rowIndex, colIndex)}
                maxLength="1"
                className="sudoku-cell"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SudokuBoard;
