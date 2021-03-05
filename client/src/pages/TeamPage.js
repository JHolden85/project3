import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import TeamCard from '../components/TeamCard';
import TeamMemberCard from '../components/TeamMemberCard';
import TeamOptionCard from '../components/TeamOptionCard';
import TeamCreate from '../components/TeamCreate';
import TeamContainer from '../components/TeamContainer';

const TeamPage = () => {
	const [team, setTeam] = useState({});

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

	if (team.length !== 0) {
		return (
			<div>
				<TeamContainer>
					<TeamCard />
					<TeamOptionCard team={team} />
					<TeamMemberCard team={team} />
				</TeamContainer>
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
