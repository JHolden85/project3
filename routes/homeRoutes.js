const router = require('express').Router();
const User = require('../../models/loginData');
const db = require('../../models');
const withAuth = require('../utils/auth');

router.get('/Teams', withAuth, (req, res) => {
	res.status(200).json({ mes: 'authorize' });
});
