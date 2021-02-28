import React, { useState } from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Home from './Home';
import Friends from '../components/Friends';
import Games from '../components/Games';
import { dataGames, dataPartys, dataFriends, dataPlaces } from '../Data/Data.js'

/*Initializing fake data // Not connected to a backend for now each time the app end data lost */


function App() {

  const [route, setRoute] = useState("home");
  const [friends, setFriends] = useState(dataFriends);
  const [games, setGames] = useState(dataGames);
  const [partys, setPartys] = useState(dataPartys);
  const [mode, setMode] = useState("list");
  const [places, setDataPlaces] = useState(dataPlaces);

  /* Manage games CRUD*/
  const UpdateGames = (game, action) => {
    console.log("Action", action, game, games);
    let newGamesArray = undefined;
    switch (action) {
      case "add":
        let newId = 1;
        if (games.length > 0) {
          newId = Math.max.apply(Math, games.map(function (o) { return o.id; })) + 1;
        }

        let newGame = {
          id: newId,
          timedRound: false
        }
        newGamesArray = [...games];
        newGamesArray.push(newGame);
        setGames([...newGamesArray]);
        break;
      case "update":
        newGamesArray = games.map(gameArrayElt => {
          if (gameArrayElt.id === game.id) {
            return game;
          }
          return gameArrayElt
        })
        console.log("update array", newGamesArray)
        setGames([...newGamesArray]);
        break;
      case "delete":

        newGamesArray = [...games];
        var index = games.findIndex(function (o) {
          return o.id === game.id;
        })
        if (index !== -1) {
          newGamesArray.splice(index, 1);
          setGames([...newGamesArray]);
        }
        /* TODO: Correct Delete bad behavior games not rendered correctly after setState */
        break;
      default:
        break;
    }


  }
  /* Manage friends CRUD*/

  const UpdateFriends = (friend, action) => {
    let newFriendsArray = undefined;

    switch (action) {
      case "update":
        newFriendsArray = friends.map(friendArrayElt => {
          if (friendArrayElt.id === friend.id) {
            return friend;
          }
          return friendArrayElt
        })
        setFriends([...newFriendsArray]);
        break;
      case "delete":

        newFriendsArray = [...friends];
        var index = friends.findIndex(function (o) {
          return o.id === friend.id;

        })
        if (index !== -1) {
          newFriendsArray.splice(index, 1);
          setFriends(newFriendsArray);
        }
        /* TODO: Correct Delete bad behavior friends not rendered correctly after setState */
        break;
      case "add":
        let newId = 1;
        if (friends.length > 0) {
          newId = Math.max.apply(Math, friends.map(function (o) { return o.id; })) + 1;
        }
        let newFriend = {
          id: newId

        }
        newFriendsArray = [...friends];
        newFriendsArray.push(newFriend);
        setFriends([...newFriendsArray]);
        break;
      default:
        break;
    }

  }
  /* Made the choice to use switch to render route to manage edit mode */
  const renderRoute = () => {
    switch (route) {
      case "home":
        return (
          <React.Fragment>
            <Home friends={friends} games={games} partys={partys} />
          </React.Fragment>
        )
      case "friends":
        return (
          <React.Fragment>
            <Friends friends={friends} mode={mode} UpdateFriends={UpdateFriends} />
          </React.Fragment>
        )
      case "games":
        return (
          <React.Fragment>
            <Games games={games} UpdateGames={UpdateGames} />
          </React.Fragment>
        )
      default:
        break;
    }
  }
  const onRouteChanged = (newRoute) => {
    setRoute(newRoute);
    switch (newRoute) {
      case "home":
        setMode("list");
        break;

      default:
        setMode("edit");
        break;
    }
  }

  return (
    <div className="App">
      <Navigation onRouteChanged={onRouteChanged} />
      {
        renderRoute()
      }



    </div>
  );
}

export default App;
