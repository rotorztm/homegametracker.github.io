const dataTitles = [
    {
        id: 1,
        titleType: 1
    }
]

const dataTitleType = [
    {

    }
]

export const dataPlaces = [
    {
        id: 1,
        name: `Rotor's home`
    }
]


export const dataFriends = [
    {
        id: 1,
        name: 'Jean',
        pseudo: 'Jeannot',
        imageUrl: 'https://cdn.pixabay.com/photo/2021/01/21/16/17/english-cocker-spaniel-5937757_960_720.jpg',
        bestScore: '',
        currentTitle: ''
    },
    {
        id: 2,
        name: 'Julie',
        pseudo: 'Julyyy',
        imageUrl: 'https://media.istockphoto.com/photos/conference-call-picture-id1249750732?s=612x612'
    },
    {
        id: 3,
        name: 'Romain',
        pseudo: 'Rotor',
        imageUrl: 'https://media.istockphoto.com/photos/crazy-guys-at-pub-drinking-beer-and-taking-selfie-picture-id871440942?s=612x612'
    },
    {
        id: 4,
        name: 'Adeline',
        pseudo: 'Boulla',
        imageUrl: 'https://media.istockphoto.com/photos/smiling-european-woman-holding-video-call-at-home-picture-id1279977965?s=612x612'
    }
];
/* Fake partys */
export const dataPartys = [
    {
        partyId: 1,
        participations: [
            {
                playerId: 1,
                partyId: 1
            },
            {
                playerId: 2,
                partyId: 1
            }
        ],
        rounds: [
            {
                roundId: 1,
                scores: [
                    {
                        participationId: 1,
                        roundId: 1,
                        score: 1
                    }
                ]
            }
        ],
        gameId: 1,
        startDate: new Date('December 17, 1995 03:24:00'),
        endDate: new Date('December 17, 1995 03:24:00'),
        placeId: 1
    }
]
/* Fake games // List of games available to play */
export const dataGames = [
    {
        id: 1,
        name: 'Blind test',
        description: 'Jeu de blind test classique',
        rulesUrl: '',
        imageUrl: 'https://cibul.s3.amazonaws.com/c4efc99789a44ee1bd3243d04fd3307b.base.image.jpg',
        timedRound: false,
        roundTime: 0,
        minParticipation: 2,
        maxParticipation: 0
    },
    {
        id: 2,
        name: 'Poker',
        imageUrl: 'https://img.huffingtonpost.com/asset/5c933ee32a0000ba024e69bc.jpeg?ops=scalefit_720_noupscale&format=webp',
        timedRound: true,
        roundTime: 0,
        minParticipation: 2,
        maxParticipation: 0,
        minRound: 1,
        maxRound: 0
    }
]

