import React from 'react';
import './Friend.css';

const Friend = ({ friend, index, mode }) => {

    const renderFriendByMode = () => {
        switch (mode) {
            case "edit":
                return (
                    <React.Fragment>
                        <section className="Friend">
                            <div>
                                <label>
                                    Name
                            </label>
                                <input type="text" defaultValue={friend.name} />

                            </div>
                            <div>
                                <label>
                                    Points
                            </label>
                                <input type="text" defaultValue={friend.name} />
                            </div>
                            <div>
                                <label>
                                    Image Url
                            </label>
                                <input type="text" defaultValue={friend.imageUrl} />
                                <img src={friend.imageUrl} alt='#' />
                            </div>
                            <div className="UpdatePlayerButton">
                                <button>Update player</button>
                            </div>

                        </section>
                    </React.Fragment>
                )

            default:
                return (
                    <React.Fragment>
                        <section className="Friend">
                            <h2>Rank : {index}</h2>
                            <h3>{friend.name} : {friend.points}  </h3>
                            <img src={friend.imageUrl} alt='#' />
                        </section>
                    </React.Fragment>
                )
                break;
        }
    }

    return (
        renderFriendByMode()
    )
}

export default Friend;