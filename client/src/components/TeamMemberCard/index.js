// TeamMemberCard.js

import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
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
			setUser(data);
		});
	};

	// Setting Socket IO info
	const socket = io();

	// Toggles the user's check in status between true or false
	// //////////////////////////////////////////////////////////////////////

	const toggleCheckIn = (event) => {
		const name = event.currentTarget.name;

		if (name === user.username) {
			API.memberCheckIn({ username: name, teamId: team[0]._id })
				.then((res) => {})
				.catch((err) => console.log(err));

			socket.emit('check-in', 'Freedom! Freedom! Freedom! Oy!');

			window.location.reload();
		} else {
			return;
		}
	};

	// This function converts the users check-in status from
	//  boolean into user friendly text content
	// //////////////////////////////////////////////////////////////////////

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

	return (
		<div>
			{team.length
				? team[0].members?.map((member) => {
						return (
							<div name={member.name} id="MemberDiv" key={member._id}>
								<button
									className="button"
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
