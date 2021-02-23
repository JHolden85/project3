const router = require('express').Router();
const User = require('../../models/loginData');
const db = require('../../models');
const withAuth = require('../utils/auth');

router.get('/team', withAuth, (req, res) => {
	res.status(200).json({ mes: 'authorize' });
});
