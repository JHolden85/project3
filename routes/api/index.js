const router = require("express").Router();
const userRoutes = require("./userRoutes");
const googleroutes = require("./googleAPI");

// Book routes
router.use("/user", userRoutes);
router.use("/google", googleroutes);

module.exports = router;