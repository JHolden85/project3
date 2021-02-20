import React from 'react';
import './style.css';

const TeamCard = (props) => {
	return (
		<div id="card">
			<h1>{props.name}</h1>
			<h3>{props.checkedIn}</h3>
			<br></br>
			<p>{props.sports}</p>
			<br></br>
			<h4>{props.lastLogin}</h4>
		</div>
	);
};

export default TeamCard;
