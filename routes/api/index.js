const router = require("express").Router();
const userRoutes = require("./userRoutes");
const googleroutes = require("./googleAPI");

// Book routes
router.use("/user", userRoutes);
router.use("/google", googleroutes);
router.get("/test", (req,res) =>{
    console.log("CONSOLE LOG TEST");
    res.json("HELLO TEST");
});

module.exports = router;