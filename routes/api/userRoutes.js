const router = require('express').Router();
const db = require('../../models');
const controller = require('../../controllers/teamController');

router.get('/', (req, res) => {
	//this is the route to get current user info

	controller.findAll({});

	// db.Team.find({})
	// 	.then((teamDB) => {
	// 		console.log(teamDB);
	// 		res.json(teamDB);
	// 	})
	// 	.catch((err) => res.status(400).json(err));
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
