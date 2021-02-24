import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';

const TeamMemberCard = (props) => {
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

	function checkInValidation(team) {
		team.map((team) => {
			for (let i = 0; i < team.members.length; i++) {
				if (team.members[i].checkedIn === true) {
					team.members[i].checkedIn = 'Checked in!';
				} else if (team.members[i].checkedIn === false) {
					team.members[i].checkedIn = 'Not checked in';
				}
			}
			return team;
		});
	}

	checkInValidation(team);

	return (
		<div id="MemberCard">
			{team.map((team, index) => {
				return (
					<ul>
						<li key={team._id}>
							<h1>{team.members[index].name}</h1>
							<h3>{team.members[index].checkedIn}</h3>
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default TeamMemberCard;
