import React, { useState } from 'react';
import './Game.css';
import { Button } from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';






function Game({ game, UpdateGames }) {
    const [updatedGame, SetUpdatedGame] = useState(game);

    return (

        <section className="Game">
            <div className="GameCardHeader">

                <img className="ImageGame" src={updatedGame.imageUrl} />

                <div className="GameDescription">

                    <TextField
                        fullWidth
                        onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.name = e.target.value;
                            SetUpdatedGame(updateGame);
                        }} id="game-Name" label="Name" type="text" variant="outlined" defaultValue={updatedGame.name} />


                    <TextField
                        fullWidth onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.description = e.target.value;
                            SetUpdatedGame(updateGame);
                        }} id="game-description" label="Description" type="text" variant="outlined" defaultValue={updatedGame.description} />

                    <TextField
                        fullWidth
                        onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.rulesUrl = e.target.value;
                            SetUpdatedGame(updateGame);
                        }} id="game-rulesUrl" label="Link to rules" type="text" variant="outlined" defaultValue={updatedGame.rulesUrl} />


                </div>
            </div>
            <TextField
                fullWidth
                onChange={(e) => {
                    let updateGame = { ...updatedGame };
                    updateGame.imageUrl = e.target.value;
                    SetUpdatedGame(updateGame);
                }}
                id="game-imageUrl"
                label="Image Url"
                type="text"
                defaultValue={updatedGame.imageUrl}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <div className="GameCardBody">

                <div className="GameTime">
                    <FormControlLabel
                        fullWidth
                        control={<Switch checked={updatedGame.timedRound} onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.timedRound = e.target.checked;
                            SetUpdatedGame(updateGame);
                        }} name="checkedA" />}
                        label="Time round"
                    />

                    <TextField
                        fullWidth
                        id="game-round-time"
                        onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.roundTime = +e.target.value;
                            SetUpdatedGame(updateGame);
                        }}
                        defaultValue={updatedGame.roundTime}
                        label="Round time"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div className="GameCardParticipation">
                    <TextField
                        fullWidth
                        onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.minParticipation = +e.target.value;
                            SetUpdatedGame(updateGame);
                        }}
                        id="game-minParticipation"
                        label="Minimum Participation"
                        type="number"
                        defaultValue={updatedGame.minParticipation}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        defaultValue={updatedGame.maxParticipation}
                        onChange={(e) => {
                            let updateGame = { ...updatedGame };
                            updateGame.maxParticipation = +e.target.value;
                            SetUpdatedGame(updateGame);
                        }}
                        id="game-maxParticipation"
                        label="Maximum participation "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
            </div>

            <div className="GameAction">
                <Button
                    onClick={() => {

                        UpdateGames(updatedGame, "update");
                    }} fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button
                    onClick={() => {

                        UpdateGames(updatedGame, "delete")
                    }} fullWidth
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>

            </div>

        </section>
    )
}

export default Game;