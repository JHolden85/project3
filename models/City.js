const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
	address_components: [],
	formatted_address: String,
	geometry: {
		bounds: {},
		location: {},
		location_type: String,
		viewport: {},
	},
	place_id: String,
	types: [String],
});

const CityModel = mongoose.model('City', CitySchema);

module.exports = CityModel;
