import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    box: {
        position: 'fixed',
        top: 88,
        width: '100%',
        height: '120px',
        backgroundColor: 'white',
        opacity: 0.9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    oneFilterContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonContainer: {
        width: '55%'
    }, 
    icon: {
        height: '13px'
    }
  }));

const SortMenu = (props) => {

    const classes = useStyles();

    let sortAgeButtonVariant = "outlined"
    if(props.sortAge !== 0) {
        sortAgeButtonVariant = "contained"
    }

    let sortUpdateButtonVariant = "outlined"
    if(props.sortUpdate !== 0) {
        sortUpdateButtonVariant = "contained"
    }

    let sortProgressButtonVariant = "outlined"
    if(props.sortProgress !== 0) {
        sortProgressButtonVariant = "contained"
    }

    return (
        <Slide direction="down" mountOnEnter unmountOnExit in={props.showSortMenu} elevation={1}>
            <Box className={classes.box}>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Last status change:
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button
                            size="small" 
                            variant={sortUpdateButtonVariant} 
                            className={classes.button}
                            onClick={props.handleUpdateSort}>
                                <span>due</span>
                                <ArrowForwardIosIcon className={classes.icon}/>
                                <span>recent</span>
                            </Button>
                    </div>
                </div>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Creation date:
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button
                            size="small" 
                            variant={sortAgeButtonVariant}
                            className={classes.button}
                            onClick={props.handleAgeSort}>
                                <span>old</span>
                                <ArrowForwardIosIcon className={classes.icon}/>
                                <span>new</span>
                            </Button>
                    </div>
                </div>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Progress:
                    </Typography>
                    <div className={classes.buttonContainer}>
                    <Button
                        size="small" 
                        variant={sortProgressButtonVariant}
                        className={classes.button}
                        onClick={props.handleProgressSort}>
                            <span>progress</span>
                                <ArrowForwardIosIcon className={classes.icon}/>
                                <span>no progress</span>
                        </Button>
                    </div>
                </div>
            </Box>
        </Slide>
    )
}

export default SortMenu
