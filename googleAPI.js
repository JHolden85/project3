const APIKey = 'AIzaSyBhI8_HJXXUxW1hkc7nfpZaIxbPCsb265o';
const city = 'Orange';
let endpoint = `https://maps.googleapis.com/maps/api/geocode/json?key=${APIKey}&address=${city}%20US`;
const mongoose = require('mongoose');
const axios = require('axios');
const City = require('./models/City');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mapsdb');

axios.get(endpoint).then(({ data }) => {
	// console.log(data.results[0]);
	City.create(data.results[0])
		.then((response) => {
			res.json(response);
		})
		.catch((err) => console.log(err));
});
