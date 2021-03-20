const router = require('express').Router();
const Amenity = require('../../models/ameneties');
const db = require('../../models');


// Get park amenities
router.get('/ameneties', (req, res) => {
	// Gets all Team data

	res.json({
		confirmation: 'SUCCESS!',
		data: "THIS IS THE AMENETIES ROUTE"
	})
	// db.Amenities.find({})
	// 	.then((amenitiesDB) => {
	// 		console.log(amenitiesDB);
	// 		res.json(amenitiesDB);
	// 	})
	// 	.catch((err) => res.status(400).json(err));
});

// Create a Team
router.post('/parkamenity', (req, res) => {
	//Posts a new team
	db.Amenities.create({
		...req.body,
		members: [{ id: req.session.user_id, name: req.session.username }],
	})
		.then((amenitiesDB) => {
			console.log(amenitiesDB);
			res.json(amenitiesDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Update a Team
router.put('/team', async (req, res) => {
	//Posts a new team member

	// Finds User based off username
	const member = await User.findOne({ username: req.body.memberId });
	// Pushes user into Team member list
	db.Team.findByIdAndUpdate(req.body.teamId, {
		$push: {
			members: {
				id: member._id,
				checkedIn: false,
				name: member.name || member.username,
			},
		},
	})
		.then((teamDB) => {
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Delete a Team
router.delete('/team', async (req, res) => {
	console.log('router side', req);
	// Find Team by ID
	const team = await db.Team.findById(req.body._id.teamId);
	//Delete a team
	console.log('ID', team);
	db.Team.findByIdAndDelete(team)
		.then(() => {
			console.log('team successfully deleted');
			res.status(200).json({ msg: 'success' });
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

