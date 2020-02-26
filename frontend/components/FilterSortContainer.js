import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    box: {
      position: 'fixed',
      top: 88,
      width: '100%',
      height: '100px',
      backgroundColor: 'white',
      opacity: 0.9
    },
    oneFilterContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonContainer: {

        width: '50%'
    }
  }));

const FilterSortContainer = (props) => {

    const classes = useStyles();
    return (
        <Slide direction="down" mountOnEnter unmountOnExit in={props.checked} elevation={0}>
            <Box elevation={0} className={classes.box}>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Last status change:
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button
                            size="small" 
                            variant="outlined" 
                            className={classes.button}>due -> recent</Button>
                    </div>
                </div>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Creation date:
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button
                            size="small" 
                            variant="outlined" 
                            className={classes.button}>old -> new</Button>
                    </div>
                </div>
                <div className={classes.oneFilterContainer}>
                    <Typography>
                        Progress:
                    </Typography>
                    <div className={classes.buttonContainer}>
                    <Button
                        size="small" 
                        variant="outlined" 
                        className={classes.button}>progress -> noprogress</Button>
                    </div>
                </div>
            </Box>
        </Slide>
    )
}

export default FilterSortContainer
