import React, { useState } from 'react';
import './Friend.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    rootFriendsEdit: {
        display: 'flex',
        flexDirection: 'column'
    },
    friendsEdit: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    friendsEditDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    friendsEditDetailsContent: {
        flex: '0 0 auto',
        width: 300,
        gap: 10
    },
    content: {
        flex: '1 0 auto',
        width: 100,
        gap: 10
    },
    cover: {
        width: 151,
    }
}));

function Friend({ friend, index, mode, UpdateFriends }) {

    const [updatedFriend, SetUpdatedFriend] = useState(friend);
    const classes = useStyles();
    const theme = useTheme();

    const renderFriendByMode = () => {
        switch (mode) {
            case "edit":
                return (
                    // <React.Fragment>
                    //     <section className="Friend">
                    //         <div>
                    //             <label>
                    //                 Name
                    //         </label>
                    //             <input onChange={(e) => {
                    //                 let updateFriend = { ...updatedFriend };
                    //                 updateFriend.name = e.target.value;
                    //                 SetUpdatedFriend(updateFriend);
                    //             }} type="text" defaultValue={updatedFriend.name} />

                    //         </div>
                    //         <div>
                    //             <label>
                    //                 Total score: {updatedFriend.points}
                    //             </label>
                    //         </div>
                    //         <div>
                    //             <label>
                    //                 Image Url
                    //         </label>
                    //             <input onChange={(e) => {
                    //                 let updateFriend = { ...updatedFriend };
                    //                 updateFriend.imageUrl = e.target.value;
                    //                 SetUpdatedFriend(updateFriend);
                    //             }} type="text" defaultValue={updatedFriend.imageUrl} />
                    //             <img src={updatedFriend.imageUrl} alt='#' />
                    //         </div>
                    //         <div className="UpdatePlayerButton">
                    //             <button onClick={() => {
                    //                 UpdateFriends(updatedFriend)
                    //             }}>Update player</button>
                    //         </div>

                    //     </section>
                    // </React.Fragment>


                    <Card className={classes.rootFriendsEdit} key={updatedFriend.id}>
                        <div className={classes.friendsEdit}>
                            <div className={classes.friendsEditDetails}>
                                <CardContent className={classes.friendsEditDetailsContent}>
                                    <TextField
                                        fullWidth
                                        onChange={(e) => {
                                            let updateFriend = { ...updatedFriend };
                                            updateFriend.name = e.target.value;
                                            SetUpdatedFriend(updateFriend);
                                        }} id={"player-Name" + updatedFriend.id} label="Name" type="text" variant="outlined" defaultValue={updatedFriend.name} />

                                    <TextField
                                        fullWidth
                                        onChange={(e) => {
                                            let updateFriend = { ...updatedFriend };
                                            updateFriend.pseudo = e.target.value;
                                            SetUpdatedFriend(updateFriend);
                                        }} id={"player-pseudo" + updatedFriend.id} label="Name" type="text" variant="outlined" defaultValue={updatedFriend.pseudo} />
                                    <TextField
                                        fullWidth
                                        onChange={(e) => {
                                            let updateFriend = { ...updatedFriend };
                                            updateFriend.imageUrl = e.target.value;
                                            SetUpdatedFriend(updateFriend);
                                        }} id={"player-imageUrl" + updatedFriend.id} label="Image url" type="text" variant="outlined" defaultValue={updatedFriend.imageUrl} />

                                </CardContent>

                            </div>
                            <CardMedia
                                id={"player-img" + updatedFriend.id}
                                className={classes.cover}
                                image={updatedFriend.imageUrl}
                                title="Live from space album cover"
                            />
                        </div>
                        <div className={classes.actions}>
                            <CardActions>
                                <Button
                                    id={"player-update-button-" + updatedFriend.id}
                                    onClick={() => {

                                        UpdateFriends(updatedFriend, "update");
                                    }} fullWidth
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                            </Button>
                                <Button
                                    id={"player-delete-button-" + updatedFriend.id}
                                    onClick={() => {

                                        UpdateFriends(updatedFriend, "delete");
                                    }} fullWidth
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<SaveIcon />}
                                >
                                    Delete
                            </Button>
                            </CardActions></div>

                    </Card>
                )

            default:
                return (
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h4" variant="h4">
                                    {updatedFriend.rank}
                                </Typography>
                                <Typography component="h5" variant="h5">
                                    {updatedFriend.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {updatedFriend.pseudo}
                                </Typography>
                            </CardContent>

                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={updatedFriend.imageUrl}
                            title="Live from space album cover"
                        />
                    </Card>
                )
        }
    }

    return (
        renderFriendByMode()
    )
}

export default Friend;