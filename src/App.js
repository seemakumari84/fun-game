import React,{useRef} from 'react';
import './App.css';
import TTT from './components/Tic-Tac-Toe/app';
import StonePaperScissor from "./components/Stone Paper Scissor/app";
import Sudoku from "./components/sudoku/sudoku";
import Chess from "./components/chess/chessBoard";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from '../src/components/home/home';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
    <Router><Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/ttt" element={<TTT/>} />
        <Route path="/sps" element={<StonePaperScissor/>} />
        <Route path="/sudoku" element={<Sudoku/>} />
        <Route path="/chess" element={<Chess/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
