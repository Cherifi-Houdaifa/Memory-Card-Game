import React from "react";
import "../styles/ScoreBoard.css"

export default function ScoreBoard ({ score, best }) {
    return (
        <div className="score-board">
            <p className="score">Score: {score}</p>
            <p className="best">Best Score: {best}</p>
        </div>
    );
}