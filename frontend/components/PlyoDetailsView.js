import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {applications} from '../public/mock-data';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    container: {

    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '1rem'
    },
    applicationDate: {
        display: 'inline-flex',
        padding: '2px'
    },
    details: {
        // padding: '0.5rem 1rem'
    },
    detailsWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.5rem 0',
        padding: '0 1rem'
    }, 
    dataWrapper: {
        width: '55%',
    },
    data: {
        fontWeight: 400
    },
    description: {
        width: '45%'
    }
}))


const DetailsElement = (props) => {
    
    const classes = useStyles();
    
    const DataDisplay = (props) => {

        if(props.type !== 'Position') {
            return (
                <Box 
                    className={classes.dataWrapper}>
                    <Typography 
                        variant='h6' 
                        component="body1" 
                        className={classes.data}>
                        {props.data}
                    </Typography>
                </Box>
            )
        }
        return (
            <>
                <Box 
                    className={classes.dataWrapper}>
                        <Typography 
                            variant='h6' 
                            component="body1" 
                            className={classes.data}>
                            {props.data}
                        </Typography>
                </Box>
                <Divider/>
            </>
        )
    }

    return(
    <>
        <Box className={classes.detailsWrapper}>
            <Typography 
            variant='h6' 
            component="body1"
            className={classes.description}>
                {props.type}:
            </Typography>
            <DataDisplay {...props}/>
        </Box>
        <Divider/>
    </>
    )
}


const PlyoDetailsView = (props) => {

    const [plyoDetails, setPlyoDetails] = useState();

    const classes = useStyles();
    
    let {id} = props;
    id = parseInt(id);

    useEffect(() => {
        setPlyoDetails(applications.find(plyo => plyo.id === id));
    })

    console.log(plyoDetails)

    return (
        <>
        {plyoDetails &&
        <Box className={classes.container}>
            <Box className={classes.top}>
                <Paper 
                    variant="outlined"
                    className={classes.applicationDate}>Applied: {plyoDetails.applicationDate}</Paper>
                <IconButton 
                aria-label="edit"
                color="secondary">
                    <EditIcon />
                </IconButton>
            </Box>
            <Box className={classes.details}>
                <DetailsElement 
                    type="Company" 
                    data={plyoDetails.company}/>
                <DetailsElement 
                    type="City" 
                    data={plyoDetails.city}/>
                <DetailsElement 
                    type="Position" 
                    data={plyoDetails.position}/>
                <DetailsElement 
                    type="Contact Person" 
                    data={plyoDetails.contactPerson}/>
                <DetailsElement 
                    type="Channel" 
                    data={plyoDetails.channel}/>
                <DetailsElement 
                    type="E-mail" 
                    data={plyoDetails.email}/>
            </Box>
            <Divider />
        </Box>
        }
        </>
    )
}

export default PlyoDetailsView
