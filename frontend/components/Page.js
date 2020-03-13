import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import theme from '../public/theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    contentBox: {
        marginTop: 48
    },
    // pageContainer: {
    //     [theme.breakpoints.up('sm')]: {
    //       width: `calc(100% - ${theme.uiElements.drawerWidth})`,
    //       marginLeft: theme.uiElements.drawerWidth,
    //     },
    //   },
    pageContainer: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - 240px)`,
            marginLeft: '240px',
        },
    }
}));

const Page = (props) => {

    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                    <Navbar/>
                    <Sidebar />
                    <div className={classes.pageContainer} theme={theme}>
                        <div className={classes.contentBox} theme={theme}>
                            {props.children}
                        </div>
                    </div>
            </ThemeProvider>
        </>
    )
}

export default Page