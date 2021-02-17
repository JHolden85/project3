const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const team = new Schema({
	name: { type: String, required: true },
	lastLogin: { type: Date, default: Date.now },
	sports: { type: String },
	checkedIn: { type: Boolean },
});

const Team = mongoose.model('Team', team);

module.exports = Team;
