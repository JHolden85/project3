const router = require('express').Router();
const User = require('../../models/loginData');
const db = require('../../models');
//const { default: MapResults } = require('../../client/src/components/mapResults');

// Team Routes - CP
// ///////////////////////////////////////////

// Get current Team
router.get('/team', (req, res) => {
	// Gets all Team data
	db.Team.find({})
		.then((teamDB) => {
			console.log(teamDB);
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Create a Team
router.post('/team', (req, res) => {
	//Posts a new team
	db.Team.create({
		...req.body,
		members: [{ id: req.session.user_id, name: req.session.username }],
	})
		.then((teamDB) => {
			console.log(teamDB);
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Update a Team
router.put('/team/:_id', (req, res) => {
	//Posts a new team member
	db.Team.findByIdAndUpdate(req.params._id, {
		$push: {
			members: { id: req.body._id, checkedIn: false, name: req.body.name },
		},
	})
		.then((teamDB) => {
			console.log(teamDB);
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Delete a Team
router.delete('/team', (req, res) => {
	//Delete a team
	db.Team.destroy(req.params._id, ...req.body)
		.then(() => {
			// console.log(teamDB);
			res.json({ msg: 'team successfully deleted ' });
		})
		.catch((err) => res.status(400).json(err));
});
// ///////////////////////////////////////////

router.post('/signup', (req, res) => {
	//sign up the user
	console.log("You're signing up ", req.body);
	User.create(req.body).then((user) => {
		req.session.username = user.username;
		req.session.user_id = user._id;
		req.session.logged_in = true;
		req.session.save((err) => {
			console.log(err);
		});
		res.json(user);
	});
});

router.post('/login', (req, res) => {
	//login the user
	console.log("You're loging in ", req.body);
	User.findOne({ username: req.body.username })
		.then((user) => {
			if (!user) {
				res.status(500).send('USER DOESNT EXIST!');
			} else if (!user.checkPW(req.body.password)) {
				res.status(500).send('WRONG PASSWORD!');
			} else {
				console.log("YOU'RE LOGGED IN", user);
				//could add session logic and store your session, reference activities from the past
				req.session.username = user.username;
				req.session.user_id = user._id;
				req.session.logged_in = true;
				req.session.save((err) => {
					console.log(err);
				});

				res.json(user);
			}
		})
		.catch((err) => console.log(err));
});

//put our env var on our server, and rename that key to the env later on
router.get('/getkey', (req, res) => {
	//this is the route to get current user info
	res.json({
		key: 'RANDOM TEXT',
	});
});

router.get('/current_user', (req, res) => {
	if (req.session.username) {
		res.json({ username: req.session.username, id: req.session.user_id });
	} else {
		res.json(null);
	}
});

router.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.json('OK');
	});
});

// // router to post pictures 
// router.post("/user")

module.exports = router;
