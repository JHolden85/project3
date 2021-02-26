import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import CardContainer from '../components/CardContainer';
import TeamCard from '../components/TeamCard';
import TeamMemberCard from '../components/TeamMemberCard';
import TeamOptionCard from '../components/TeamOptionCard';
import TeamCreate from '../components/TeamCreate';

const TeamPage = () => {
	const [team, setTeam] = useState({});

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

	if (team.length !== 0) {
		return (
			<div>
				<CardContainer>
					<TeamCard />
					<TeamOptionCard />
					<TeamMemberCard />
				</CardContainer>
			</div>
		);
	} else {
		return (
			<div>
				<TeamCreate />
			</div>
		);
	}
};

export default TeamPage;
