import React from 'react';
import "./FloatBlockStyle.css";
import instaIcon from '../../assets/insta-icon.png'


export default function FloatBlock(props) {

	return (
		<React.Fragment>
			<div className="float-container">
				<img src={instaIcon} alt="insta icon" className="icon" />
			</div>
		

		</React.Fragment>
	);
}