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
