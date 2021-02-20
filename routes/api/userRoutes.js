const router = require('express').Router();
const User = require('../../models/loginData');
const db = require('../../models');
//const { default: MapResults } = require('../../client/src/components/mapResults');

router.get('/', (req, res) => {
	//this is the route to get current user info

	db.Team.find({})
		.then((teamDB) => {
			console.log(teamDB);
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});
router.post('/team', (req, res) => {
	//this is the route create a team
	console.log(req.session);
	db.Teamm.create({
		...req.body,
		members: [{ id: req.session.user_id, name: req.session.username }],
	})
		.then((teamDB) => {
			console.log(teamDB);
			// User.findByIdAndUpdate()
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

router.get('/', (req, res) => {
	//this is the route to get current user info

	db.Team.find({})
		.then((teamDB) => {
			console.log(teamDB);
			res.json(teamDB);
		})
		.catch((err) => res.status(400).json(err));
});

router.post('/signup', (req, res) => {
	//sign up the user
	console.log("You're signing up ", req.body);
	User.create(req.body).then((user) => res.json(user));
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
				req.session.random_key = 'LSDKFJSDLKJ';
				req.session.username = user.username;
				req.session.user_id = user._id;
				req.session.somethingElse = 'else';
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

module.exports = router;
