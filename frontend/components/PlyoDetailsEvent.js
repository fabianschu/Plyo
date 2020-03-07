import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InterviewIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import RejectedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        padding: '20px 0',
        borderColor: theme.palette.secondary.main
    },
    specsWrapper: {
        display: 'flex'
    },
    specsType: {
        fontWeight: 'bold',
        width: '45%'
    },
    statusWrapper: {

    },
    connector: {
        height: '30px',
        width: '100%'
    },
    connectorLeft: {
        borderRight: `1px solid ${theme.palette.secondary.main}`,
        width: '50%',
        height: '100%'
    },
    connectorRight: {
        width: '50%',
        height: '100%'
    },
    iconBox: {
        height: '100%',
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventInformationContainer: {

    }
}))

const PlyoDetailsEvent = (props) => {

    const classes = useStyles();

    const { currentIndex} = props;

    const {status, stage2, applicationDate, scheduledDate, lastUpdate} = props.plyoDetails

    const currentStage = stage2[currentIndex];


    const getIcon = () => {
        //color-selectin
        if(currentStage) {
            if (currentStage.event === 'applied') return <MailIcon className={classes.icon} />
            if (currentStage.event === 'interview') return <InterviewIcon className={classes.icon}/>
            if (currentStage.event === 'challenge') return <AssignmentIcon className={classes.icon}/>
            if (currentStage.event === 'rejected') return <RejectedIcon className={classes.icon}/>
        }
    }

    const getEventInformation = () => {

        let text = "";

        if (currentIndex === stage2.length - 1) {
            text = "This is the first"
        } else if (currentIndex === 0) {
            text = "This is the most recent"
        } else {
            text = "This is in between"
        }


        return (
            <Typography>
                {text}
            </Typography>
        )
    }

    console.log(currentStage.event)
    console.log(currentIndex);


    return (
        <>
        <Box className={classes.connector}>
            <Box className={classes.connectorLeft}></Box>
            <Box className={classes.connectorRight}></Box>
        </Box>
        <Paper 
            className={classes.paper}
            variant='outlined'
            elevation= {2}>
            <Box className={classes.iconBox}>
                {getIcon()}
            </Box>
            <Box className={classes.eventInformationContainer}>
                {getEventInformation()}
            </Box>
        </Paper>
        </>
    )
}

export default PlyoDetailsEvent;

                // <Box className={classes.specsWrapper}>
                //     <Typography className={classes.specsType}>Application Date: 
                //     </Typography>
                //     <Box className={classes.statusWrapper}>
                //         <Typography>{plyoDetails.applicationDate}
                //         </Typography>
                //     </Box>
                // </Box>
                // <Box className={classes.specsWrapper}>
                //     <Typography className={classes.specsType}>Last Update: 
                //     </Typography>
                //     <Box className={classes.statusWrapper}>
                //         <Typography>{plyoDetails.lastUpdate}
                //         </Typography>
                //     </Box>
                // </Box>
                // <Box className={classes.specsWrapper}>
                //     <Typography className={classes.specsType}>Status: 
                //     </Typography>
                //     <Box className={classes.statusWrapper}>
                //         <Typography>{plyoDetails.lastUpdate}
                //         </Typography>
                //     </Box>
                // </Box>