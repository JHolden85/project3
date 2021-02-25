import React from 'react';
import CardContainer from '../components/CardContainer';
import TeamCard from '../components/TeamCard';
import TeamMemberCard from '../components/TeamMemberCard';
import TeamOptionCard from '../components/TeamOptionCard';

const TeamPage = () => {
	return (
		<div>
			<CardContainer>
				<TeamCard />
				<TeamOptionCard />
				<TeamMemberCard />
			</CardContainer>
		</div>
	);
};

export default TeamPage;
