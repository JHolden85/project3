const router = require("express").Router();

router.get("/", (req, res) => {
  //this is the route to get current user info
});

router.post("/signup", (req, res) => {
  //sign up the user
  console.log("You're signing up ", req.body);
});

router.post("/login", (req, res) => {
  //login the user
  console.log("You're loging in ", req.body);
});

module.exports = router;