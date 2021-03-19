const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Ameneties = new Schema({
    // parkName: string,
	tennis: { type: Boolean, default: false },
	football: { type: Boolean, default: false },
	soccer: { type: Boolean, default: false },
	basketball: { type: Boolean, default: false },
    baseball: { type: Boolean, default: false },
    handball: { type: Boolean, default: false },
    skatepark: { type: Boolean, default: false },
    playground: { type: Boolean, default: false },
    pool: { type: Boolean, default: false },
    // place_id: { type: String }
});

const Amenities = mongoose.model('Amenities', Ameneties);

module.exports = Amenities;