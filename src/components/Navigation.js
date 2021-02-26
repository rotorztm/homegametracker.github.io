import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChanged }) => {
    return (
        <div className="Navigation">
            <div onClick={() => {
                onRouteChanged("home")
            }} className="Logo">
                <a href="#">Home</a>
            </div>
            <div className="Menu">
                <a onClick={() => {
                    onRouteChanged("games")
                }} href="#">Games</a>
                <a onClick={() => {
                    onRouteChanged("friends")
                }} href="#">Friends</a>
            </div>
        </div>

    )
}


export default Navigation;