import avatar from '../assets/avatar.jpg'
import Image from '../assets/hero_bg.jpg'
import sample1 from '../assets/sample1.jpg'
import sample2 from '../assets/sample2.jpg'
import sample3 from '../assets/sample3.jpg'
import experience1 from '../assets/experience-1.svg'
import experience2 from '../assets/experience-2.svg'

import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ImageList from '@material-ui/core/ImageList';
import { HashLink } from 'react-router-hash-link';
import { Link, useHistory } from 'react-router-dom';

import NavBar from './NavBar'

import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { fontWeight } from '@material-ui/system';
import { maxWidth } from '@material-ui/system';
import Footer from './Footer'


const useStyles = makeStyles(theme => ({

    mainContainer: {
        // marginTop: '5em',
        backgroundColor: theme.palette.common.white,
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
        padding: theme.spacing(2),
        textAlign: 'center',
        maxWidth: '8em',
        minWidth: '8em',
        color: theme.palette.primary.dark,
        // minHeight: '3.5em',
        // marginRight: '3.5em',
        // marginLeft: '3.5em',
        // marginTop: '3em',
        // shapeOutside: '1em',
        // boxShadow: theme.shadows[2],
    },
    servicesTextContainer: {
        backgroundColor: theme.palette.background.paper,
        // maxWidth: '8em',
        minWidth: '8em',
        minHeight: '5.5em',
        // marginRight: '3.5em',
        // marginLeft: '3.5em',
        margin: '3em',
        boxShadow: theme.shadows[3],

        [theme.breakpoints.down("sm")]: {
            margin: 0,
            marginTop: '1em',
            // paddingRight: '40%',
            // paddingLeft: '40%'
        },
    },
    downArrow: {
        marginTop: '1.5em',
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    portfolioImage: {
        height: '20em',
        width: '100%',
        objectFit: 'cover',
        boxShadow: theme.shadows[4],
        "&:hover": {
            opacity: 0.8,
        }
    },
    portfolioContainer: {
        padding: '1em'
    },
    aboutBlockContainer: {
        marginTop: '5em'
    },
    experienceDetailsContainer: {
        marginTop: "2em"
    },
    experienceLogo: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down("xs")]: {
            height: '2em',
            width: '2em',
        }
    }
}));


export default function LandingPage(props) {

    const classes = useStyles();
    const theme = useTheme();
    const projectsRef = useRef(null);
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop()
    }, []);

    const samples = [
        { img: sample1, title: 'sample 1', },
        { img: sample2, title: 'sample 2', },
        { img: sample3, title: 'sample 3', },
        { img: sample1, title: 'sample 1', },
    ]

    const exeperiences = [
        {
            city: 'Islamabad',
            country: 'Pakistan',
            date: 'Sep 19 - Nov 20',
            logo: experience1,
            title: 'Lead Android Developer - Qubit Solutions',
            description: 'Inspire and lead team of UI designers. Thrive when partnering with business and development to align on problems, having experiences that drive business goals very easily.'
        },
        {
            city: 'Islamabad',
            country: 'Pakistan',
            date: 'Nov 20 - today',
            logo: experience2,
            title: 'Lead Android Developer - Leed Software Development',
            description: 'Inspire and lead team of UI designers. Thrive when partnering with business and development to align on problems, having experiences that drive business goals very easily.'
        },
    ]

    const servicesDisplay = (
        <Grid
            container
            direction={matchesSM ? 'column' : 'row'}
            justifyContent="center"
            alignItems="center">
            <Grid item className={classes.servicesTextContainer}>
                <Typography variant='h6' className={classes.servicesText}>UX/UI</Typography>
            </Grid>
            <Grid item className={classes.servicesTextContainer}>
                <Typography variant='h6' className={classes.servicesText}>Mobile Development</Typography>
            </Grid>
            <Grid item className={classes.servicesTextContainer}>
                <Typography variant='h6' className={classes.servicesText}>Web Development</Typography>
            </Grid>
        </Grid>
    )
/*
    function handleClick(i) {
        const sample = samples[i];
        props.setTitle(sample.title);
        props.setDescription(sample.description);
        props.setImage(sample.img);
        props.setPlayStoreLink(sample.pl);
        props.setWebsiteLink(sample.title);
      }
*/
    const goToProjectsSection = () => window.scrollTo({ top: projectsRef.current.offsetTop, behavior: 'smooth' });


    const heroBlock = (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.heroContainer}
                style={{ height: '92.8vh' }}
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
                <Hidden smDown>
                    <Button disableRipple
                        onClick={() => goToProjectsSection()}
                        className={classes.downArrow}
                        onClick={goToProjectsSection}>
                        <ArrowDropDownCircleOutlinedIcon
                            style={{ fontSize: 60 }}
                        // component={HashLink} to={'#projects'}
                        />
                    </Button>
                </Hidden>
            </Grid>
        </React.Fragment >
    )

    const portfolioBlock = (
        <React.Fragment>
            <Typography variant='h3' id="projects">Projects</Typography>
            <Grid container ref={projectsRef} className={classes.portfolioContainer}>
                {
                    samples.map((item, i) => (
                        <Grid item xs={6} sm={6} md={3} key={item + i} style={{ padding: 5 }}>
                            <Link to="/project">
                                <ImageListItem >
                                    <img src={item.img} alt={item.title} className={classes.portfolioImage} />
                                    <ImageListItemBar title={item.title}
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                    />
                                </ImageListItem>
                            </Link>
                        </Grid>
                    ))
                }

            </Grid>
        </React.Fragment>
    )

    const aboutBlock = (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={classes.aboutBlockContainer}
                id="about"
            >
                <Typography variant='h3'>About Me 😊</Typography>
                <Typography variant='subtitle1' >Eager to learn and develop a thrust for technology. To use all my positive abilities to ensure the betterment of the organization, myself, my country and the wider world.</Typography>




            </Grid>
        </React.Fragment>
    )

    const ExperienceBlockDesktop = (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={classes.aboutBlockContainer}
            >
                <Typography variant='h3'>Work Experience 💻</Typography>

                {
                    exeperiences.map((exeperience, i) => (
                        <Grid
                            key={exeperience + i}
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            className={classes.experienceDetailsContainer}
                        // spacing={2}
                        >

                            <Grid item sm={1} lg={1}>  {/*location & date*/}
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <Typography variant='body1'>{exeperience.city},</Typography>
                                    <Typography variant='body1'>{exeperience.country}</Typography>
                                    <Typography variant='subtitle1'>{exeperience.date}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={1}>  {/*Logo*/}
                                <img src={exeperience.logo} alt='company logo' className={classes.experienceLogo} />
                            </Grid>
                            <Grid item xs={6} sm={8} md={10} >  {/*Text*/}
                                <Box borderLeft={1} borderColor={theme.palette.primary.dark}>
                                    <Typography variant='h4' style={{ paddingLeft: '2%' }}>{exeperience.title}</Typography>
                                    <Typography variant='subtitle1' style={{ paddingLeft: '2%' }}>{exeperience.description}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment >
    )

    return (
        <React.Fragment>

            <Grid container
                direction="column"
                className={classes.mainContainer} >
                <Grid item >
                    {heroBlock}
                </Grid>
                <Grid item >
                    {portfolioBlock}
                </Grid>
                <Grid item >
                    {aboutBlock}
                </Grid>
                <Grid item >
                    {ExperienceBlockDesktop}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
