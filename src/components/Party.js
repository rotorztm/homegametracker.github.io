import React from 'react';
import './Party.css';

const Party = ({ party, games }) => {
    // const playerSortByPointsInTheGame = party.players.sort((a, b) => {
    //     return (b.points - a.points)
    // });


    const gameForParty = games.find(elt => {
        return elt.id === party.gameId
    });
    console.log('Party', party);
    console.log('Game', gameForParty)
    return (
        <div className="Party">
            {/* <h2>Winner : {playerSortByPointsInTheGame[0].name}</h2> */}
            <img src={gameForParty.imageUrl} />
            {party.startDate.toLocaleDateString()}

        </div>
    )
}

export default Party;