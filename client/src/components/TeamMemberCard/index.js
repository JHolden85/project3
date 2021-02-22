import React from 'react';
import './style.css';

var i;

const index = (props) => {
	for (i = 0; i > props.members.length; i++) {
		return i;
	}
};

const TeamMemberCard = (props) => {
	index(props);
	return (
		<div id="card">
			<h1>{props.members[i].name}</h1>
			<h3>{props.members[i].checkedIn}</h3>
		</div>
	);
};

export default TeamMemberCard;
