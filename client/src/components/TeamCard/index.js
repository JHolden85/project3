// TeamCard.js

import React from 'react';

import './style.css';

const TeamCard = (props) => {
	return (
		<div>
			<div className="flex TeamCard">
				<h1 id="teamname">{props.name}</h1>
				<h2 id="teamsport">{props.sport}</h2>
			</div>
			<div className="flex TeamOptions">
				<button className="TeamBtn">Add Member</button>
				<button className="TeamBtn">Update Name</button>
				<button className="TeamBtn" id="deleteBtn">
					Delete Team
				</button>
			</div>
		</div>
	);
};

export default TeamCard;
