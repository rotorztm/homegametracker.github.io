import React from 'react';
import './Home.css';
import Friends from '../components/Friends';
import Partys from '../components/Partys';

function Home({ friends, games, partys }) {
    return (
        <div className="Home">
            <h1>Last partys</h1>
            <div className="HomeContent">
                <Partys partys={partys} games={games} />
                <div className="HomeFriends">
                    <Friends friends={friends} mode="list" />
                </div>

            </div>

        </div>
    )
}

export default Home;