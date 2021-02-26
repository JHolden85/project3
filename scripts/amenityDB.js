const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Parcs');

const amenitiesSeed = [
	{
		parkName: 'Rainbow Lagoon Park',
		tennis: false,
		football: false,
		soccer: true,
		basketball: false,
    	baseball: false,
    	handball: false,
    	skatepark: true,
    	playground: false,
    	pool: false,
	},
	{
		parkName: 'Bluff Park',
		tennis: false,
		football: false,
		soccer: true,
		basketball: false,
    	baseball: false,
    	handball: false,
    	skatepark: true,
    	playground: false,
    	pool: false,
	},
	{
		parkName: 'Drake/Chavez Soccer Field',
		tennis: false,
		football: false,
		soccer: true,
		basketball: false,
    	baseball: false,
    	handball: false,
    	skatepark: true,
    	playground: false,
    	pool: false,
	},
	{
		parkName: 'Carroll Park',
		tennis: false,
		football: false,
		soccer: true,
		basketball: false,
    	baseball: false,
    	handball: false,
    	skatepark: true,
    	playground: false,
    	pool: false,
	},
	{
		parkName: 'Rose Park',
		tennis: false,
		football: false,
		soccer: true,
		basketball: false,
    	baseball: false,
    	handball: false,
    	skatepark: true,
    	playground: false,
    	pool: false,
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
