import React from 'react';
import { useNavigate } from 'react-router-dom';
import game1 from '../../images/game1.png'; // Replace with the path to your image
import game2 from '../../images/game12.jpg';
import game3 from '../../images/sudoku.png';
import game4 from '../../images/chess.jpeg';
import './home.css'
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ttt'); // Navigate to MyComponent
  };
  const handleClick2 = () => {
    navigate('/sps'); // Navigate to MyComponent
  };
  const handleClick3 = () => {
    navigate('/sudoku'); // Navigate to MyComponent
  };
  const handleClick4 = () => {
    navigate('/chess'); // Navigate to MyComponent
  };

  return (
    
    <><div className="headline"><h1 >Select a game</h1></div>
    <div className='col'>
      <img src={game2} alt="TTT"  onClick={handleClick} style={{ cursor: 'pointer' }} />
      <img src={game1} alt="SPS" onClick={handleClick2} style={{ cursor: 'pointer' }} />
      <img src={game3} alt="Sudoku" onClick={handleClick3} style={{ cursor: 'pointer' }} />
      <img src={game4} alt="chess" onClick={handleClick4} style={{ cursor: 'pointer' }} />
    </div></>
  );
}

export default Home;
