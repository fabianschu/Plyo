import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApplicationListElement from './ApplicationListElement';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 88
    },
    div1: {
        width: '70px',
        height: '90px',
        display: 'flex',
        border: '1px solid black',
        width: '100%',
    },
    div2: {
        width: '35px',
        height: '90px',
        border: '1px solid blue'
    },
    div3: {
        width: '35px',
        height: '45px',
        border: '1px solid yellow'
    }
}));

const ApplicationList = (props) => {

    const classes = useStyles();

    const {applicationsArray} = props;
    console.log(applicationsArray);

    return (
        <List component="nav" className={classes.root}>
            <Divider/>
            {applicationsArray.map((el, index) => <ApplicationListElement key={index}/>)}
        </List>
    )
}

export default ApplicationList;
