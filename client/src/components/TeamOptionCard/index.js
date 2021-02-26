// TeamOptionCard.js

import React, { useState } from 'react';
import plusBtn from '../../Assets/plusBtn.png';
import deleteBtn from '../../Assets/delete.png';
import API from '../../utils/API';
import './style.css';

const TeamOptionCard = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [state, setState] = useState({
		newMember: false,
		updateName: false,
		delete: false,
	});

	const addMember = () => {
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

	const updateTeam = () => {
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

	const deleteTeam = () => {
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

	const handleAdd = () => {
		const member = document.getElementById('user').value;
		const addMember = document.getElementById('addMember');

		addMember.addEventListener('click', (req, res) => {
			API.updateMembers(member)
				.then((res) => {
					console.log(res);
					res.json(res.data);
				})
				.catch((err) => console.log(err));
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
						<button className="optionBtn" id="delete">
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
