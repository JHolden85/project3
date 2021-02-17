const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
	//this is the route to get current user info
});

router.get('/api/team', (req, res) => {
	//this is the route to get current user info
	db.Team.find({})
		.then((dbTeam) => res.json(dbTeam))
		.catch((err) => res.status(400).json(err));
});

router.post('/api/team', (req, res) => {
	//this is the route to get current user info
	db.Team.create(req.body)
		.then((teamMember) => res.json(teamMember))
		.catch((err) => res.status(400).json(err));
});

router.post('/api/team', (req, res) => {
	//this is the route to get current user info
	db.Team.update(req.body)
		.then((teamMember) => res.json(teamMember))
		.catch((err) => res.status(400).json(err));
});

router.post('/signup', (req, res) => {
	//sign up the user
	console.log("You're signing up ", req.body);
});

router.post('/login', (req, res) => {
	//login the user
	console.log("You're loging in ", req.body);
});

module.exports = router;
