import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
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
        opacity: '0.95',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        zIndex: 1000
    },
    oneFilterContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonContainer: {
        width: '62%'
    }, 
    icon: {
        height: '13px'
    },
    button: {
        width: '120px',
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const SortMenu = (props) => {

    const classes = useStyles();

    let sortAgeButtonVariant = "outlined"
    if(props.listView.sortAge !== 0) {
        sortAgeButtonVariant = "contained"
    }

    let sortUpdateButtonVariant = "outlined"
    if(props.listView.sortUpdate !== 0) {
        sortUpdateButtonVariant = "contained"
    }

    let sortProgressButtonVariant = "outlined"
    if(props.listView.sortProgress !== 0) {
        sortProgressButtonVariant = "contained"
    }

    return (
        <Slide 
            direction="down" 
            mountOnEnter 
            unmountOnExit 
            in={props.showSortMenu}
            >

            <Box className={classes.box}>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Last update:
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button
                            size="small" 
                            variant={sortUpdateButtonVariant} 
                            className={classes.button}
                            onClick={props.handleUpdateSort}>
                                {
                                    props.sortUpdate === 0 || props.sortUpdate === 1 ?
                                    <>
                                        <span>due</span>
                                        <ArrowForwardIosIcon className={classes.icon}/>
                                        <span>recent</span>
                                    </>
                                    :
                                    <>
                                        <span>recent</span>
                                        <ArrowForwardIosIcon className={classes.icon}/>
                                        <span>due</span>
                                    </>
                                }
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
                                {
                                    props.sortAge === 0 || props.sortAge === 1 ?
                                    <>
                                        <span>old</span>
                                        <ArrowForwardIosIcon className={classes.icon}/>
                                        <span>new</span>
                                    </>
                                    :
                                    <>
                                        <span>new</span>
                                        <ArrowForwardIosIcon className={classes.icon}/>
                                        <span>old</span>
                                    </>
                                }
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
                            {
                                props.sortProgress === 0 || props.sortProgress === 1 ?
                                <>
                                    <span>high</span>
                                    <ArrowForwardIosIcon className={classes.icon}/>
                                    <span>low</span>
                                </>
                                :
                                <>
                                    <span>low</span>
                                    <ArrowForwardIosIcon className={classes.icon}/>
                                    <span>high</span>
                                </>
                            }
                        </Button>
                    </div>
                </div>
            </Box>
        </Slide>
    )
}

const mapStateToProps = state => ({
    listView: state.listViewReducer
})

export default connect(mapStateToProps)(SortMenu);
