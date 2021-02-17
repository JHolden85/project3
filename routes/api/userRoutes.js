const router = require('express').Router();
const db = require('../../models');
const controller = require('../../controllers/teamController');

router.get('/', (req, res) => {
	//this is the route to get current user info

	// controller.findAll();

	db.Team.find({})
		.then((teamDB) => {
			console.log(teamDB);
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

// 	  NO API/TEAM PAGE IN REACT - THROWS 404 ERROR
// /////////////////////////////////////////////////

// router.get('/api/team', (req, res) => {
// 	//this is the route to get team info
// 	db.Team.find({})
// 		.then((dbTeam) => res.json(dbTeam))
// 		.catch((err) => res.status(400).json(err));
// });

// router.post('/api/team', (req, res) => {
// 	db.Team.create(req.body)
// 		.then((teamMember) => res.json(teamMember))
// 		.catch((err) => res.status(400).json(err));
// });

// router.post('/api/team', (req, res) => {
// 	db.Team.updateOne(req.body)
// 		.then((teamMember) => res.json(teamMember))
// 		.catch((err) => res.status(400).json(err));
// });

// /////////////////////////////////////////////////

router.post('/signup', (req, res) => {
	//sign up the user
	console.log("You're signing up ", req.body);
});

router.post('/login', (req, res) => {
	//login the user
	console.log("You're loging in ", req.body);
});

module.exports = router;
