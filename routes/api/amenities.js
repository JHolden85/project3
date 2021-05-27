const router = require('express').Router();
const db = require('../../models');
//const { default: MapResults } = require('../../client/src/components/mapResults');

// Park Amenity Routes

// Get park amenities
// router.get('/currentPark', (req, res) => {
// 	console.log('backend route hit', res);
// 	// Gets all Team data
// 	db.Amenities.find({ park_id: res.park_id })
// 		.then((amenitiesDB) => {
// 			console.log(amenitiesDB);
// 			res.json(amenitiesDB);
// 		})
// 		.catch((err) => res.status(400).json(err));
// });

// Create a Park - CP
router.post('/new', (req, res) => {
	console.log('request', req.body);

	//Posts a new team
	db.Amenities.create(req.body)
		.then((amenitiesDB) => {
			console.log(amenitiesDB);
			res.status(200).json(amenitiesDB);
		})
		.catch((err) => res.status(400).json(err));
});

// Find a Park in DB - CP
router.post('/amenities', (req, res) => {
	console.log('get park body', req.body);

	db.Amenities.findOne({ place_id: req.body.place_id })
		.then((data) => {
			console.log('found park', data);
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).json(err));
});

module.exports = router;
