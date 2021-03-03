// TeamMemberCard.js

import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './style.css';

const TeamMemberCard = () => {
	const [team, setTeam] = useState([]);
	const [user, setUser] = useState(null);

	useEffect(() => {
		loadTeam();
	}, []);

	const loadTeam = () => {
		API.getTeam()
			.then(({ data }) => {
				setTeam(data);
			})
			.catch((err) => console.log(err));
		API.getUser().then(({ data }) => {
			console.log(data);
			setUser(data);
		});
	};

	const toggleCheckIn = (event) => {
		const name = event.currentTarget.name;

		console.log('name', name);
		if (name === user.username) {
			API.memberCheckIn({ username: name, teamId: team[0]._id })
				.then((res) => {})
				.catch((err) => console.log(err));

			window.location.reload();
		} else {
			return;
		}
	};

	const checkInValidation = (team) => {
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
	};

	checkInValidation(team);

	console.log('TeamMemberCard user info: ', user);

	return (
		<div>
			{team.length
				? team[0].members?.map((member) => {
						return (
							<div name={member.name} id="MemberDiv" key={member._id}>
								<button
									id="MemberCard"
									name={member.name}
									onClick={toggleCheckIn}
								>
									<h1 name={member.name}>{member.name}</h1>
									<h3 name={member.name} id="h3">
										{member.checkedIn}
									</h3>
								</button>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default TeamMemberCard;
