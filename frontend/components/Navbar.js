import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import {connect} from 'react-redux';
import {toggleSidebar} from '../redux/actions/generalUiAction';


const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const Navbar = (props) => {
    const classes = useStyles();
    
    const handleClick = () => {
      props.toggleSidebar();
    }

    return (
    <AppBar position="fixed" className={classes.appBar} elevation={4}>
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Link href="/signup">
              <Typography variant="h6" color="inherit">
              Signup
              </Typography>
            </Link>
        </Toolbar>
    </AppBar>   
    )
}

const mapStateToProps = state => ({
  generalUi: state.generalUiReducer
})

export default connect( mapStateToProps, {toggleSidebar})(Navbar);

