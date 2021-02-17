const router = require("express").Router();
const User = require('../../models/loginData');

router.get("/", (req, res) => {
  //this is the route to get current user info
});

router.post("/signup", (req, res) => {
  //sign up the user
  console.log("You're signing up ", req.body);
  User.create(req.body).then(user => res.json(user))
});

router.post("/login", (req, res) => {
  //login the user
  console.log("You're loging in ", req.body);
  User.findOne({username:req.body.username}).then(user => {
      if(!user){
          res.status(500).send("USER DOESNT EXIST!")
      }else if(!user.checkPW(req.body.password)){
          res.status(500).send("WRONG PASSWORD!")
      }else {
          res.json(user);
          //could add session logic and store your session, reference activites from the past
      }
  })
});

module.exports = router;