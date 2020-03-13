import React, {useEffect, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    box: {
        position: 'fixed',
        top: 48,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        opacity: '0.95',
        zIndex: 1100
    }
}));

const SlideUp = (props) => {
    const classes = useStyles();

    return (
        <Slide 
        direction="up" 
        mountOnEnter 
        unmountOnExit
        in={props.in}>
            <Box className={classes.box}>
            <IconButton onClick={() => props.out()}>
                <CloseIcon fontSize="large"/>
            </IconButton>
            {props.children}
            </Box>
        </Slide>
    )
}

export default SlideUp
