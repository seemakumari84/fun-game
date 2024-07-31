import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToTTTPage = () => {
        navigate("/TTT");
        setIsMenuOpen(false);
    };

    const goToHomePage = () => {
        navigate("/home");
        setIsMenuOpen(false);
    };

    const goToSPSPage = () => {
        navigate("/SPS");
        setIsMenuOpen(false);
    };

    const goToChessPage = () => {
        navigate("/Chess");
        setIsMenuOpen(false);
    };

    const goToSudokuPage = () => {
        navigate("/Sudoku");
        setIsMenuOpen(false);
    };

    var name = "<Puzzle Pop/>";

    return (
        <>
            <div className="nav_container">
                <div className="nav_left">
                    {name}
                </div>
                <button className="navbar-toggler" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon">&#9776;</span>
                </button>
                <div className={`nav_right ${isMenuOpen ? "show" : ""}`}>
                    <p onClick={goToHomePage}>Home</p>
                    <p onClick={goToTTTPage}>Tic-Tac-Toe</p>
                    <p onClick={goToSPSPage}>Rock-Paper-Scissor</p>
                    <p onClick={goToChessPage}>Chess</p>
                    <p onClick={goToSudokuPage}>Sudoku</p>
                </div>
            </div>
        </>
    );
}

export default Navbar;
