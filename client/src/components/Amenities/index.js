import React from 'react';
import './style.css';

const Amenities = ({ park }) => {
	console.log('park data received on amenities page', park);

	return (
		<div className="Amenities row">
			<ul className="col">
				<li>Baseball:</li>
				<hr></hr>
				<li>Soccer:</li>
				<hr></hr>
				<li>Football:</li>
				<hr></hr>
				<li>Basketball:</li>
				<hr></hr>
				<li>Running Track:</li>
				<hr></hr>
				<li>Handball:</li>
				<hr></hr>
				<li>Tennis:</li>
				<hr></hr>
				<li>Trail:</li>
				<hr></hr>
				<li>Pool:</li>
				<hr></hr>
				<li>Running Track:</li>
			</ul>
			<ul className="col">
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
				<hr></hr>
				<li>true</li>
			</ul>
		</div>
	);
};

export default Amenities;
