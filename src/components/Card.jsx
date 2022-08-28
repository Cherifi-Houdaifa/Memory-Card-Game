import React from "react";
import "../styles/Card.css";

export default function Card ({ emoji, onClick }) {
    return (
        <div className="card" onClick={() => {onClick(emoji)}}>
            <span>{emoji}</span>
        </div>
    );
}