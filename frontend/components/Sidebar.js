import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {toggleSidebar} from '../redux/actions/generalUiAction';
import List from '@material-ui/core/List';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaperPerm: {
        width: drawerWidth,
        position: 'fixed',
        top: '48px'
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

const SideMenu = (props) => {

    const classes = useStyles();

    const handleClick = () => {
        axios.delete(`${process.env.endpoint}/auth/logout`);
    }

    return(
    <List>
        <Link href="/signup">
            <ListItem component="a" className={classes.root} button>
                Sign Up
            </ListItem>
        </Link>
        <Link href="/login">
            <ListItem component="a" className={classes.root} button>
                Login
            </ListItem>
        </Link>
        <Divider/>
        <ListItem className={classes.root} button>
                Projects
        </ListItem>
        <Divider/>
        <ListItem className={classes.root} button onClick={handleClick}>
                Logout
        </ListItem>
    </List>
    )
}

const Sidebar = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    const {showSidebar} = props.generalUi;


    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={showSidebar}
                    onClose={props.toggleSidebar}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <SideMenu/>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaperPerm,
                    }}
                    variant="permanent"
                    open
                >
                    <SideMenu/>
                </Drawer>
            </Hidden>
        </nav>
    )
}

const mapStateToProps = state => ({
    generalUi: state.generalUiReducer
})

export default connect( mapStateToProps, {toggleSidebar})(Sidebar);
