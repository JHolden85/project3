const router = require('express').Router();
const db = require('../../models');
//const { default: MapResults } = require('../../client/src/components/mapResults');

// Park Amenity Routes

// Get park amenities
router.get('/currentPark', (req, res) => {
	console.log('backend route hit', res);
	// Gets all Team data
	db.Amenities.find({ park_id: res.park_id })
		.then((amenitiesDB) => {
			// console.log(amenitiesDB);
			res.json(amenitiesDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Create a Park - CP
router.post('/amenities', (req, res) => {
	console.log('backend route hit');
	//Posts a new team
	db.Amenities.create({
		parkName: req.name,
		id: req.place_id,
	})
		.then((amenitiesDB) => {
			// console.log(amenitiesDB);
			res.json(amenitiesDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Find a Park in DB - CP
router.get('/amenities', (req, res) => {
	console.log('get park route', res.query);
	db.Amenities.findOne({ place_id: res.query.place_id }, () => {
		console.log(res.query);
	});
});

module.exports = router;
