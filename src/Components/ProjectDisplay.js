import Box from '@material-ui/core/Box';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import sample1 from '../assets/sample1.jpg'
import playStore from '../assets/playstore.png'
import visitweb from '../assets/visitweb.png'


import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	mainContainer: {
	},
	icons: {
		width: '10em',
		height: '5em',
	},
	rowContainer: {
		width: '80%',
		maxWidth: '80%'
	},
	thanksBlock: {
		textAlign: 'center',
	},
	displayPic: {
		objectFit: 'contain',
		maxWidth: '100%'
	}


}));


export default function ProjectDisplay(props) {

	const classes = useStyles();


	const title = 'WebNOC';
	const description = 'Project description of the Project.'
	const image = sample1;
	const playStoreLink = 'https://www.google.com.pk/';
	const websiteLink = 'https://www.google.com.pk/';

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		scrollToTop()
	}, []);

	return (
		<React.Fragment>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				className={classes.mainContainer}
			>
				<Grid item className={classes.rowContainer}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>

						<Grid item >
							<Grid
								container
								direction="column"
								justifyContent="center"
								alignItems="flex-start"
							>
								<Typography variant='h2' id='project-title'>{title}</Typography>
								<Typography variant='body1'>{description}</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Grid
								container
								direction="row"
								justifyContent="flex-end"
								alignItems="center"
							>
								<Button component={"a"} href={playStoreLink} rel="noopener no referrer" target="_blank">
									<img src={playStore} alt="playstoreLink" className={classes.icons}
									/>
								</Button>
								<Button component={"a"} href={websiteLink} rel="noopener no referrer" target="_blank" >
									<img src={visitweb} alt="web link" className={classes.icons}
									/>
								</Button>
							</Grid>
						</Grid>

					</Grid>
				</Grid>
				<Box border={1} borderColor="primary.dark" p='5%' marginTop='3em' maxWidth='100%'>
					<Grid item className={[classes.rowContainer, classes.borderBox].join}>
						<img src={image} alt="website image" className={classes.displayPic} />
					</Grid>
				</Box>
				<Grid item className={[classes.rowContainer, classes.thanksBlock].join}>
					<Typography variant='h2'>Thanks for watching</Typography>
					<Typography variant='body1'>If you like this project, please click appreciate button below</Typography>
				</Grid>
				<Grid item className={classes.rowContainer}>
					<Button variant="contained" color="primary" component={Link} to="/" >
						Back
					</Button>
				</Grid>
			</Grid>
		</React.Fragment >
	);
}