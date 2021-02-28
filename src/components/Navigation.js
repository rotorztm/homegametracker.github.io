import React from 'react';
import './Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navigation({ onRouteChanged }) {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => {
                    onRouteChanged("home")
                }} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
                <Button onClick={() => {
                    onRouteChanged("games")
                }} color="inherit">Games</Button>
                <Button onClick={() => {
                    onRouteChanged("friends")
                }} color="inherit">Friends</Button>
            </Toolbar>
        </AppBar>
        // <div className="Navigation">
        //     <div onClick={() => {
        //         onRouteChanged("home")
        //     }} className="Logo">
        //         <a href="#">Home</a>
        //     </div>
        //     <div className="Menu">
        //         <a onClick={() => {
        //             onRouteChanged("games")
        //         }} href="#">Games</a>
        //         <a onClick={() => {
        //             onRouteChanged("friends")
        //         }} href="#">Friends</a>
        //     </div>
        // </div>

    )
}


export default Navigation;