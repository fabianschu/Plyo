import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {applications} from '../public/mock-data';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    container: {

    },
    top: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: '1rem',
        backgroundColor: `${theme.palette.grey[100]}`
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px'
    },
    details: {
        backgroundColor: `${theme.palette.grey[100]}`
    },
    detailsWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        borderBottom: '0.2px solid lightgrey'
    }, 
    dataWrapper: {
        width: '55%',
    },
    data: {
        fontWeight: 400
    },
    description: {
        width: '45%'
    },
    plyoSpecsContainer: {
        height: '200px',
        backgroundColor: `${theme.palette.grey[100]}`,
        padding: '1rem',
        borderTop: `3px solid lightgrey`
    },
    plyoSpecs: {
        height: '120px',
        backgroundColor: `${theme.palette.grey[100]}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '20px'
    },
    specsType: {
        fontWeight: 'bold',
        width: '45%'
    },
    statusWrapper: {

        // backgroundColor: 'red'
    },
    specsWrapper: {
        display: 'flex'
    }
}))


const DetailsElement = (props) => {
    
    const classes = useStyles();
    
    const DataDisplay = (props) => {

        console.log(props);

        if(props.type === 'Position' && props.link) {
            return (
                <>
                    <Box 
                        className={classes.dataWrapper}>
                            <a 
                                href={props.link}
                                target="_blank" rel="noopener noreferrer" >
                                <Typography
                                    component="a"
                                    variant="h6"
                                    className={classes.data}>
                                    {props.data}
                                </Typography>
                            </a>
                    </Box>
                </>
            )
        }
        return (
            <Box 
                className={classes.dataWrapper}>
                <Typography 
                    variant='h6' 
                    component="span" 
                    className={classes.data}>
                    {props.data}
                </Typography>
            </Box>
        )
    }

    return(
    <>
        <Box className={classes.detailsWrapper}>
            <Typography 
            color='primary'
            variant='h6' 
            component="span"
            className={classes.description}>
                {props.type}:
            </Typography>
            <DataDisplay {...props}/>
        </Box>
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
                    data={plyoDetails.position}
                    link={plyoDetails.link}/>
                <DetailsElement 
                    type="Contact Person" 
                    data={plyoDetails.contactPerson}/>
                <DetailsElement 
                    type="Channel" 
                    data={plyoDetails.channel}/>
                {plyoDetails.email &&
                <DetailsElement 
                    type="E-mail" 
                    data={plyoDetails.email}/>
                }   
            </Box>
            <Box 
            className={classes.plyoSpecsContainer}>
                <Box className={classes.plyoSpecs}>
                    <Paper 
                        className={classes.paper}
                        elevation= {2}>
                            <Box className={classes.specsWrapper}>
                                <Typography className={classes.specsType}>Application Date: 
                                </Typography>
                                <Box className={classes.statusWrapper}>
                                    <Typography>{plyoDetails.applicationDate}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={classes.specsWrapper}>
                                <Typography className={classes.specsType}>Last Update: 
                                </Typography>
                                <Box className={classes.statusWrapper}>
                                    <Typography>{plyoDetails.lastUpdate}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={classes.specsWrapper}>
                                <Typography className={classes.specsType}>Status: 
                                </Typography>
                                <Box className={classes.statusWrapper}>
                                    <Typography>{plyoDetails.lastUpdate}
                                    </Typography>
                                </Box>
                            </Box>
                    </Paper>
                    {/* <Paper 
                        className={classes.applicationDate}>
                            <Typography>Last Update: 
                            </Typography>
                            <Typography>{plyoDetails.lastUpdate}
                            </Typography>
                    </Paper>
                    <Paper 
                        className={classes.applicationDate}>
                            <Typography>Last Update: 
                            </Typography>
                            <Typography>{plyoDetails.lastUpdate}
                            </Typography>
                    </Paper> */}
                </Box>
                <Button
                    color="secondary"
                    variant="outlined"
                    fullWidth>Add Event</Button>
                </Box>
        </Box>
        }
        </>
    )
}

export default PlyoDetailsView
