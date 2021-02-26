import React, { useState } from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Home from './Home';
import Friends from '../components/Friends';
import Games from '../components/Games';

/*Initializing fake data // Not connected to a backend for now each time the app end data lost */
const dataFriends = [
  {
    name: 'Jean',
    pseudo: 'Jeannot',
    points: 10,
    imageUrl: 'https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg'
  },
  {
    name: 'Julie',
    pseudo: 'Julyyy',
    points: 50,
    imageUrl: 'https://media.istockphoto.com/photos/conference-call-picture-id1249750732?s=612x612'
  },
  {
    name: 'Romain',
    pseudo: 'Rotor',
    points: 50,
    imageUrl: 'https://media.istockphoto.com/photos/crazy-guys-at-pub-drinking-beer-and-taking-selfie-picture-id871440942?s=612x612'
  },
  {
    name: 'Adeline',
    pseudo: 'Boulla',
    points: 150,
    imageUrl: 'https://media.istockphoto.com/photos/smiling-european-woman-holding-video-call-at-home-picture-id1279977965?s=612x612'
  }
];
/* Fake partys */
const dataPartys = [
  {
    players: [
      {
        name: 'Jean',
        points: 10
      },
      {
        name: 'Julie',
        points: 50
      }
    ],
    game: {
      name: 'Scrabble',
      imageUrl: 'https://www.montres-de-luxe.com/photo/art/default/44254703-36237167.jpg?v=1585622136'

    },
    date: new Date('December 17, 1995 03:24:00')
  },
  {
    players: [
      {
        name: 'Jean',
        points: 10
      },
      {
        name: 'Julie',
        points: 50
      }
    ],
    game: {
      name: 'Poker',
      imageUrl: 'https://img.huffingtonpost.com/asset/5c933ee32a0000ba024e69bc.jpeg?ops=scalefit_720_noupscale&format=webp'

    },
    date: new Date('December 20, 2020 03:24:00')
  },
  {
    players: [
      {
        name: 'Rotor',
        points: 40
      },
      {
        name: 'Boulla',
        points: 150
      }
    ],
    game: {
      name: 'Blind test',
      imageUrl: 'https://cibul.s3.amazonaws.com/c4efc99789a44ee1bd3243d04fd3307b.base.image.jpg'

    },
    date: new Date('December 25, 2020 03:24:00')
  }
]
/* Fake games // List of games available to play */
const dataGames = [
  {
    id: 1,
    name: 'Blind test',
    imageUrl: 'https://cibul.s3.amazonaws.com/c4efc99789a44ee1bd3243d04fd3307b.base.image.jpg'
  },
  {
    id: 2,
    name: 'Poker',
    imageUrl: 'https://img.huffingtonpost.com/asset/5c933ee32a0000ba024e69bc.jpeg?ops=scalefit_720_noupscale&format=webp'
  }
]

function App() {

  const [route, setRoute] = useState("home");
  const [friends, setFriends] = useState(dataFriends);
  const [games, setGames] = useState(dataGames);
  const [partys, setPartys] = useState(dataPartys);
  const [mode, setMode] = useState("list");

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
            <Friends friends={friends} mode={mode} />
          </React.Fragment>
        )
      case "games":
        return (
          <React.Fragment>
            <Games games={games} />
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
