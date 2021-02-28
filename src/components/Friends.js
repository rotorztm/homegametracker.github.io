import React from 'react';
import './Friends.css';
import Friend from './Friend';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

function Friends({ friends, mode, UpdateFriends }) {

    const sortedFriends = friends.sort((a, b) => {
        return (b.points - a.points)
    });

    const renderFriendsByMode = () => {
        switch (mode) {
            /* Friends in edit mode in the friend page */
            case "edit":
                return (
                    <React.Fragment>
                        <Typography className="GamesHeader" variant="h3" component="h3" gutterBottom>
                            Manage your friends
                        </Typography>
                        <div className="FriendsEditRoot">
                            <div className="FriendsAction">
                                <Fab onClick={() => {
                                    UpdateFriends({}, "add");
                                }} color="primary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </div>
                            <div className="FriendsEdit">

                                {
                                    sortedFriends.map((friend, index) => {
                                        return (
                                            <Friend friend={friend} index={index + 1} mode={mode} UpdateFriends={UpdateFriends} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </React.Fragment>

                )
            default:
                /* Friends in static mode in the homepage */
                return (
                    <div className="Friends">
                        <h2 className="FriendsRankHeader">Ranking</h2>
                        {
                            sortedFriends.map((friend, index) => {
                                return (
                                    <Friend friend={friend} index={index + 1} mode={mode} />
                                )
                            })
                        }
                    </div>
                )
        }
    }

    return (
        renderFriendsByMode()
    )
}

export default Friends;