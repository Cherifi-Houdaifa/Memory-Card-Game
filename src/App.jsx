import React, { useState, useRef } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import End from "./components/End";

export default function App() {
    console.log("mount");
    const [playing, setPlaying] = useState(true);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const clicked = useRef([]);
    const headerText = useRef("");

    const clickHandler = (emoji) => {
        for (let i = 0; i < clicked.current.length; i++) {
            if (clicked.current[i] === emoji) {
                setPlaying(false);
                score >= 36
                    ? (headerText.current = "You Won")
                    : (headerText.current = "You Lost");
                clicked.current = [];
                setScore(0);
                if (score > best) {
                    setBest(score);
                }

                return;
            }
        }
        clicked.current = clicked.current.concat(emoji);
        setScore(score + 1);
    };
    return (
        <>
            <NavBar score={score} best={best} />
            {playing ? (
                <div className="container">
                    <Cards onClick={clickHandler} />
                </div>
            ) : (
                <div className="container">
                    <End
                        header={headerText.current}
                        clickHandler={() => {
                            setPlaying(true);
                        }}
                    />
                </div>
            )}
        </>
    );
}
