import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApplicationListElement from './ApplicationListElement';
import List from '@material-ui/core/List';
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

    const {applicationsArray, showRejected, showPending, showScheduled, sortAge, sortUpdate, sortProgress} = props;

    let resultArray = [...applicationsArray];

    if (!showRejected) {
        resultArray = resultArray.filter(application => application.status !== 'rejected')
    };
    if (!showPending) {
        resultArray = resultArray.filter
        (application => application.status !== 'pending')
    };
    if (!showScheduled) {
        resultArray = resultArray.filter
        (application => application.status !== 'scheduled')
    }

    
    if (sortUpdate !== 0) {
        let convertedFilter;
        if (sortUpdate === 2) {
            convertedFilter = -1
        };
        if (sortUpdate === 1) {
            convertedFilter = 1
        };
        resultArray = resultArray.sort((a,b) => {
            if (a.status === 'scheduled' && b.status !== 'scheduled') return -convertedFilter;
            if (a.status !== 'scheduled' && b.status === 'scheduled') return convertedFilter;
            if (a.lastUpdate > b.lastUpdate) return convertedFilter;
            if (a.lastUpdate < b.lastUpdate) return -convertedFilter;
            
        })
    }
        
    if (sortProgress !== 0){
        let convertedFilter;
        if (sortProgress === 2) {
            convertedFilter = -1
        };
        if (sortProgress === 1) {
            convertedFilter = 1
        };
        resultArray = resultArray.sort((a,b) => {
            if (a.stage.length - b.stage.length < 0) return convertedFilter;
            if (a.stage.length - b.stage.length > 0) return -convertedFilter;
            
        })
    }

    if (sortAge !== 0){
        let convertedFilter;
        if (sortAge === 2) {
            convertedFilter = -1
        };
        if (sortAge === 1) {
            convertedFilter = 1
        };
        resultArray = resultArray.sort((a,b) => {
            if (a.applicationDate - b.applicationDate > 0) return convertedFilter;
            if (a.applicationDate - b.applicationDate < 0) return -convertedFilter;
            
        })
    }

    return (
        <List component="nav" className={classes.root}>
            <Divider/>
            {resultArray.map((el, index) => <ApplicationListElement 
                data={el}
                key={index}/>)}
        </List>
    )
}

export default ApplicationList;
