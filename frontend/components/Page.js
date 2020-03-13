import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import theme from '../public/theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    contentBox: {
        marginTop: 48
    }
}));

const Page = (props) => {

    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <Sidebar />
                <div className={classes.contentBox} theme={theme}>
                    {props.children}
                </div>
            </ThemeProvider>
        </>
    )
}

export default Page