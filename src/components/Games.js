import React from 'react';
import './Games.css';
import Game from './Game';

const Games = ({ games }) => {
    return (
        <React.Fragment>

            <h1 className="GamesHeader">Manage your games</h1>
            <div className="Games">
                {
                    games.map(game => {
                        return (<Game game={game} />)
                    })
                }

            </div>
        </React.Fragment>
    )
}

export default Games;