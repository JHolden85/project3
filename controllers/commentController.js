const db = require('../models');

module.exports = { 
    findAll: (req, res) => {
        db.Comments.find({})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    create: (req, res) => {
		db.Comments.create(req.body)
			.then((dbModel) => {
				console.log(dbModel);
				res.json(dbModel);
			})
			.catch((err) => res.status(422).json(err));
	},
    update: (req, res) => {
		db.Comments.findOneAndUpdate({ _placeID: req.params.place_id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
};