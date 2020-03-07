import React, {useEffect, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    box: {
        position: 'fixed',
        top: 48,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        opacity: '0.95',
        zIndex: 1200
    },
    inclButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '0 20px',
        height: '400px'

    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    input: {
        paddingBottom: '20px'
    }
}));

const EditPlyo = (props) => {
    const classes = useStyles();
    
    const [company, setCompany] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [ad, setAd] = React.useState('');
    const [channel, setChannel] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [showEmail, setShowEmail] = React.useState();

    const [open, setOpen] = React.useState(false);


    const handleChange = event => {
        console.log(event.target.name)
        if (event.target.name === 'channel'){
            setChannel(event.target.value);
            if(event.target.value === 'email'){
                setShowEmail(true);
            } else {
                setShowEmail(false);
                setEmail('');
            }
        }
        if (event.target.name === 'company') setCompany(event.target.value);
        if (event.target.name === 'position') setPosition(event.target.value);
        if (event.target.name === 'contact') setContact(event.target.value);
        if (event.target.name === 'ad') setAd(event.target.value);
        if (event.target.name === 'channel') setChannel(event.target.value);
        if (event.target.name === 'email') setEmail(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = event => {
        let today = new Date();
        let data = {
            company: 'company',
            position: 'position',
            status: 'applied',
            stage: ['applied'],
            applicationDate: today,
            lastUpdate: today
        }
        console.log(data);

        //TODO: make POST request to server to send data

        props.setShowAddMenu(false);
    }

    return (
        <Slide 
        direction="up" 
        mountOnEnter 
        unmountOnExit
        in={props.showAddMenu}>
            <Box className={classes.box}>
                <IconButton 
                // className={classes.closeButton} 
                onClick={props.handleAddMenu}
                >
                    <CloseIcon fontSize="large"/>
                </IconButton>
                <Box className={classes.inclButton}>
                    <Box className={classes.form}>
                        <TextField
                            label="Company"
                            name="company"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            value={company}
                            className={classes.input}
                            />
                        <TextField
                            label="Position"
                            name="position"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            value={position}
                            className={classes.input}
                            />
                        <TextField
                            label="Contact Person"
                            name="contact"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            value={contact}
                            className={classes.input}
                            />
                        <TextField
                            label="Link to Job Ad"
                            name="ad"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            value={ad}
                            className={classes.input}
                            />
                        

                        <FormControl 
                        className={classes.formControl}
                        variant="outlined"
                        size="small"
                        className={classes.input}>
                            <InputLabel id="channel">Channel</InputLabel>
                            <Select
                            labelId="channel"
                            name="channel"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            onChange={handleChange}
                            value={channel}
                            >
                            <MenuItem value='email'>Email</MenuItem>
                            <MenuItem value='platform'>Platform</MenuItem>
                            <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </FormControl>

                        {showEmail && <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            value={email}
                            />}
                    </Box>
                    <Button 
                    variant="contained" 
                    size="large"  
                    onClick={handleClick}>
                    Create
                    </Button>
                </Box>
            </Box>
        </Slide>
    )
}

export default EditPlyo;
