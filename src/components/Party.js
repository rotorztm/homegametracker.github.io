import React from 'react';
import './Party.css';

const Party = ({ party }) => {
    const playerSortByPointsInTheGame = party.players.sort((a, b) => {
        return (b.points - a.points)
    })
    return (
        <div className="Party">
            <h2>Winner : {playerSortByPointsInTheGame[0].name}</h2>
            <img src={party.game.imageUrl} />
            {party.date.toLocaleDateString()}

        </div>
    )
}

export default Party;