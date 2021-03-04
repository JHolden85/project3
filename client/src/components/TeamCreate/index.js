// TeamCreate.js

import React from 'react';
import API from '../../utils/API';
import plusBtn from '../../Assets/plusBtn.png';
import './style.css';

const TeamCreate = () => {
	const nameInput = React.createRef();
	const sportInput = React.createRef();

	const newTeam = () => {
		const name = nameInput.current.value;
		const sport = sportInput.current.value;

		const teamData = {
			name: name,
			sport: sport,
		};

		API.postTeam(teamData).then((teamData) => {
			console.log(teamData);
		});

		window.location.reload();
	};

	return (
		<div className="flex newTeam">
			<h1>Create your first team below!</h1>
			<br></br>
			<input
				placeholder="Team Name"
				className="newTeamInput"
				id="teamName"
				ref={nameInput}
			></input>
			<br></br>
			<input
				placeholder="Team Sport"
				className="newTeamInput"
				id="teamSport"
				ref={sportInput}
			></input>
			<br></br>
			<button
				type="submit"
				className="optionBtn"
				id="submitNewTeam"
				onClick={newTeam}
			>
				<img src={plusBtn} alt="*" className="iconBtn"></img>
			</button>
		</div>
	);
};

export default TeamCreate;
