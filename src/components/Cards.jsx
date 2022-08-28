import React from "react";
import Card from "./Card";
import { shuffle } from "lodash";
import "../styles/Cards.css";

export default function Cards({ onClick }) {
    let emojis =
        "👾 🙁 📣 🅱️ 🚗 📲 😑 🕔 🐼 🎞 📵 🏜 📽 😀 🎥 😹 ✒️ 📪 😣 🔩 👒 ♊️ 🚨 🎃 🕕 🙄 💎 ✈️ 🎵 🍃 🚄 🍭 🚯 🍂 ↗️ 🕹";
    return (
        <div className="cards">
            {shuffle(emojis.split(" ")).map((emo, key) => {
                return <Card emoji={emo} key={key} onClick={onClick} />;
            })}
        </div>
    );
}
