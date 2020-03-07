import React from 'react';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InterviewIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import RejectedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100px',
        padding: 0
    },
    div1: {
        width: '100%',
        height: '100%',
        display: 'flex',
        color: theme.palette.primary
    },
    div2: {
        width: '65%',
        height: '100%',
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

        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '6px'
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
    },
    icon: {
        color: props => {
            const {stage, lastUpdate, status} = props.data;
            let interactions = stage.length;
            if (status === 'rejected') return theme.trafficLights.red;
            if (lastUpdate > 14 && status !== 'scheduled') return theme.trafficLights.yellow; 
            if (interactions === 1) return theme.palette.grey[500];
            if (interactions === 2) return theme.trafficLights.green1;
            if (interactions === 3) return theme.trafficLights.green2;
            if (interactions === 4) return theme.trafficLights.green3;
            if (interactions === 5) return theme.trafficLights.green4;
        }
    },
    status: {
        fontSize: '1rem'
    }
}));

const ApplicationListElement = (props) => {

    const classes = useStyles(props);

    const {company, position, applicationDate, status, scheduledDate, stage, lastUpdate, id} = props.data;

    const getIcon = () => {
        //color-selectin
        const currentStage = stage[stage.length -1];
        if (currentStage === 'applied') return <MailIcon className={classes.icon} />
        if (currentStage === 'interview') return <InterviewIcon className={classes.icon}/>
        if (currentStage === 'challenge') return <AssignmentIcon className={classes.icon}/>
        if (currentStage === 'rejected') return <RejectedIcon className={classes.icon}/>
    }

    const getStatusDisplay = () => {
        if (status === 'pending') return ('pending: ' + lastUpdate + 'd');
        if (status === 'rejected') return ('rejected');
        if (status === 'scheduled') return ('scheduled: ' + scheduledDate);
    }

    //console.log(props)

    return (
        <>
            <Link 
                href={`/plyodetails?id=${id}`}>
                    <ListItem component="a" className={classes.root}
                    button>
                        <div className={classes.div1}>  
                            <div className={classes.div2}>
                                <Typography variant="h6" component="h1">
                                    {company}
                                </Typography>
                                <Typography variant="body1" component="h2">
                                    {position}
                                </Typography>
                            </div>
                            <Divider orientation="vertical" flexItem light/>
                            <div className={classes.div3}>
                                <Typography className={classes.days}>{applicationDate}d</Typography>
                                {getIcon()}
                                <Typography className={classes.status}>{getStatusDisplay()}</Typography>
                            </div>
                        </div>
                    </ListItem>
            </ Link>
            <Divider/>
        </>
    )
}

export default ApplicationListElement
