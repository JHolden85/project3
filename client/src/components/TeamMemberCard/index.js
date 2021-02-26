// TeamMemberCard.js

import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';

const TeamMemberCard = () => {
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
		<div>
			{team.length
				? team[0].members?.map((member) => {
						return (
							<div id="MemberDiv">
								<div id="MemberCard" key={member.id}>
									<h1>{member.name}</h1>
									<h3 id="h3">{member.checkedIn}</h3>
								</div>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default TeamMemberCard;
