const router = require('express').Router();
const userRoutes = require('./userRoutes');
const googleRoutes = require('./googleAPI');
const amenitiesRoutes = require('./amenities');

// Book routes
router.use('/user', userRoutes);
router.use('/google', googleRoutes);
router.use('/park', amenitiesRoutes);

module.exports = router;
