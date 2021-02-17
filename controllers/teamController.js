const db = require('../models');

module.exports = {
	findAll: (req, res) => {
		db.Team.find({})
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: (req, res) => {
		db.Team.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	update: (req, res) => {
		db.Team.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: (req, res) => {
		db.Team.findByIdAndDelete({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
};
