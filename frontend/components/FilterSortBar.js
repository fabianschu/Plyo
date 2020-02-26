import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip'



const useStyles = makeStyles(theme => ({
    root: {
        left: 0,
        top: 48, 
        height: 40,
        backgroundColor: theme.palette.grey[300]
    },
    buttonContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100vw',
        alignItems: 'center',
    },
    button: {
        height: '70%',
        width: '150px',
        borderColor: theme.palette.secondary.light,
        color: theme.palette.secondary.light,
        fontSize: '0.7rem',
        position: 'relative',
        marginLeft: '6px',

    },
    filterContainer: {
        backgroundColor: 'white',
        height: '30px',
        width: '100%',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        marginLeft: '6px',
        padding: '3px',
        '-webkit-overflow-scrolling': 'touch'
    },
    chip: {
        width: '90px',
        margin: '1px'
    }
}));

const FilterSortBar = (props) => {
    const classes = useStyles();

    const handleClick = event => {
        console.log(`click: changing checked to ${!props.checked}`)
        props.setChecked(!props.checked)
    }
    return (
        <AppBar className={classes.root} elevation={0}>
            <div className={classes.buttonContainer}>
                <Button
                    onClick={handleClick}
                    size="small" 
                    variant="outlined" 
                    className={classes.button}>Sort</Button>
                <div className={classes.filterContainer}>
                    <Chip
                        variant="outlined"
                        size="small"
                        label="scheduled"
                        onClick={handleClick}
                        className={classes.chip}
                    />    
                    <Chip 
                        onClick={handleClick}
                        size="small" 
                        variant="outlined"
                        label="pending"
                        className={classes.chip}
                        ></Chip>
                    <Chip 
                        onClick={handleClick}
                        size="small" 
                        variant="outlined"
                        label="rejected"
                        className={classes.chip} 
                        ></Chip> 
                </div>
            </div>
        </AppBar>
    )
}

export default FilterSortBar;