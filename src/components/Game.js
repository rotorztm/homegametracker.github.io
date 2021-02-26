import React from 'react';
import './Game.css';

const Game = ({ game }) => {
    return (
        <section className="Game">
            <div>
                <label>Name</label>
                <input type="text" defaultValue={game.name} />
            </div>
            <div>
                <label>Image Url</label>
                <input type="text" defaultValue={game.imageUrl} />

            </div>
            <div>
                <img className="ImageGame" src={game.imageUrl} />
            </div>
            <div>
                <button className="UpdateGameButton">Update game</button>
            </div>
        </section>
    )
}

export default Game;