import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import './chess.css';

const ChessBoard = () => {
  const [game, setGame] = useState(new Chess());
  const [gameStatus, setGameStatus] = useState('ongoing');
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  const checkWinCondition = () => {
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        setGameStatus(game.turn() === 'w' ? 'black_wins' : 'white_wins');
      } else if (game.isDraw()) {
        setGameStatus('draw');
      }
    }
  };

  useEffect(() => {
    checkWinCondition();
  }, [game]);

  useEffect(() => {
    if (isComputerTurn && gameStatus === 'ongoing') {
      const move = getComputerMove();
      if (move) {
        makeMove(move);
      }
    }
  }, [isComputerTurn, gameStatus]);

  const getComputerMove = () => {
    const possibleMoves = game.moves({ verbose: true });
    if (possibleMoves.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    return possibleMoves[randomIndex];
  };

  const makeMove = (move) => {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    if (result) {
      setGame(gameCopy);
      setIsComputerTurn(false); // Switch turn to player
    } else {
      console.error('Invalid move:', move);
    }
  };

  const handleMove = (move) => {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    if (result) {
      setGame(gameCopy);
      setIsComputerTurn(true); // Switch turn to computer
    } else {
      console.error('Invalid move:', move);
    }
  };

  const onPieceDrop = (sourceSquare, targetSquare) => {
    const move = {
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Always promote to a queen for simplicity
    };
    handleMove(move);
  };

  return (
    <div className="chess-board-container">
            <div className="chess-board">

      <Chessboard
        position={game.fen()}
        onPieceDrop={onPieceDrop}
      /></div>
      {gameStatus !== 'ongoing' && (
        <div className="endscene show">
          <div className="winning-sign">
            {gameStatus === 'white_wins' && 'White Wins!'}
            {gameStatus === 'black_wins' && 'Black Wins!'}
            {gameStatus === 'draw' && 'Draw!'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChessBoard;
