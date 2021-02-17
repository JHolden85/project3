const router = require("express").Router();
const userRoutes = require("./userRoutes");

// Book routes
router.use("/user", userRoutes);

module.exports = router;
