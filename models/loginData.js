const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const LoginSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: "Please create a username."
    },
    password: {
      type: String,
      required: "Create a password."
    }
  }
);

LoginSchema.pre('save', function(){
  this.password = bcrypt.hashSync(this.password, 10)
});
LoginSchema.methods.checkPW = function(password){
  return bcrypt.compareSync(password, this.password)
}
const LoginInfo = mongoose.model("LoginInfo", LoginSchema);

module.exports = LoginInfo;
