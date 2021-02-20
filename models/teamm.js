const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const team = new Schema({
	name: { type: String, required: true },
	sport: String,
	members: [
		{
			id: String,
			checkedIn: {
				type: Boolean,
				default: false,
			},
			name: String,
		},
	],
});

const Team = mongoose.model('Teamm', team);

module.exports = Team;
