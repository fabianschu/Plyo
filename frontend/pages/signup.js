import React, {useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
    pageContainer: {
        backgroundColor: theme.palette.primary.main,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    inputContainer: {
        width: '80vw',
        maxWidth: '700px',
        height: '70vh',
        maxHeight: '500px',
        backgroundColor: 'white',
        padding: '20px'
    },
    inputWrapper: {
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cta: {
        width: '90%',
        maxWidth: '300px',
    },
    subContainer: {
        aligntText: 'center',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    login: {
        textAlign: 'center'
    }
}));


const Signup = () => {

    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = event => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }
    
    const handleClick = event => {
        const credentials = { username, password };

        axios.post(`${process.env.endpoint}/auth/signup`, credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }

    const handleLinkedin = event => {

        axios.get(`${process.env.endpoint}/auth/linkedin`)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
    }

    return (
        <Box className={classes.pageContainer}>
            <Box className={classes.inputContainer} boxShadow={5}>
                <Box className={classes.inputWrapper}>
                    <Typography>SIGN UP NOW</Typography>
                    <TextField
                        label="Username"
                        name="username"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        value={username}
                        className={classes.cta}
                        />
                    <TextField
                        label="Password"
                        name="password"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        value={password}
                        className={classes.cta}
                        />
                    <Button 
                        onClick={handleClick}variant='contained' 
                        className={classes.cta}>Sign Up</Button>
                </Box>
                <Divider/>
                <Box className={classes.subContainer}>
                    <Typography className={classes.login}>Already have an account? Login <Link href="/auth/login">here</Link> or login with:</Typography>
                    <Button variant='outlined'  className={classes.cta}>Google</Button>
                    <Button component='a' variant='outlined' className={classes.cta} onClick={handleLinkedin}>Linkedin</Button>
                    <Link href={`${process.env.endpoint}/auth/linkedin`}><a>Linkedin</a></Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Signup
