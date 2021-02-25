// AddMember.js

import React from 'react';
import plusBtn from '../../Assets/plusBtn.png';
import './style.css';

const AddMember = (props) => {
	return (
		<div className="flex">
			<dvi className="AddMember">
				<img src={plusBtn} alt="*"></img>
				<input placeholder="Search by username here"></input>;
			</dvi>
		</div>
	);
};

export default AddMember;
