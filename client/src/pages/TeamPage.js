import React from 'react';
import CardContainer from '../components/CardContainer';
import TeamCard from '../components/TeamCard';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamPage = () => {
	return (
		<div>
			<CardContainer>
				<TeamCard />
				<TeamMemberCard />
			</CardContainer>
		</div>
	);
};

export default TeamPage;
