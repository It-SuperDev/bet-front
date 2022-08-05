import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

export const SportsList = {
    //    main  
    1: {
        name: 'Soccer',
        icon: <SportsSoccerIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    13: {
        name: 'Tennis',
        icon: <SportsTennisIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    17: {
        name: 'Ice Hockey',
        icon: <SportsHockeyIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    18: {
        name: 'Basketball',
        icon: <SportsBasketballIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    92: {
        name: 'Table Tennis',
        icon: <SportsTennisIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    91: {
        name: 'Volleyball',
        icon: <SportsVolleyballIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    //  others
    2: {
        name: 'Horse Racing',
        icon: <SportsVolleyballIcon sx={{ fontSize: (theme) => theme.spacing(6) }} color='error' />
    },
    3: 'Cricket',
    4: 'Greyhounds',
    8: 'Rugby Union',
    9: 'Boxing/UFC',
    12: 'American Football',
    14: 'Snooker',
    15: 'Darts',
    16: 'Baseball',
    19: 'Rugby League',
    36: 'Australian Rules',
    66: 'Bowls',
    75: 'Gaelic Sports',
    78: 'Handball',
    83: 'Futsal',
    90: 'Floorball',
    94: 'Badminton',
    95: 'Beach Volleyball',
    107: 'Squash',
    110: 'Water Polo',
    151: 'E-sports',
};