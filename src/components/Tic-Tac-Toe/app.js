import React, { useState } from 'react';
import './index.css'
const TTT = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleBoxClick = (index) => {
    if (board[index] !== '' || gameOver) return;

    const newBoard = board.slice();
    newBoard[index] = turnO ? 'O' : 'X';
    setBoard(newBoard);
    setTurnO(!turnO);

    if (checkWinner(newBoard)) {
      setMessage(`Congratulations, Winner is ${newBoard[index]}`);
      setGameOver(true);
    } else if (newBoard.every(box => box !== '')) {
      setMessage('Game is a draw!');
      setGameOver(true);
    }
  };

  const checkWinner = (board) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setTurnO(true);
    setMessage('');
    setGameOver(false);
  };

  return (
   <>
      <h1>Tic Tac Toe</h1> <div className="container">
      <div className="game">
        {board.map((box, index) => (
          <button
            key={index}
            className="box"
            onClick={() => handleBoxClick(index)}
            disabled={gameOver || box !== ''}
          >
            {box}
          </button>
        ))}
      </div>
      {message && <p className="message">{message}</p>}
      <button onClick={resetGame} id="reset-btn">Reset Game</button>
    </div></>
  );
};

export default TTT;
