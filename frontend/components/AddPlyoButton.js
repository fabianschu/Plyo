import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: '5vw',
        left: '5vw',
        // border: `1px solid ${theme.palette.secondary}`,
        backgroundColor: 'white',
        zIndex: 1000,
        "&:hover, &.Mui-focusVisible": { backgroundColor: 'white' }
    },
    icon: {
        width: '30px',
        height: '30px',
        color: 'black'
    },
    // roundBox: {
    //     position: 'fixed',
    //     bottom: 0,
    //     width: '30px',
    //     height: '30px',
    //     border: '1px solid black'
    // }
}));

const AddPlyoButton = (props) => {
    

    const classes = useStyles();
    return (
        <Fab 
            color="secondary" 
            aria-label="add an alarm" 
            className={classes.root} 
            disableRipple={false}
            onClick={props.handleAddMenu} 
            disableFocusRipple={false}>
            <AddIcon className={classes.icon} />
        </Fab >
    )
}

export default AddPlyoButton
