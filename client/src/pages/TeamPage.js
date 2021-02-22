import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import CardContainer from '../components/CardContainer';
import TeamCard from '../components/TeamCard';

const TeamPage = () => {
	const [team, setTeam] = useState([]);
	// const [formObject, setFormObject] = useState({});

	useEffect(() => {
		loadTeam();
	}, []);

	function loadTeam() {
		API.getTeam()
			.then((res) => {
				console.log(res);
				setTeam(res.data);
			})
			.catch((err) => console.log(err));
	}

	function checkInValidation(team) {
		for (let i = 0; i < team.length; i++) {
			if (team[i].checkedIn === true) {
				team[i].checkedIn = 'Checked in!';
			} else if (team[i].checkedIn === false) {
				team[i].checkedIn = 'Not checked in';
			}
		}
	}
	function sportsStringify(team) {
		for (let i = 0; i < team.length; i++) {
			let newArray = team[i].sports.map((x) => x);

			newArray.join(', ');

			team[i].sports = newArray;
		}
	}

	checkInValidation(team);
	sportsStringify(team);

	return (
		<div>
			<CardContainer>
				{team.map((member) => (
					<TeamCard {...member} />
				))}
			</CardContainer>
		</div>
	);
};

export default TeamPage;
