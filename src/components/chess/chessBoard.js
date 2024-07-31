// src/components/ChessBoard.js
import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard'; // Ensure the component is imported correctly
import { Chess } from 'chess.js';
import './chess.css'; // Ensure this file includes your updated CSS

const ChessBoard = () => {
  const [game, setGame] = useState(new Chess());
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  useEffect(() => {
    if (isComputerTurn) {
      const move = getComputerMove();
      if (move) {
        makeMove(move);
      }
    }
  }, [isComputerTurn]);

  const getComputerMove = () => {
    const possibleMoves = game.moves(); // Use the moves() method for legal moves
    if (possibleMoves.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomIndex];
  };

  const makeMove = (move) => {
    const gameCopy = new Chess(game.fen());
    if (gameCopy.move(move)) {
      setGame(gameCopy);
      setIsComputerTurn(false); // Switch turn to player
    }
  };

  const handleMove = (move) => {
    const gameCopy = new Chess(game.fen());
    if (gameCopy.move(move)) {
      setGame(gameCopy);
      setIsComputerTurn(true); // Switch turn to computer
    }
  };

  return (
    <div className="chess-board-container">
      <div className="chess-board">
        <Chessboard
          position={game.fen()}
          onPieceDrop={(sourceSquare, targetSquare) => {
            const move = {
              from: sourceSquare,
              to: targetSquare,
              promotion: 'q', // Always promote to a queen for simplicity
            };
            handleMove(move);
          }}
        />
      </div>
    </div>
  );
};

export default ChessBoard;
