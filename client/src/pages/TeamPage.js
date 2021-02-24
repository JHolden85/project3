import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import CardContainer from '../components/CardContainer';
import TeamCard from '../components/TeamCard';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
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

	// function checkInValidation(team) {
	// 	for (let i = 0; i < team[i].members.length; i++) {
	// 		if (team[i].members[i].checkedIn === true) {
	// 			team[i].members[i].checkedIn = 'Checked in!';
	// 		} else if (team[i].members[i].checkedIn === false) {
	// 			team[i].members[i].checkedIn = 'Not checked in';
	// 		}
	// 	}
	// }

	// checkInValidation(team);

	return (
		<div>
			<CardContainer>
				<div>
					{team.map((card) => (
						<TeamCard {...card} />
					))}
					{team.map((member) => (
						<TeamMemberCard {...member} />
					))}
				</div>
			</CardContainer>
		</div>
	);
};

export default TeamPage;
