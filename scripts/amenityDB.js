const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Parcs');

const amenitiesSeed = [
	{
		name: 'Rainbow Lagoon Park',
		sports: ['basketball', 'football', 'swimming'],
	},
	{
		name: 'Bluff Park',
		sports: ['soccer, football'],
	},
	{
		name: 'Chuck Barry',
		lastLogin: Date.now,
		sports: 'soccer, handball, tennis',
		checkedIn: true,
	},
	{
		name: 'Drake/Chavez Soccer Field',
		sports: ['soccer'],
	},
	{
		name: 'Carroll Park',
		lastLogin: Date.now,
		sports: 'tennis, handball, soccer',
		checkedIn: true,
	},
	{
		name: 'Rose Park',
		lastLogin: Date.now,
		sports: 'handball, football',
		checkedIn: true,
	},
];

db.Amenities.remove({})
	.then(() => db.Amenities.collection.insertMany(amenitiesSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
