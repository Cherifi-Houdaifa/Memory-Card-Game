import React from "react";
import "../styles/NavBar.css"
import ScoreBoard from "./ScoreBoard";

export default function NavBar({score, best}) {
    return (
        <nav>
            <h1>Memory Card Game</h1>
            <ScoreBoard score={score} best={best}/>
        </nav>
    )
}
