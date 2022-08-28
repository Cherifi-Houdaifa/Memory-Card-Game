import React from "react";
import "../styles/End.css";

export default function End({ header, clickHandler }) {
    return (
        <div className="end">
            <p>{header}</p>
            <div>
                <input type="button" value="Play Again" onClick={clickHandler} />
            </div>
        </div>
    );
}
