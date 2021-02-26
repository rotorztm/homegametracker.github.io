import React from 'react';
import './Friends.css';
import Friend from './Friend';

const Friends = ({ friends, mode }) => {

    const sortedFriends = friends.sort((a, b) => {
        return (b.points - a.points)
    });

    const renderFriendsByMode = () => {
        switch (mode) {
            case "edit":
                return (
                    <React.Fragment>
                        <h1 className="FriendsManageHeader">Manage your friends</h1>
                        <div className="FriendsEdit">

                            {
                                sortedFriends.map((friend, index) => {
                                    return (
                                        <Friend friend={friend} index={index + 1} mode={mode} />
                                    )
                                })
                            }
                        </div>
                    </React.Fragment>
                )
            default:
                return (
                    <div className="Friends">
                        {
                            sortedFriends.map((friend, index) => {
                                return (
                                    <Friend friend={friend} index={index + 1} mode={mode} />
                                )
                            })
                        }
                    </div>
                )
                break;
        }
    }

    return (
        renderFriendsByMode()
    )
}

export default Friends;