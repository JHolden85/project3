const router = require('express').Router();
const db = require('../../models');
//const { default: MapResults } = require('../../client/src/components/mapResults');

// Park Amenity Routes

// Get park amenities
router.get('/currentPark', (req, res) => {
	// Gets all Team data
	db.Amenities.find({})
		.then((amenitiesDB) => {
			console.log(amenitiesDB);
			res.json(amenitiesDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Create a Park - CP
router.post('/park', (req, res) => {
	//Posts a new team
	db.Amenities.create({
		parkName: req.name,
		id: req.place_id,
	})
		.then((amenitiesDB) => {
			console.log(amenitiesDB);
			res.json(amenitiesDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Find a Park in DB - CP
router.get('/park', (req, res) => {
	console.log('get park route', res);
	db.Amenities.findOne({ id: res.place_id });
});

module.exports = router;
