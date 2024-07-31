import React, { useState } from 'react';
import './style.css';
import paper from './paper.png';
import rock from './rock.png';
import scissors from './scissors.png';

const SPS = () => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState('Play your move!');

  const choices = ['rock', 'paper', 'scissors'];

  const genCompChoice = () => {
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
  };

  const drawGame = () => {
    setMessage('Game is a draw: Play your move!');
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setUserScore(userScore + 1);
      setMessage(`You win! Your ${userChoice} beats ${compChoice}`);
    } else {
      setCompScore(compScore + 1);
      setMessage(`You lose! ${compChoice} beats your ${userChoice}`);
    }
  };

  const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === 'rock') {
        userWin = compChoice !== 'paper';
      } else if (userChoice === 'paper') {
        userWin = compChoice !== 'scissors';
      } else {
        userWin = compChoice !== 'rock';
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

  return (
    <div className='headline'>
      <h1>Rock Paper Scissors</h1>
      <div className='choices'>
        {choices.map((choice) => (
          <img
            key={choice}
            src={choice === 'rock' ? rock : choice === 'paper' ? paper : scissors}
            alt={choice}
            onClick={() => playGame(choice)}
            className="choice"
          />
        ))}
      </div>
      <div className="scores">
        <p id="user-score">User Score: {userScore}</p>
        <p id="comp-score">Computer Score: {compScore}</p>
      </div>
      <p id="msg">{message}</p>
    </div>
  );
};

export default SPS;
