// TeamMemberCard.js

import React, { useState, useEffect, useRef } from 'react';
import API from '../../utils/API';
import './style.css';

const TeamMemberCard = () => {
	const [team, setTeam] = useState([]);

	const nameRef = useRef();

	useEffect(() => {
		loadTeam();
	}, []);

	const loadTeam = () => {
		API.getTeam()
			.then(({ data }) => {
				setTeam(data);
			})
			.catch((err) => console.log(err));
	};

	const toggleCheckIn = (event) => {
		const name = event.currentTarget.textContent;
		console.log(name);
		console.log('toggleCheckIn hit');
		console.log(JSON.stringify(nameRef.current.value));
		API.memberCheckIn({ username: nameRef.current.value, teamId: team[0]._id })
			.then((res) => {
				console.log('sending new member: ', res);
			})
			.catch((err) => console.log(err));
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

	return (
		<div>
			{team.length
				? team[0].members?.map((member) => {
						return (
							<div id="MemberDiv">
								<button
									id="MemberCard"
									key={member._id}
									onClick={toggleCheckIn}
								>
									<h1 ref={nameRef}>{member.name}</h1>
									<h3 id="h3">{member.checkedIn}</h3>
								</button>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default TeamMemberCard;
