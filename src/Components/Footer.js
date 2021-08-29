import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


import { Link } from 'react-router-dom';

import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import logo from '../assets/logo.svg'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	mainContainer:{
		backgroundColor: theme.palette.secondary.dark,
	},
	footer: {
		width: '100%',
		zIndex: theme.zIndex.modal + 1,
		position: 'relative',
		marginTop: '8em',

	},
	footerContainer: {
		borderRadius: '10'
	},
	logoContainer: {
		// marginLeft: '10em',
		// [theme.breakpoints.down("md")]: {
		// 	marginLeft: '0em',
		// },
		// [theme.breakpoints.down("md")]: {
		// 	marginLeft: '0em',
		// },
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	logo: {
		height: "6em",
		width: "20em",
		[theme.breakpoints.down("md")]: {
			height: "4.5em",
			width: "14em",
		},
		[theme.breakpoints.down("xs")]: {
			height: "3.5em",
			width: "12em",
		},
	},
	icon: {
		height: '2.5em',
		width: '2.5em',
		marginRight: '1.5em',

		[theme.breakpoints.down("md")]: {
			height: '1.5em',
			width: '1.5em',
		},
		// [theme.breakpoints.down("xs")]: {
		// 	height: '1em',
		// 	width: '1em',
		// }
	},
	socialIconContainer: {
		// position: 'absolute',
		// right: '1.5em'
		marginTop: '1em'
	},
	copyrightsText:{
		textAlign: 'center',
		color: theme.palette.primary.main,
		marginTop: '2em'
	}

}));


export default function Footer(props) {

	const classes = useStyles();

	return (
		<React.Fragment>
			<footer className={classes.footer}
			>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					className={classes.mainContainer}
				>
					<Grid item>
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							className={classes.footerContainer}
						>
							<Link to="/" className={classes.logoContainer} disableRipple>
								<img alt='Company logo' className={classes.logo} src={logo} />
							</Link>
						</Grid>

						<Grid item>
							<Grid container className={classes.socialIconContainer} justifyContent="center">
								<Grid item component={"a"} href="https://www.facebook.com/" rel="noopener no referrer" target="_blank" >
									<img src={facebook} alt='fb logo' className={classes.icon} />
								</Grid>
								<Grid item component={"a"} href="https://twitter.com/home?lang=en" rel="noopener no referrer" target="_blank">
									<img src={twitter} alt='twitter logo' className={classes.icon} />
								</Grid>
								<Grid item component={"a"} href="https://www.instagram.com/" rel="noopener no referrer" target="_blank">
									<img src={instagram} alt='instagram logo' className={classes.icon} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={classes.copyrightsText}>
							<Typography variant='caption' >Lunatic Aliens © 2021 All Rights</Typography>
						</Grid>
					</Grid>
				</Grid>
			</footer>
		</React.Fragment>
	);
}