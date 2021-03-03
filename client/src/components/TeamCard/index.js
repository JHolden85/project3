// TeamCard.js

import React, { useEffect, useState } from 'react';
// import TeamMemberCard from '../TeamMemberCard';
// import TeamOptionCard from '../TeamOptionCard';
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
				setTeam(data);
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className="flex">
			{team.map((team) => {
				return (
					<div key={team._id}>
						<div className="flex TeamCard" key={team._id}>
							<h1 id="teamname">{team.name}</h1>
							<h2 id="teamsport">{team.sport}</h2>
						</div>
						{/* <TeamOptionCard team={team} />
						<TeamMemberCard team={team} /> */}
					</div>
				);
			})}
		</div>
	);
};

export default TeamCard;
