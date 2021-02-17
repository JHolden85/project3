const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Parcs');

const teamSeed = [
	{
		name: 'Barry White',
		lastLogin: Date.now,
		sports: ['basketball', 'football', 'swimming'],
		checkedIn: false,
	},
	{
		name: 'Barry Manilow',
		lastLogin: Date.now,
		sports: ['soccer', 'football'],
		checkedIn: true,
	},
	{
		name: 'Chuck Barry',
		lastLogin: Date.now,
		sports: ['soccer', 'handball', 'tennis'],
		checkedIn: true,
	},
	{
		name: 'Barry Bonds',
		lastLogin: Date.now,
		sports: ['baseball'],
		checkedIn: false,
	},
	{
		name: 'Very Barry',
		lastLogin: Date.now,
		sports: ['tennis', 'handball', 'soccer'],
		checkedIn: true,
	},
	{
		name: 'Marry Barry',
		lastLogin: Date.now,
		sports: ['handball', 'football'],
		checkedIn: true,
	},
];

db.Team.remove({})
	.then(() => db.Team.collection.insertMany(teamSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
