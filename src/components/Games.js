import React from 'react';
import './Games.css';
import Game from './Game';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {

    },
});


const Games = ({ games, UpdateGames }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Typography className="GamesHeader" variant="h3" component="h3" gutterBottom>
                Manage your games
        </Typography>
            <div className="Action">
                <Fab onClick={() => {
                    UpdateGames({}, "add");
                }} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <div className="Games">

                {
                    games.map(game => {
                        return (<Game game={game} UpdateGames={UpdateGames} />)
                    })
                }

            </div>
        </div>
    )
}

export default Games;