// TeamOptionCard.js

import React, { useState, useRef } from 'react';
import plusBtn from '../../Assets/plusBtn.png';
import deleteBtn from '../../Assets/delete.png';
import API from '../../utils/API';
import './style.css';

const TeamOptionCard = ({ team }) => {
	const inputRef = useRef();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [state, setState] = useState({
		newMember: false,
		updateName: false,
		delete: false,
	});

	// Functions to toggle team options into on or off positions
	// Only one toggle can be set to active at a time
	// ///////////////////////////////////////////////////////////
	const addMemberToggle = () => {
		if (!state.newMember) {
			setState({
				newMember: true,
				updateName: false,
				delete: false,
			});
		} else {
			setState({
				newMember: false,
				updateName: false,
				delete: false,
			});
		}
	};

	const updateTeamToggle = () => {
		if (!state.updateName) {
			setState({
				newMember: false,
				updateName: true,
				delete: false,
			});
		} else {
			setState({
				newMember: false,
				updateName: false,
				delete: false,
			});
		}
	};

	const deleteTeamToggle = () => {
		if (!state.delete) {
			setState({
				newMember: false,
				updateName: false,
				delete: true,
			});
		} else {
			setState({
				newMember: false,
				updateName: false,
				delete: false,
			});
		}
	};
	// ///////////////////////////////////////////////////////////

	const handleAdd = () => {
		API.updateMembers({ memberId: inputRef.current.value, teamId: team[0]._id })
			.then((res) => {
				console.log('sending new member: ', res);
			})
			.catch((err) => console.log(err));

		window.location.reload();
	};

	const handleDelete = () => {
		console.log('team state', team);
		API.deleteTeam({ teamId: team[0]._id })
			.then((res) => {
				console.log('Sending: ', res);
				console.log('api hit');
			})
			.catch((err) => console.log(err));
		// window.location.reload();
	};

	return (
		<div>
			<div className="flex TeamOptions">
				<button className="TeamBtn" onClick={addMemberToggle}>
					Add Member
				</button>
				<button className="TeamBtn" onClick={updateTeamToggle}>
					Update Name
				</button>
				<button className="TeamBtn" onClick={deleteTeamToggle} id="deleteBtn">
					Delete Team
				</button>
			</div>
			<br></br>
			<div id="teamOption">
				{state.newMember && (
					<div className="optionDiv">
						<button className="optionBtn" onClick={handleAdd}>
							<img
								src={plusBtn}
								alt="*"
								className="iconBtn"
								id="addMember"
							></img>
						</button>
						<input
							ref={inputRef}
							className="option"
							placeholder="Search by username here"
							id="user"
						></input>
					</div>
				)}
				{state.updateName && (
					<div className="optionDiv">
						<button className="optionBtn">
							<img src={plusBtn} alt="*" className="iconBtn" id="update"></img>
						</button>
						<input className="option" placeholder="Enter new name here"></input>
					</div>
				)}
				{state.delete && (
					<div className="optionDiv deleteDiv">
						<h3 className="option">Click to confirm delete</h3>
						<br></br>
						<button className="optionBtn" id="delete" onClick={handleDelete}>
							<img
								src={deleteBtn}
								alt="*"
								className="iconBtn"
								id="update"
							></img>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default TeamOptionCard;
