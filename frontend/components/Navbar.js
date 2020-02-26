import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const Navbar = () => {
    const classes = useStyles();
    return (
    <AppBar position="fixed" className={classes.bar} elevation={0}>
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
            Photos
            </Typography>
        </Toolbar>
    </AppBar>   
    )
}

export default Navbar
