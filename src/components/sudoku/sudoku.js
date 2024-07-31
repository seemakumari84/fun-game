import React, { useState } from 'react';
import './sudoku.css';

const initialGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const Sudoku = () => {
  const [grid, setGrid] = useState(initialGrid);

  const isValidMove = (row, col, num) => {
    if (grid[row].includes(num)) return false;

    for (let i = 0; i < 9; i++) {
      if (grid[i][col] === num) return false;
    }

    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (grid[r][c] === num) return false;
      }
    }

    return true;
  };

  const handleChange = (row, col, num) => {
    if (num < 1 || num > 9) return; 
    if (initialGrid[row][col] !== 0) return; 

    if (isValidMove(row, col, num)) {
      const newGrid = grid.map((r, rIdx) => 
        r.map((cell, cIdx) => (rIdx === row && cIdx === col ? num : cell))
      );
      setGrid(newGrid);
    }
  };

  const resetGame = () => {
    setGrid(initialGrid);
  };

  return (
    <>
      <div className="sudoku">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="number"
                min="1"
                max="9"
                value={cell === 0 ? '' : cell}
                onChange={(e) => handleChange(rowIndex, colIndex, parseInt(e.target.value))}
                disabled={initialGrid[rowIndex][colIndex] !== 0}
              />
            ))}
          </div>
        ))}
      </div>
      <button id="reset-button" className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </>
  );
};

export default Sudoku;
