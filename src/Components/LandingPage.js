import avatar from '../assets/avatar.jpg'
import Image from '../assets/hero_bg.jpg'

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import NavBar from './NavBar'

import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';

import { fontWeight } from '@material-ui/system';
import { maxWidth } from '@material-ui/system';


const useStyles = makeStyles(theme => ({

    mainContainer: {
        marginTop: '5em',

        [theme.breakpoints.down("md")]: {
            marginTop: '3em'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '2em'
        }
    },
    avatar: {
        height: '8em'
    },
    introText: {
        textAlign: 'center'
    },
    taglineText: {
        textAlign: 'center',
        fontWeight: 700,
        marginTop: '2em'
    },
    servicesText: {
        ...theme.typography.button,
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        textAlign: 'center',
        maxWidth: '8em',
        minWidth: '8em',
        minHeight: '3.5em',
        marginRight: '3.5em',
        marginLeft: '3.5em',
        marginTop: '3em',
        shapeOutside: '1em',
        // boxShadow: theme.shadows[2],
    },
    servicesTextContainer: {
        backgroundColor: theme.palette.background.paper,
        // maxWidth: '8em',
        minWidth: '8em',
        minHeight: '3.5em',
        marginRight: '3.5em',
        marginLeft: '3.5em',
        marginTop: '3em',
        boxShadow: theme.shadows[2],

        [theme.breakpoints.down("sm")]: {
            marginTop: '1em'
        },
    },
    heroBG: {

    },
    heroContainer: {
        /*      backgroundImage: `url(${Image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              width: '100%'
      */
        backgroundColor: '#f5f4f5'
    }
}));


export default function LandingPage(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const servicesDisplay = (
        <Grid
            container
            direction={matchesSM ? 'column' : 'row'}
            justifyContent="center"
            alignItems="center">
            <Grid item className={classes.servicesTextContainer}>
                <Typography variant='BUTTON TEXT' className={classes.servicesText}>UX/UI</Typography>
            </Grid>
            <Grid item className={classes.servicesTextContainer}>
                <Typography variant='BUTTON TEXT' className={classes.servicesText}>Mobile Development</Typography>
            </Grid>
            <Grid item className={classes.servicesTextContainer}>
                <Typography variant='BUTTON TEXT' className={classes.servicesText}>Web Development</Typography>
            </Grid>
        </Grid>
    )


    const heroBlock = (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.heroContainer}
                // style={{ height: '40em' }}
            >

                <img src={avatar} alt='avatar' className={classes.avatar} />
                <Typography variant='h3' className={classes.introText}>Hello World!! I am <span style={{ fontWeight: 700 }} >Muhammad Zohair</span>,<br />
                    a <span style={{ fontWeight: 700 }} >Computer Scientist</span> standing on a sweet spot where<br />
                    design and code intersects
                </Typography>
                <Typography variant='h3' className={classes.taglineText}>
                    Let's Talk Business👋
                </Typography>
                <Grid item>
                    {servicesDisplay}
                </Grid>
            </Grid>
        </React.Fragment >
    )

    return (
        <React.Fragment>
            <NavBar />
            <Grid container
                direction="column"
                className={classes.mainContainer} >
                <Grid item >
                    {heroBlock}
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
