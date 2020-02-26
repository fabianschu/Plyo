import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InterviewIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100px',
        padding: 0
    },
    div1: {
        width: '100%',
        height: '100%',
        display: 'flex',
        // border: '1px solid green'
    },
    div2: {
        width: '65%',
        height: '100%',
        // border: '1px solid blue',
        paddingLeft: '4px',
        paddingRight: '10px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    div3: {
        width: '35%',
        height: '100%',
        // border: '1px solid red',

        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    days: {
        alignSelf: 'flex-end',
        fontSize: '13px'
        // position: 'absolute',
        // top: '0',
        // right: '0',
        // paddingRight: '4px',
        // fontSize: '1.1rem',
        // width: '30px',
        // textAlign: 'right',
        // color: 'black'
    }
}));

const ApplicationListElement = (props) => {

    const classes = useStyles();

    return (
        <>
            <ListItem className={classes.root}
            button>
                <div className={classes.div1}>  
                    <div className={classes.div2}>
                        <Typography variant="h6" component="h1">
                            Company
                        </Typography>
                        <Typography variant="body1" component="h2">
                            Title
                        </Typography>
                    </div>
                    <Divider orientation="vertical" flexItem light/>
                    <div className={classes.div3}>
                        <Typography className={classes.days}>XXd</Typography>
                        <InterviewIcon/>
                        <Typography>Status</Typography>
                    </div>
                </div>
            </ListItem>
            <Divider/>
        </>
    )
}

export default ApplicationListElement
