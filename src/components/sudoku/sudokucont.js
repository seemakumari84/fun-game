// src/components/GameController.js
import React, { useState } from 'react';
import SudokuBoard from './sudoku';

const GameController = () => {
  const [newGame, setNewGame] = useState(false);

  const startNewGame = () => {
    setNewGame(prev => !prev); // Toggle the newGame state to trigger a reset
  };

  return (
    <div>
      <button onClick={startNewGame}>Start New Game</button>
      <SudokuBoard newGame={newGame} />
    </div>
  );
};

export default GameController;
