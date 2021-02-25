import React, { useState } from 'react';
import plusBtn from '../../Assets/plusBtn.png';
import './style.css';

const TeamOptionCard = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [state, setState] = useState({
		search: false,
		updateName: false,
		delete: false,
	});

	const addMember = () => {
		setState({
			search: true,
		});
	};

	const updateTeam = () => {
		setState({
			updateName: true,
		});
	};

	const deleteTeam = () => {
		setState({
			delete: true,
		});
	};

	return (
		<div>
			<div className="flex TeamOptions">
				<button className="TeamBtn" onClick={addMember}>
					Add Member
				</button>
				<button className="TeamBtn" onClick={updateTeam}>
					Update Name
				</button>
				<button className="TeamBtn" onClick={deleteTeam} id="deleteBtn">
					Delete Team
				</button>
			</div>
			<div id="teamOption">
				{state.search && (
					<dvi className="AddMember">
						<img src={plusBtn} alt="*"></img>
						<input placeholder="Search by username here"></input>;
					</dvi>
				)}
			</div>
		</div>
	);
};

export default TeamOptionCard;
