const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const amenities = new Schema({
	tennis: { type: String, required: true },
	football: { type: Date, default: Date.now },
	soccer: { type: String },
	basketball: { type: Boolean },
    baseball: {},
    handball: {},
    skatepark: {},
    playground: {},
    pool:{},
});

const Amenities = mongoose.model('Amenities', amenities);

module.exports = Amenities;