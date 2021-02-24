// TeamCard.js

import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import './style.css';

const TeamCard = () => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		loadTeam();
	}, []);

	function loadTeam() {
		API.getTeam()
			.then(({ data }) => {
				console.log(data);
				setTeam(data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="flex">
			{team.map((team) => {
				return (
					<div className="flex TeamCard" key={team._id}>
						<h1 id="teamname">{team.name}</h1>
						<h2 id="teamsport">{team.sport}</h2>
					</div>
				);
			})}

			<div className="flex TeamOptions">
				<button className="TeamBtn">Add Member</button>
				<button className="TeamBtn">Update Name</button>
				<button className="TeamBtn" id="deleteBtn">
					Delete Team
				</button>
			</div>
		</div>
	);
};

export default TeamCard;
