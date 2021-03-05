import React from 'react';
import './style.css';

const TeamContainer = (props) => {
	return (
		<div className="TeamContainer" style={props.style}>
			{props.children}
		</div>
	);
};

export default TeamContainer;
