const router = require('express').Router();
const axios = require('axios');

router.post('/search', (req, res) => {
	console.log(req.body);
	const { location, radius, type } = req.body;
	const mapsURL =
		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
		//location lat & lon
		// "33.771713,-118.18131"
		location +
		'&radius=' +
		//radius in a circular meter
		// "1500"
		radius +
		'&type=' +
		//place type ie Park, Restaurant, Movie-Theater, etc
		// "park"
		type +
		'&key=' +
		process.env.googleApiKey;

	console.log('API.js ' + mapsURL);
	axios
		.get(mapsURL)
		.then(({ data }) => {
			console.log(data);
			res.json(data.results);
		})
		.catch((err) => console.log(err));
});

router.get('/parksearch/:location/:radius/:type', (req, res) => {
	const { location, radius, type } = req.params;

	console.log('HEY I MADE IT HERE! ', location, radius, type);
	const mapsURL =
		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
		//location lat & lon
		// "33.771713,-118.18131"
		location +
		'&radius=' +
		//radius in a circular meter
		// "1500"
		radius +
		'&type=' +
		//place type ie Park, Restaurant, Movie-Theater, etc
		// "park"
		type +
		'&key=' +
		process.env.googleApiKey;

	//  console.log("API.js " + mapsURL);
	axios.get(mapsURL).then(({ data }) => res.json(data.results));
});

module.exports = router;
