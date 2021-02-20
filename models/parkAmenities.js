const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const amenitiesSchema = new Schema({
    parkName: {type: string}
    
	tennis: { type: Boolean, default: false },
	football: { type: Boolean, default: false },
	soccer: { type: Boolean, default: false },
	basketball: { type: Boolean, default: false },
    baseball: { type: Boolean, default: false },
    handball: { type: Boolean, default: false },
    skatepark: { type: Boolean, default: false },
    playground: { type: Boolean, default: false },
    pool: { type: Boolean, default: false },
});

const Amenities = mongoose.model('Amenities', amenitiesSchema);

module.exports = Amenities;