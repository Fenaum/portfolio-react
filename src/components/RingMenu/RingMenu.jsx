import React from "react";
import "./RingMenu.css";

function RingMenu() {
    return (
        <div className="ring-menu">
            <a href="https://fashion-fusion-fdbc9c87836b.herokuapp.com/" target="_blank" className="ring-button">
                Fashion Fusion
            </a>
            <a href="https://note-master-714-cdec4815ebd5.herokuapp.com/" target="_blank" className="ring-button">
                Note-App
            </a>
            <a href="https://memesify-be2bdd38706f.herokuapp.com//
                " target="_blank" className="ring-button">
                Memes Generator
            </a>
            <a href="https://fenaum.github.io/weather-dashboard-api" target="_blank" className="ring-button">
                Weather Dashboard
            </a>
            <a href="https://fenaum.github.io/coding-quiz-uh/" target="_blank" className="ring-button">
                Coding Game
            </a>
        </div>
    );
}

export default RingMenu;

