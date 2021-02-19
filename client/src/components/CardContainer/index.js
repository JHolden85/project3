import React from 'react';

const CardContainer = (props) => {
	return (
		<div className="CardContainer" style={props.style}>
			{props.children}
		</div>
	);
};

export default CardContainer;
