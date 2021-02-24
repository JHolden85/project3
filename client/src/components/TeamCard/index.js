// TeamCard.js

import React from 'react';
import './style.css';

const TeamCard = (props) => {
	return (
		<div className="flex TeamCard">
			<h1 id="teamname">{props.name}</h1>
			<h2 id="teamsport">{props.sport}</h2>
		</div>
	);
};

export default TeamCard;
