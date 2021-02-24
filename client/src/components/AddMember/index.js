// AddMember.js

import React from 'react';
import './style.css';

const AddMember = (props) => {
	return (
		<div className="flex">
			<dvi className="AddMember">
				<button>Add</button>
				<input>{props.username}</input>
			</dvi>
		</div>
	);
};

export default AddMember;
