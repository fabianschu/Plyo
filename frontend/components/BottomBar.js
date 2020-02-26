import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FormHelperText } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';





// const useStyles = makeStyles({
//     root: {
//       width: '100%',
//       position: 'fixed',
//       left: 0,
//       bottom: 0,
//       display: 'flex',
      
//     },
//   });

const useStyles = makeStyles(theme => ({
    root: {
      height: 180,
    },
    wrapper: {
      width: 100 + theme.spacing(2),
    },
    paper: {
      zIndex: 1,
      position: 'relative',
      margin: theme.spacing(1),
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));

const BottomBar = () => {
    const classes = useStyles();
    const [value, setValue] = useState();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };


    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
                />
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                    <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg>
                </Paper>
                </Slide>
                </div>
        </div>
        // <BottomNavigation
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        // showLabels
        // className={classes.root}
        // position='fixed'>
        //     <BottomNavigationAction label="Filter/Sort" icon={<RestoreIcon />} />
        //     <BottomNavigationAction label="Add New" icon={<FavoriteIcon />} />
        // </BottomNavigation>
    )
}

export default BottomBar
