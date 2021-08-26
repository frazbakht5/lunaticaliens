import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }

    const handleClose = (event) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const menuOptions = [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 1 },
        { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 3 }
    ]

    const routes = [
        { name: "Projects", link: "/projects", activeIndex: 0 },
        { name: "Probono", link: "/probono", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? true : undefined, mouseOver: (event) => handleClick(event) },
        { name: "About", link: "/about", activeIndex: 2 },
        { name: "Business", link: "/business", activeIndex: 3 },
    ]

    useEffect(() => {

        [...menuOptions, ...routes].forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex)
                        setSelectedIndex(route.selectedIndex)
                    }
                    break;
                default:
                    break;
            }
        })

        if (window.location.pathname === "/estimate" && value !== 5)
            setValue(5);



    }, [value, selectedIndex, menuOptions, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange} aria-label="website navigation tabs" indicatorColor='primary'>
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link} to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            {/* <Button variant="contained" component={Link} to="/estimate" color="secondary" className={classes.button}>Free Estimate</Button> */}
            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                style={{ zIndex: theme.zIndex.modal + 2 }}
                elevation={0}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option}${i}`}
                        classes={{ root: classes.menuItem }}
                        onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose(event) }}
                        component={Link}
                        to={option.link}
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu> */}
        </React.Fragment>
    )


    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                <List disablePadding>
                    <div className={classes.toolbarMargin} />
                    {
                        routes.map((route, index) => (
                            <ListItem
                                key={`${route}${route.activeIndex}`}
                                onClick={() => { setOpenDrawer(false); setValue(index) }}
                                divider
                                button
                                component={Link} to={route.link}
                                selected={value === index}
                            >
                                <ListItemText
                                    disableTypography
                                    className={value === index ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem}
                                >{route.name}</ListItemText>
                            </ListItem>
                        ))}
                    <ListItem
                        onClick={() => { setOpenDrawer(false); setValue(5) }}
                        divider button component={Link} to="/estimate"
                        selected={value === 5}
                        className={classes.drawerItemEstimate}
                    >
                        <ListItemText disableTypography
                            className={value === 5 ? `${classes.drawerItem} ${classes.drawerItemEstimateText} ${classes.drawerItemSelected}` : `${classes.drawerItem} ${classes.drawerItemEstimateText}`} primary='Free Estimate' />
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple>
                <MenuIcon className={classes.drawerMenuIcon} />
            </IconButton>
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
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
