import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "6em",
        width: "20em",
        [theme.breakpoints.down("md")]: {
            height: "6.5em",
            width: "20em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em",
            width: "20em",
        }
    },
    logoContainer: {
        marginLeft: '10em',
        [theme.breakpoints.down("md")]: {
            marginLeft: '0em',
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: '0em',
        },
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto',
        marginRight: '10em',
        [theme.breakpoints.down("md")]: {
            marginRight: '0em',
        },
        [theme.breakpoints.down("md")]: {
            marginRight: '0em',
        },
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,   //squeezes them together
        marginLeft: '25px', //px bcoz we want it same in all display devices
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: 0,

    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,

        "&:hover": {
            opacity: 1
        }

    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerMenuIcon: {
        [theme.breakpoints.down("md")]: {
            height: '50px',
            width: '50px'
        },
        [theme.breakpoints.down("xs")]: {
            height: '40px',
            width: '40px'
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemSelected: {
        opacity: 1
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
    },
    drawerItemEstimateText: {
        fontFamily: 'Pacifico',
        fontSize: '1rem',
        textTransform: 'none',
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }

}));

export default function NavBar(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    const routes = [
        { name: "Projects", link: "/#projects", activeIndex: 0 },
        { name: "Probono", link: "/#probono", activeIndex: 1, },
        { name: "About", link: "/#about", activeIndex: 2, },
        { name: "Business", link: "/#business", activeIndex: 3 },
    ]

    useEffect(() => {

        [...routes].forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange} aria-label="website navigation tabs" indicatorColor='primary'>
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={HashLink } to={route.link}
                        label={route.name}
                    />
                ))}
            </Tabs>
        </React.Fragment>
    )



    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => setValue(0)}>
                            <img alt='Company logo' className={classes.logo} src={logo} />
                        </Button>
                        {matches ? undefined : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
